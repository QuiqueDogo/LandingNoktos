import styles from "./styles.module.scss";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { useStyles } from "../../makeStyles";
import CloseIcon from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import { formatMoney } from "../../../../../../../utils/formatMoney";

const useStylesModal = makeStyles({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});

const InvoiceDetailItem = ({ handleCloseModal, invoice }) => {
    const classes = useStyles();

    const linkInvoice = invoice?.custom_field_hash.cf_link_factura_sat;
    console.log(linkInvoice, "hola");

    return (
        <div className={styles.InvoiceDetail__item}>
            <div className={styles.InvoiceDetail__item__info}>
                <div>
                    <div></div>
                    <h4>Factura No. {invoice?.invoice_id}</h4>
                </div>
                <IconButton onClick={handleCloseModal}>
                    <CloseIcon fontSize="large" />
                </IconButton>
            </div>
            <table className={styles.InvoiceDetail__item__tableOne}>
                <tr>
                    <th>DESCRIPCIÓN FACTURA</th>
                    <th>RFC</th>
                    <th>MONTO</th>
                    <th>IVA</th>
                    <th>TOTAL</th>
                </tr>
                <tr>
                    <td>
                        <div
                            className={
                                styles.InvoiceDetail__item__tableOne__customize
                            }
                        >
                            <div>
                                <img src="/icons/moon.png" alt="Noktos" />
                            </div>
                            <div>
                                <label>
                                    Compra {formatMoney(invoice?.total / 1.16)}
                                </label>
                                <span>No. Ref: {invoice?.invoice_number}</span>
                                <span>ID: {invoice?.invoice_id}</span>
                            </div>
                        </div>
                    </td>
                    <td>34-827-9889</td>
                    <td>+{formatMoney(invoice?.total / 1.16)}</td>
                    <td>+{formatMoney((invoice?.total / 1.16) * 0.16)}</td>
                    <td>+{invoice?.total}</td>
                </tr>
            </table>
            <hr />
            <table className={styles.InvoiceDetail__item__tableTwo}>
                <tr>
                    <th>MÉTODO DE PAGO</th>
                    <th>MONTO</th>
                    <th>ESTATUS</th>
                </tr>
                <tr>
                    <td>
                        <div
                            className={
                                styles.InvoiceDetail__item__tableTwo__customize
                            }
                        >
                            <div>
                                <img src="/icons/checkIcon.png" alt="Check" />
                            </div>
                            <div>
                                <div>
                                    <label>Pago desde tarjeta</label>
                                    <span>#3433</span>
                                </div>
                                <span>Hoy 11:54 am</span>
                            </div>
                        </div>
                    </td>
                    <td>+{invoice?.total}</td>
                    <td>
                        <Button
                            disableElevation
                            variant="contained"
                            disabled={!linkInvoice}
                            classes={{ root: classes.downloadButton }}
                        >
                            <a href={linkInvoice} target="_blank">
                                Descargar
                            </a>
                        </Button>
                    </td>
                </tr>
            </table>
            <Button
                disableElevation
                variant="contained"
                classes={{ root: classes.goBackButton }}
                onClick={handleCloseModal}
            >
                Volver
            </Button>
        </div>
    );
};

const InvoiceDetail = ({ invoice, showModalDetail, handleCloseModal }) => {
    const classes = useStylesModal();

    return (
        <Modal
            closeAfterTransition
            open={showModalDetail}
            className={classes.modal}
            onClose={handleCloseModal}
            BackdropComponent={Backdrop}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={showModalDetail}>
                <div className={styles.InvoiceDetail}>
                    <InvoiceDetailItem
                        invoice={invoice}
                        handleCloseModal={handleCloseModal}
                    />
                </div>
            </Fade>
        </Modal>
    );
};

export default InvoiceDetail;
