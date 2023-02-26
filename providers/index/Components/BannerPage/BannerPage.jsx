import { useRef } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import { useAnimate } from "customHooks/useAnimate";

const requestButton = {
    padding: "12px 32px",
    backgroundColor: "#00c2ff",
    fontFamily: "DM Sans Regular",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 10,
    letterSpacing: 1,
};

const BannerPage = () => {
    const router = useRouter();
    // REFERENCES
    const button = useRef();
    const banner = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: button,
            classes: ["leftIn"],
        },
        {
            ref: banner,
            classes: ["fadeIn"],
        },
    ];

    useAnimate(container, dataRefs);

    return (
        <section ref={container} className={styles.BannerPage}>
            <div ref={banner} className={styles.BannerPage__banner}>
                <img alt="" src="/img/LandingPage/BannerPage/background.png" />
            </div>
            <div className={styles.BannerPage__info}>
                <p>¿Necesitas crédito financiero para tu PyMe?</p>
            </div>
            <div ref={button} className={styles.BannerPage__button}>
                <Button
                    variant="contained"
                    style={requestButton}
                    onClick={() => router.push("/")}
                >
                    Solicita el tuyo
                </Button>
            </div>
        </section>
    );
};

export default BannerPage;
