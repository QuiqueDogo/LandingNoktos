import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { makeStyles } from "@material-ui/styles";
import { Button, Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {noCards, noSelectedCard, noCDFI, noRFC, noTokens} from "./alerts";
import InvoiceForm from "./components/InvoiceForm/InvoiceForm";
import { buyWithCardSuccessful, buyWithCardFailed } from "./alerts";
import { buyWithTransferSuccesful, buyWithTransferFailed } from "./alerts";
import { showLoader } from "../../../../../../../redux/actions/application";
import { hideLoader } from "../../../../../../../redux/actions/application";
import { payTokensRequest } from "../../../../../../../services/noktosService";
import { reloadUserWallet } from "../../../../../../../redux/actions/userAction";
import { setGenerateInvoice } from "../../../../../../../redux/actions/packagesAction";
import { payTokensWithTransferRequest } from "../../../../../../../services/noktosService";

const useStyles = makeStyles({
    buttonPay: {
        padding: "10px 0",
        color: "#fff",
        backgroundColor: "#1B1D21",
        borderRadius: 15,
        textTransform: "none",
        width: 155,
        fontWeight: 600,
        fontSize: 16,
    },
    checkButton: {
        color: "#00c2ff",
        "&$checked": {
            color: "#00c2ff",
        },
    },
});

const PayButton = ({promocode, numberOfNoktos}) => {
    const router = useRouter();
    const classes = useStyles();
    const dispatch = useDispatch();
    const { company } = useSelector(({ company }) => company);
    const noktosPackages = useSelector(({ noktosPackages }) => noktosPackages);
    const {packages} = noktosPackages;

    const { costCenterId } = noktosPackages;
    const { membership, selectedCard, selectedPackage } = noktosPackages;
    const { generateInvoice, paymentMethod, cards, CDFI_Id } = noktosPackages;

    const getTotalOfNoktos = () => {
        let totalOfNoktos = packages.reduce((previousValue, currentValue) => (currentValue.numero_tokens * currentValue.selectedPackages) + previousValue, 0)
        if(numberOfNoktos !== ""){
            totalOfNoktos += parseInt(numberOfNoktos)
        }
        return totalOfNoktos
    }

    const getTotalOfCentauros = () => {
        let totalOfNoktos = packages.reduce((previousValue, currentValue) => (currentValue.noches_gratis * currentValue.selectedPackages) + previousValue, 0)
        return totalOfNoktos
    }

    const getIdsOfSelectedPackages = () => {
        let ids = []
        packages.forEach(packageOfNoktos => {
            if(packageOfNoktos.selectedPackages>0)
                ids.push({"bolsa_id": packageOfNoktos.id, "cantidad": packageOfNoktos.selectedPackages})
        })

        if(numberOfNoktos !== ""){
            ids.push({"bolsa_id": 7, "cantidad": parseInt(numberOfNoktos)})
        }
        return ids
    }

    const handleCheck = ({ target }) =>
        dispatch(setGenerateInvoice(target.checked));

    const buyPackageWithCard = async () => {
        try {
            dispatch(showLoader());
            let body = {
                membresia_id: membership?.id.toString(),
                card_id: selectedCard?.id,
                token: getTotalOfNoktos(),
                centauros: getTotalOfCentauros(),
                bolsas_token: getIdsOfSelectedPackages(),
                centro_costo_id: costCenterId,
                promocode: promocode !== undefined? promocode: null,
                compania_id: company?.id,
                solicitar_factura: generateInvoice ? 1 : 0,
                cfdi_id: generateInvoice ? CDFI_Id : "",
            };
            await payTokensRequest(body);
            dispatch(reloadUserWallet(new Date()));
            dispatch(hideLoader());
            await buyWithCardSuccessful();
            router.push("/mis-compras");
        } catch (error) {
            console.log(error);
            dispatch(hideLoader());
            buyWithCardFailed(error);
        }
    };

    const buyPackageWithTransfer = async () => {
        try {
            dispatch(showLoader());
            let body = {
                membresia_id: membership?.id.toString(),
                token: getTotalOfNoktos(),
                centauros: getTotalOfCentauros(),
                bolsas_token: getIdsOfSelectedPackages(),
                promocode: promocode,
                solicitar_factura: generateInvoice ? 1 : 0,
                cfdi_id: generateInvoice ? CDFI_Id : "",
            };
            const response = await payTokensWithTransferRequest(body);
            dispatch(hideLoader());
            await buyWithTransferSuccesful(response);
            router.push("/mis-compras");
        } catch (error) {
            console.log(error);
            dispatch(hideLoader());
            buyWithTransferFailed(error);
        }
    };

    const handlePayPackage = () => {
        // TARJETA DEBITO / CREDITO
        if (paymentMethod === 1) {
            if (getTotalOfNoktos() === 0) return noTokens();
            if (cards?.length === 0) return noCards();
            if (!selectedCard) return noSelectedCard();
            if (generateInvoice && !isValidRFC()) return noRFC();
            if (generateInvoice && !CDFI_Id) return noCDFI();
            else buyPackageWithCard();
            // TRANSFERENCIA
        } else if (paymentMethod === 2) {
            if (getTotalOfNoktos() === 0) return noTokens();
            if (!generateInvoice) buyPackageWithTransfer();
            else {
                if (!CDFI_Id) return noCDFI();
                else if (!isValidRFC()) return noRFC();
                else buyPackageWithTransfer();
            }
        }
    };

    const isValidRFC = () => {
        return (/^([A-ZÑ a-zñ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z a-z\d]{2})([A a\d])$/.test(company?.rfc))
    }

    return (
        <div className={styles.PayButton}>
            <div>
                <div>
                    <div>
                        <Checkbox
                            color="default"
                            onChange={handleCheck}
                            checked={generateInvoice}
                            className={classes.checkButton}
                        />
                        <label>Generar factura de esta compra</label>
                    </div>
                    <p className={styles.noteInvoice}>Recuerda que tienes que generar tu factura en el mes en que realizas la compra.</p>
                </div>
                <Button
                    disableElevation
                    variant="contained"
                    onClick={handlePayPackage}
                    className={classes.buttonPay}
                >
                    Pagar
                </Button>
            </div>
            {generateInvoice && <InvoiceForm />}
        </div>
    );
};

export default PayButton;
