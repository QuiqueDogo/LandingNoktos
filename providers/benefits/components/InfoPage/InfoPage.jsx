import { useRef } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import { dataItems } from "./components/dataItems";
import useIsDesktop from "customHooks/useIsDesktop";
import { useAnimate } from "customHooks/useAnimate";
import InfoItem from "./components/InfoItem/InfoItem";

const startButtonStyle = {
    padding: "12px 32px",
    color: "#fff",
    backgroundColor: "#00c2ff",
    borderRadius: 25,
    fontSize: 19,
    fontWeight: 600,
    textTransform: "none",
};

const InfoPage = () => {
    const router = useRouter();
    const [isDesktop] = useIsDesktop();
    // REFERENCES
    const title = useRef();
    const item1 = useRef();
    const item2 = useRef();
    const item3 = useRef();
    const image = useRef();
    const container = useRef();

    const itemRefs = {
        1: item1,
        2: item2,
        3: item3,
    };

    const dataRefs = [
        {
            ref: title,
            classes: ["down"],
        },
        {
            ref: item1,
            classes: ["left"],
        },
        {
            ref: item2,
            classes: ["left", "left2"],
        },
        {
            ref: item3,
            classes: ["left", "left3"],
        },
        {
            ref: image,
            classes: ["right"],
        },
    ];

    useAnimate(container, dataRefs);

    const handleClick = () => {
        window.open("https://www.app.noktos.com/register/", "_blank")
    }

    return (
        <section ref={container} className={styles.InfoPage}>
            <div className={styles.InfoPage__container}>
                <div className={styles.InfoPage__container__title}>
                    <h2 ref={title} id="nextLevel">
                        Lleva tus viajes de negocios al siguiente nivel
                    </h2>
                </div>
                <div className={styles.InfoPage__container__items}>
                    {dataItems.map((item) => {
                        const { id, label, labelColor, title, description } =
                            item;
                        return (
                            <InfoItem
                                key={id}
                                label={label}
                                title={title}
                                ref={itemRefs[id]}
                                labelColor={labelColor}
                                description={description}
                            />
                        );
                    })}
                    <div className={styles.InfoPage__container__items__button}>
                        <Button
                            variant="contained"
                            style={startButtonStyle}
                            onClick={handleClick}
                        >
                            Empieza con Noktos
                        </Button>
                    </div>
                </div>
                <div ref={image} className={styles.InfoPage__container__image}>
                    {isDesktop && (
                        <img
                            alt=""
                            aria-labelledby="nextLevel"
                            src="/img/Benefits/InfoPage/main.png"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default InfoPage;
