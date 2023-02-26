import { useRef } from "react";
import { dataItems } from "../dataItems";
import styles from "./styles.module.scss";
import useIsTablet from "customHooks/useIsTablet";
import { useAnimate } from "customHooks/useAnimate";

const InfoItem = ({ number, label }) => (
    <div className={styles.Item}>
        <div>
            <span>{number}</span>
        </div>
        <label>{label}</label>
    </div>
);

const MainPage = () => {
    const [isTablet] = useIsTablet();
    // REFERENCES
    const title = useRef();
    const items = useRef();
    const image = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: title,
            classes: ["left"],
        },
        {
            ref: items,
            classes: ["up"],
        },
        {
            ref: image,
            classes: ["fadeIn"],
        },
    ];

    useAnimate(container, dataRefs);

    return (
        <section ref={container} className={styles.MainPage}>
            <div ref={image} className={styles.MainPage__image}>
                <img
                    alt=""
                    aria-labelledby="noktos-prices"
                    src="/img/Prices/MainPage/background.png"
                />
            </div>
            <div ref={title} className={styles.MainPage__title}>
                <h1 id="noktos-prices">Paga tus viajes con Noktos</h1>
                <div>
                    <p>Congela las mejores tarifas todo el año</p>
                </div>
            </div>
            <div ref={items} className={styles.MainPage__items}>
                {isTablet && (
                    <div>
                        <div>
                            {dataItems.map(({ id, label }) => (
                                <InfoItem key={id} number={id} label={label} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MainPage;
