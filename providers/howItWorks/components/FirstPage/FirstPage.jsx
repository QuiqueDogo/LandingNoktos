import { useRef } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { IconButton } from "@mui/material";
import { useAnimate } from "customHooks/useAnimate";
import useIsDesktop from "customHooks/useIsDesktop";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const buttonStyle = {
    backgroundColor: "#19212C",
};

const iconStyle = {
    color: "#fff",
};

const FirstPage = () => {
    const router = useRouter();
    const [isDesktop] = useIsDesktop();
    // REFERENCES
    const info = useRef();
    const image = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: info,
            classes: ["left"],
        },
        {
            ref: image,
            classes: ["right"],
        },
    ];

    useAnimate(container, dataRefs);

    return (
        <section ref={container} className={styles.FirstPage}>
            <div className={styles.FirstPage__container}>
                <div ref={info} className={styles.FirstPage__container__info}>
                    <h2 id="whatIsANokto">¿CÓMO FUNCIONA?</h2>
                    <p>¿Qué es un Nokto y cómo utilizarlo?</p>
                    <p>
                        Es una moneda de pago con la que podrás reservar tarifas fijas en viajes de negocios.
                    </p>
                    {isDesktop && (
                        <div
                            onClick={() =>
                                router.push("/como-funciona/#howItWorks")
                            }
                        >
                            <IconButton style={buttonStyle}>
                                <ArrowDownwardIcon style={iconStyle} />
                            </IconButton>
                            <span>Más información</span>
                        </div>
                    )}
                </div>
                <div ref={image} className={styles.FirstPage__container__image}>
                    <div className={styles.FirstPage__container__image__box}>
                        <img
                            alt=""
                            aria-labelledby="whatIsANokto"
                            src="/img/HowItWorks/FirstPage/main.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstPage;
