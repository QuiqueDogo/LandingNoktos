import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    iconStyle: {
        color: "#00c2ff",
        fontSize: 50,
        transform: "rotate(140deg)",
    },
    showInvoiceStyle: {
        color: "#000",
        fontWeight: 600,
        textTransform: "none",
        backgroundColor: "#E8E8E8",
    },
    buyAgainStyle: {
        color: "#fff",
        margin: "0 32px",
        fontWeight: 600,
        textTransform: "none",
        backgroundColor: "#00c2ff",
    },
    finalArrowStyle: {
        color: "#B1B5C3",
    },
    topButton: {
        color: "#00C2FF",
        textTransform: "none",
        borderRadius: 8,
        backgroundColor: "#DCF7FF",
        fontWeight: 600,
        fontSize: 18,
    },
    downloadButton: {
        color: "#00c2ff",
        textTransform: "none",
        backgroundColor: "rgba(122, 223, 255, 0.18)",
        borderRadius: 15,
    },
    goBackButton: {
        justifySelf: "flex-end",
        width: 200,
        padding: "14px 24px",
        color: "#fff",
        fontSize: 16,
        letterSpacing: 1,
        fontWeight: 600,
        borderRadius: 15,
        backgroundColor: "#00c2ff",
    },
});
