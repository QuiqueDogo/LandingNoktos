import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { useStyles } from "../../makeStyles";
import { Button, IconButton } from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const InvoiceItem = ({
    date,
    title,
    value,
    idItem,
    isActive,
    handleClickItem,
    handleShowModal,
}) => {
    const router = useRouter();
    const classes = useStyles();

    return (
        <div
            className={styles.InvoiceItem}
            style={{
                backgroundColor: `${isActive ? "#f8f8f8" : "#fff"}`,
            }}
            onClick={() => handleClickItem(idItem)}
        >
            <div className={styles.InvoiceItem__info}>
                <div>
                    <Brightness2Icon classes={{ root: classes.iconStyle }} />
                </div>
                <div>
                    <h4>Factura - {title}</h4>
                    <span>{date}</span>
                    <div>
                        <label>{value}</label>
                    </div>
                </div>
            </div>
            <div>
                <Button
                    variant="contained"
                    disableElevation
                    classes={{ root: classes.showInvoiceStyle }}
                    onClick={() => handleShowModal()}
                >
                    Ver Factura
                </Button>
                <Button
                    variant="contained"
                    disableElevation
                    classes={{ root: classes.buyAgainStyle }}
                    onClick={() => router.push("/buy-tokens")}
                >
                    Volver a comprar
                </Button>
                <IconButton onClick={() => handleShowModal()}>
                    <ArrowForwardIosIcon
                        classes={{ root: classes.finalArrowStyle }}
                    />
                </IconButton>
            </div>
        </div>
    );
};

export default InvoiceItem;
