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
            classes: ["left"],
        },
        {
            ref: image,
            classes: ["right"],
        },
    ];

    useAnimate(container, dataRefs);

    return (
        <section ref={container} className={styles.MainPage}>
            <div className={styles.MainPage__container}>
                <div ref={info} className={styles.MainPage__container__info}>
                    <div>
                        <h2 id="businessTravel">Viajes de negocios</h2>
                        <p>para toda la empresa</p>
                    </div>
                    <p>
                        Reserva con libertad y disfruta de tu viaje de negocios
                        con las mejores tarifas todo el año. ¡Desde la reserva
                        hasta la gestión, los viajes de negocios nunca han sido
                        tan fáciles!
                    </p>
                </div>
                <div ref={image} className={styles.MainPage__container__image}>
                    <div className={styles.MainPage__container__image__box}>
                        <img
                            alt=""
                            aria-labelledby="businessTravel"
                            src="/img/Benefits/MainPage/main.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
