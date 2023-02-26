import {useDispatch, useSelector} from "react-redux";
import styles from "./styles.module.scss";
import {useEffect, useState} from "react";
import {deleteSelectedPackage} from "../../../../../redux/actions/packagesAction";
import validator from "validator";

const Info = ({numberOfNoktos, setNumberOfNoktos}) => {
    const {userWallet} = useSelector(({user}) => user);
    const {promotion} = useSelector(({promotion}) => promotion);
    const noktosPackages = useSelector(({noktosPackages}) => noktosPackages);
    const { packages } = noktosPackages;
    const dispatch = useDispatch()
    const { noktos, centauros } = userWallet;
    const [total, setTotal] = useState(0)
    const handleChangeNumberOfNoktos = (value) => {
        if(validator.isNumeric(value) || value === ""){
            setNumberOfNoktos(value)
        }
    }

    const deleteSelectedNoktos = () => {
        setNumberOfNoktos("")
    }

    useEffect(() => {
        let total = packages.reduce((previousValue, currentValue) => (currentValue.numero_tokens * currentValue.selectedPackages) + previousValue, 0)
        total += parseInt(numberOfNoktos)
        setTotal(total)
    }, [packages, numberOfNoktos])

    return (
        <div className={styles.container}>
            <div className={styles.custom_noktos}>
                <p className={styles.add_noktos_title}>¿Agregar Noktos individuales?</p>
                <div className="row">
                    <div className="col-md-12 d-flex flex-column justify-content-center">
                        <div className="generic__input_container">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span
                                            className="input-group-text blue_addon"
                                            id="txt-password-addon"><i
                                            className="fas fa-coins"/>
                                        </span>
                                </div>
                                <input type="text"
                                       className={`form-control rounded_input`}
                                       placeholder="Insertar número de noktos"
                                       onChange={(event) => handleChangeNumberOfNoktos(event.target.value)}
                                       value={numberOfNoktos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.Info}>
                <h5>Información Adicional:</h5>
                <div>
                    <div>
                        <label>Noktos Disponibles:</label>
                        <span>{noktos}</span>
                    </div>
                    <div>
                        <label>Centauros Disponibles:</label>
                        <span>{centauros}</span>
                    </div>
                </div>
                <div className={styles.Info__detail_noktos}>
                    <h6>Tus paquetes incluyen:</h6>
                    <div className="d-flex flex-column">
                        {
                            packages.map(noktosPackage => {
                                if(noktosPackage.selectedPackages > 0) {
                                    return <div className="row w-100 mb-2 mb-2">
                                        <div className="col-md-5 d-flex justify-content-between mt-2 m-xl-0 align-items-center">
                                            <p className={`m-0 ${styles.text_selected_package}`}>Paquete {noktosPackage.id} ({noktosPackage.selectedPackages})</p>

                                            <button className={`btn ${styles.delete_package}`} onClick={() => dispatch(deleteSelectedPackage( noktosPackage.id))}>X</button>
                                        </div>
                                        <div className="col-md-7 d-flex justify-content-end mt-2 m-xl-0">
                                            <div className={`d-flex justify-content-center w-100 w-md-50 ${styles.subtotal_package_selected}`}>
                                                <p className="m-0">{noktosPackage.numero_tokens * noktosPackage.selectedPackages} Noktos</p>
                                            </div>
                                        </div>
                                    </div>
                                }else{
                                    return ""
                                }
                            })
                        }
                        {
                            numberOfNoktos>0 && numberOfNoktos !== "" &&
                            <div className="row w-100 mb-2 mb-2">
                                <div className="col-md-5 d-flex justify-content-between align-items-center">
                                    <p className={`m-0 ${styles.text_selected_package}`}>Noktos individuales</p>

                                    <button className={`btn ${styles.delete_package}`}
                                            onClick={() => deleteSelectedNoktos()}>X
                                    </button>
                                </div>
                                <div className="col-md-7 d-flex justify-content-end">
                                    <div
                                        className={`d-flex justify-content-center w-50 ${styles.subtotal_package_selected}`}>
                                        <p className="m-0">{numberOfNoktos} Noktos</p>
                                    </div>
                                </div>
                            </div>
                        }
                        <hr/>
                        {
                            total>0 && total !== "" &&
                            <div className="row w-100 mb-2 mb-2">
                                <div className="col-md-5 d-flex justify-content-between align-items-center">
                                    <p className={`m-0 ${styles.text_selected_package}`}>Total Noktos</p>
                                </div>
                                <div className="col-md-7 d-flex justify-content-end">
                                    <div
                                        className={`d-flex justify-content-center w-50 ${styles.subtotal_package_selected}`}>
                                        <p className="m-0">{total} Noktos</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                {
                    (promotion?.token > 0 || promotion?.centauro > 0) &&
                    <div className={styles.promoInfo}>
                        <div className={`row`}>
                            <div className="col-md-2 d-flex justify-content-center align-items-center">
                                <i className={`${styles.icon} fas fa-check-circle`}/>
                            </div>
                            <div className={`col-md-10 ${styles.promoInfo__text}`}>
                                {
                                    promotion?.token > 0 &&
                                    <p className={styles.promoInfo__text}>Noktos de
                                        regalo: <span>{promotion.token}</span></p>
                                }
                                {
                                    promotion?.centauro>0&&
                                    <p>Centauros de regalo: <span>{promotion.centauro}</span></p>
                                }
                            </div>
                        </div>
                    </div>
                }
                <p className="mt-5">Para usarse en cualquier servicio dentro de Noktos.</p>
            </section>
        </div>
    );
};

export default Info;