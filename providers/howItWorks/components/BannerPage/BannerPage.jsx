import { useRef } from "react";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import { useAnimate } from "customHooks/useAnimate";

const buttonStyle = {
    fontWeight: 600,
    fontFamily: "Poppins Regular",
    backgroundColor: "#00C2FF",
    borderRadius: 8,
    letterSpacing: 1,
    textTransform: "none",
};

const BannerPage = () => {
    // REFERENCES
    const info = useRef();
    const banner = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: info,
            classes: ["rightIn"],
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
                <img
                    alt=""
                    aria-labelledby="doYouHaveAHotel"
                    src="/img/HowItWorks/BannerPage/main.png"
                />
            </div>
            <div ref={info} className={styles.BannerPage__info}>
                <h2 id="doYouHaveAHotel">¿TIENES UN HOTEL?</h2>
                <p>
                    Afiliate a Noktos y disfruta de una plataforma todo-en-uno.
                </p>
                {
                    /*
                    <Button variant="contained" style={buttonStyle}>
                        ¡Quiero Afiliarme!
                    </Button>
                     */
                }
            </div>
        </section>
    );
};

export default BannerPage;
