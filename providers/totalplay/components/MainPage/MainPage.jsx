import { useRef } from "react";
import styles from "./styles.module.scss";
import { useAnimate } from "customHooks/useAnimate";

const MainPage = () => {
    // REFERENCES
    const info = useRef();
    const image = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: info,
            classes: ["up"],
        },
        {
            ref: image,
            classes: ["down"],
        },
    ];

    useAnimate(container, dataRefs);

    return (
        <section ref={container} className={styles.MainPage}>
            <div className={styles.MainPage__container}>
                <div ref={info} className={styles.MainPage__container__info}>
                    <div>
                        <h2 id="businessTravel">Ser Cliente</h2>
                        <img
                            height="50"
                            alt=""
                            style={{marginBottom:20, marginLeft:25}}
                            aria-labelledby="businessTravel"
                            src="/img/totalplay.png"
                        />
                        <p>Te da Noktos Gratis.</p>
                    </div>
                    <p>
                        Obtienes 2 Noktos Gratis al registrarte. Recibe tus tarifas especiales durante todo el año en tus viajes de negocio.
                    </p>
                </div>
                <div ref={image} className={styles.MainPage__container__image}>
                    <div className={styles.MainPage__container__image__box}>
                        <img
                            alt=""
                            aria-labelledby="businessTravel"
                            src="/img/men.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
