import styles from "./styles.module.scss";
import {useStyles} from "./customStyles";
import AddIcon from "@material-ui/icons/Add";
import {Snackbar} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {useDispatch, useSelector} from "react-redux";
import Hierarchy from "./components/Hierarchy/Hierarchy";
import PayButton from "./components/PayButton/PayButton";
import SavedCards from "./components/SavedCards/SavedCards";
import {formatMoney} from "../../../../../utils/formatMoney";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import {hideAlertStripeError} from "../../../../../redux/actions/packagesAction";
import React, {useEffect, useState} from "react";
import GenericButton from "../../../../../components/GenericButton";
import {checkPromocodeRequest} from "../../../../../services/promoService";
import Swal from "sweetalert2";
import {hideLoader, showLoader} from "../../../../../redux/actions/application";
import {showToast} from "../../../../../utils/utils";
import {setPromotion} from "../../../../../redux/actions/promotionAction";

const Detail = ({numberOfNoktos}) => {
    const [promocode, setPromocode] = useState("")
    const [showPromoError, setShowPromoError] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();
    const noktosPackages = useSelector(({noktosPackages}) => noktosPackages);
    const {packages} = noktosPackages;

    const {company} = useSelector(({company}) => company);
    const {promotion} = useSelector(({promotion}) => promotion);

    const {stripeError, showSnackbar} = noktosPackages;
    const {membership, selectedPackage, paymentMethod} = noktosPackages;
    const {valor_token} = membership;
    const {id, numero_tokens} = selectedPackage;

    const handleCloseSnackbar = () => dispatch(hideAlertStripeError());

    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTaxt] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let subtotal = packages.reduce((previousValue, currentValue) => (currentValue.numero_tokens * currentValue.selectedPackages * valor_token) + previousValue, 0)
        subtotal += numberOfNoktos * valor_token
        setSubTotal(subtotal)
    }, [packages, numberOfNoktos])

    useEffect(() => {
        setTaxt(subTotal * 0.16)
        setTotal(subTotal + subTotal * 0.16)

    }, [subTotal])

    const getIdsOfSelectedPackages = () => {
        let ids = []
        packages.forEach(packageOfNoktos => {
            if(packageOfNoktos.selectedPackages>0)
                ids.push({"bolsa_id": packageOfNoktos.id, "cantidad": packageOfNoktos.selectedPackages})
        })

        if(numberOfNoktos>0){
            ids.push({"bolsa_id": 7, "cantidad": numberOfNoktos})
        }
        return ids
    }

    const checkPromocode = () => {
        if (promocode !== null && promocode !== "") {
            dispatch(showLoader())

            let dataRequest = {
                promocode: promocode,
                bolsas_token: getIdsOfSelectedPackages(),
                compania_id: company?.id,
            };
            checkPromocodeRequest(dataRequest)
                .then((response) => {
                    dispatch(hideLoader())
                    if (response.data?.res === false) {
                        setShowPromoError(true)
                        showToast({type: 'warning', text: 'La promoción no está disponible', duration: 4600})
                    } else {
                        setShowPromoError(false)

                    }
                    dispatch(setPromotion(response.data.data))
                })
                .catch((error) => {
                    dispatch(hideLoader())
                    Swal.fire({
                        title: "Error",
                        text: `No se pudo consultar la información`,
                        icon: "warning",
                        confirmButtonText: "Aceptar",
                    });
                });
        }
    };

    const clearPromo = () => {
        setPromocode("")
        dispatch(setPromotion(null))
    }

    const getTotalSubtotalWithPercentPromotion = (validation) => {
        let selectedPackages = packages?.filter(packageSelected => packageSelected?.selectedPackages>0)

        let idsPackagesApply = promotion?.aplica_a?.map(packageSelected => packageSelected?.id)
        idsPackagesApply = new Set(idsPackagesApply);

        const selectedPackagesPromotion = packages?.filter((packageSelected) =>
            (idsPackagesApply?.has(packageSelected.id)))
        const selectedPackagesHasntPromotion = selectedPackages.filter(({ id: id1 }) => !selectedPackagesPromotion.some(({ id: id2 }) => id2 === id1));

        let total = selectedPackagesHasntPromotion.reduce((previousValue, currentValue) => (currentValue.numero_tokens * currentValue.selectedPackages * valor_token) + previousValue, 0)
        let totalPromo = (selectedPackagesPromotion.reduce((previousValue, currentValue) => (currentValue.numero_tokens * currentValue.selectedPackages * valor_token) + previousValue, 0))

        switch (validation) {
            case 's':
                return formatMoney((totalPromo - parseFloat(promotion?.valor_descuento) + total))
            case 't':
                return formatMoney((totalPromo - parseFloat(promotion?.valor_descuento)+ total) * 1.16)
            case 'tax':
                return formatMoney((totalPromo - parseFloat(promotion?.valor_descuento)+ total) * 0.16)
            default:
                return formatMoney(0)
        }
    }

    return (
        <>
            <section className={styles.Detail}>
                <h3>Detalle del pago</h3>
                <div>
                    {
                        packages.map(noktosPackage => {
                            if (noktosPackage.selectedPackages > 0) {
                                return <div className="row mb-2 mb-2">
                                    <div className="col-md-6 d-flex justify-content-between align-items-center">
                                        <label
                                            className={`m-0 ${styles.text_selected_package}`}>Paquete {noktosPackage.id} -
                                            Noktos</label>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <div
                                            className={`d-flex justify-content-end w-50 ${styles.subtotal_package_selected}`}>
                                            <p className="m-0">{formatMoney(noktosPackage.numero_tokens * noktosPackage.selectedPackages * valor_token)}</p>
                                        </div>
                                    </div>
                                </div>
                            } else {
                                return ""
                            }
                        })
                    }
                    {
                        numberOfNoktos > 0 && numberOfNoktos !== "" &&
                        <div className="row mb-2 mb-2">
                            <div className="col-md-6 d-flex justify-content-between align-items-center">
                                <label className={`m-0 ${styles.text_selected_package}`}>Noktos individuales</label>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <div
                                    className={`d-flex justify-content-end w-50 ${styles.subtotal_package_selected}`}>
                                    <p className="m-0">{formatMoney(numberOfNoktos * valor_token)}</p>
                                </div>
                            </div>
                        </div>
                    }
                    <hr/>
                    <div className="row mb-2 mb-2">
                        <div className="col-md-6 d-flex justify-content-between align-items-center">
                            <label className={`m-0 ${styles.text_selected_package}`}>Subtotal</label>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div
                                className={`d-flex justify-content-end w-50 ${styles.subtotal_package_selected}`}>
                                <p className="m-0">
                                    {
                                        (promotion?.valor_descuento > 0 || promotion?.porcentaje > 0) &&
                                        <span className={styles.price_cross}>{formatMoney(subTotal)}</span>
                                    }
                                    {
                                        (promotion?.valor_descuento > 0 && promotion?.porcentaje === 0) &&
                                        <span>{formatMoney(subTotal - promotion?.valor_descuento)}</span>
                                    }
                                    {
                                        (promotion?.porcentaje > 0) &&
                                        <span>{getTotalSubtotalWithPercentPromotion('s')}</span>
                                    }
                                    {
                                        (promotion?.valor_descuento === 0 && promotion?.porcentaje === 0 || promotion === null) &&
                                        <span>{formatMoney(subTotal)}</span>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    {
                        (promotion?.valor_descuento > 0 && promotion?.porcentaje === 0) &&
                        <React.Fragment>
                            <div className={styles.Detail__discount}>
                                <div>
                                    <i className="fas fa-tag"/>
                                    <label>Descuento directo</label>
                                </div>
                                <span>-{formatMoney(promotion?.valor_descuento)}</span>
                            </div>
                            <hr/>
                        </React.Fragment>
                    }
                    {
                        (promotion?.porcentaje > 0) &&
                        <React.Fragment>
                            <div className={styles.Detail__discount}>
                                <div>
                                    <i className="fas fa-tag"/>
                                    <label>{promotion?.porcentaje}% Descuento</label>
                                </div>
                                <span>-{formatMoney(promotion?.valor_descuento)}</span>
                            </div>
                            <hr/>
                        </React.Fragment>
                    }
                    <div className={styles.Detail__taxes}>
                        <div>
                            <div>
                                <AddIcon
                                    classes={{root: classes.plusStyle}}
                                />
                            </div>
                            <span>impuestos (16%)</span>
                        </div>
                        {
                            (promotion?.valor_descuento > 0 && promotion?.porcentaje === 0) &&
                            <span>{formatMoney((subTotal-promotion?.valor_descuento) * 0.16)}</span>
                        }
                        {
                            (promotion?.valor_descuento === 0 && promotion?.porcentaje > 0) &&
                            <span>{formatMoney((subTotal * (1 + (promotion?.porcentaje / 100))) * 0.16)}</span>
                        }
                        {
                            (promotion?.valor_descuento > 0 && promotion?.porcentaje > 0) &&
                            <span>{getTotalSubtotalWithPercentPromotion('tax')}</span>
                        }
                        {
                            ((promotion?.valor_descuento === 0 && promotion?.porcentaje === 0) || promotion === undefined || promotion === null) &&
                            <span>{formatMoney(tax)}</span>
                        }
                    </div>
                    <hr/>
                    <div>
                        <div className="row">
                            <div className="col-md-8 d-flex align-items-center">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text blue_addon">
                                            <i className="fas fa-tags"/>
                                        </span>
                                    </div>
                                    <div className="containerInButton">
                                        <input
                                            type="text"
                                            className={`form-control rounded_input`}
                                            placeholder="Inserta tu cupón aquí"
                                            onChange={(event) => setPromocode(event.target.value)}
                                            value={promocode}
                                        />
                                        <button onClick={() => clearPromo()} className="btnClear">x</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <GenericButton text="Validar" buttonClass="generic__button_slim"
                                               action={checkPromocode}/>
                            </div>
                        </div>
                        {
                            showPromoError &&
                            <p className="error-text">*Código de descuento inválido</p>
                        }

                    </div>
                    <hr/>
                    <div className={styles.Detail__total}>
                        <div>
                            <i className="fas fa-coins"/>
                            <label>Total a pagar</label>
                        </div>
                        {
                            (promotion?.porcentaje === 0 && promotion?.valor_descuento > 0) &&
                            <span>{formatMoney((subTotal-promotion?.valor_descuento) * 1.16)}</span>
                        }
                        {
                            (promotion?.porcentaje > 0 && promotion?.valor_descuento === 0) &&
                            <span>{formatMoney((subTotal * (1 + (promotion?.porcentaje / 100))) * 1.16)}</span>
                        }
                        {
                            ((promotion?.porcentaje > 0 && promotion?.valor_descuento > 0)) &&
                            <span>{getTotalSubtotalWithPercentPromotion('t')}</span>
                        }
                        {
                            ((promotion?.porcentaje === 0 && promotion?.valor_descuento === 0) || promotion === undefined || promotion === null) &&
                            <span>{formatMoney(total)}</span>
                        }
                    </div>
                    {
                        (promotion?.token > 0 || promotion?.centauro>0)&&
                        <div className={styles.promoInfo}>
                            <div className={`row`}>
                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                    <i className= {`${styles.icon} fas fa-check-circle`}/>
                                </div>
                                <div className={`col-md-10 ${styles.promoInfo__text_container}`}>
                                    {
                                        promotion?.token>0&&
                                        <p className={styles.promoInfo__text}>Noktos de regalo: <span>{promotion.token}</span></p>
                                    }
                                    {
                                        promotion?.centauro>0&&
                                        <p className={styles.promoInfo__text}>Centauros de regalo: <span>{promotion.centauro}</span></p>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    <PaymentMethod/>
                    {paymentMethod === 1 && <SavedCards/>}
                    <PayButton
                        numberOfNoktos={numberOfNoktos}
                        promocode={promocode}/>
                </div>
            </section>
            <Snackbar
                open={showSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <Alert severity="error">{stripeError}</Alert>
            </Snackbar>
        </>
    );
};

export default Detail;
