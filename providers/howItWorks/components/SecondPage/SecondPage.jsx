import { useRef } from "react";
import { dataItems } from "./dataItems";
import styles from "./styles.module.scss";
import InfoItem from "./InfoItem/InfoItem";
import { useAnimate } from "customHooks/useAnimate";

const SecondPage = () => {
    // REFERENCES
    const text = useRef();
    const image = useRef();
    const items = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: text,
            classes: ["down"],
        },
        {
            ref: items,
            classes: ["right"],
        },
        {
            ref: image,
            classes: ["left"],
        },
    ];

    useAnimate(container, dataRefs);

    return (
        <section className={styles.SecondPage} ref={container}>
            <div className={styles.SecondPage__info}>
                <div ref={text}>
                    <h2 id="howItWorks">¿CÓMO FUNCIONA?</h2>
                    <p>¿Estás listo para viajar con tus reglas?</p>
                </div>
            </div>
            <div className={styles.SecondPage__image} ref={image}>
                <div>
                    <img
                        alt=""
                        aria-labelledby="howItWorks"
                        src="/img/HowItWorks/SecondPage/main.png"
                    />
                </div>
            </div>
            <div ref={items} className={styles.SecondPage__items}>
                <div>
                    {dataItems.map(({ Icon, title, description }) => (
                        <InfoItem
                            key={title}
                            Icon={Icon}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondPage;
