import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import styles from "./styles.module.scss";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        borderColor: "#00c2ff",
        borderRadius: 15,
        color: "#00c2ff",
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: "none",
        padding: "0.9rem",
        width: "55%",
    },
});

const Banner = () => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <div className={styles.Banner}>
            <div>
                <img src="/img/Invoices/main.png" alt="Noktos Facturas" />
            </div>
            <div>
                <h1>Tus Facturas</h1>
                <span>Revisa todas tus facturas de tus compras desde aquí</span>
                <Button
                    variant="outlined"
                    classes={{ root: classes.root }}
                    onClick={() => router.push("/buy-tokens")}
                >
                    Realizar una compra
                </Button>
            </div>
        </div>
    );
};

export default Banner;
