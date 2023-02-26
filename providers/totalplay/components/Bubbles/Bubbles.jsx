import { useRef } from "react";
import styles from "./style.module.scss";
import { useAnimate } from "customHooks/useAnimate";

function Bubbles() {
    // REFERENCES
    const info = useRef();
    const infoTwo = useRef();
    const image = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: info,
            classes: ["up"],
        },
        {
            ref: image,
            classes: ["up"],
        },
        {
            ref:infoTwo,
            classes:["up"]
        }
    ];

    useAnimate(container, dataRefs);
  return (
    <section ref={container} className={styles.MainPage}>
        <div className={styles.MainPage__container}>
            <div ref={info} className={styles.MainPage__container__info}>
                <div className={styles.content_img}>
                    <img src="/img/home/1-anuncia-tu-alojamiento.png"  alt="bubble_1"/>
                    <p>Tarifas Especiales todo el año</p>
                </div>
                <div className={styles.content_img}>
                    <img src="/img/home/2-define-tipo-de-destino.png"  alt="bubble_1"/>
                    <p>Control de gastos en todos los viajes</p>
                </div>
                <div className={styles.content_img}>
                    <img src="/img/home/3-recibe-huespedes.png"  alt="bubble_1"/>
                    <p>Concila todas tus facturas</p>
                </div>
            </div>
            <div ref={infoTwo} className={styles.MainPage__container__info}>
                <div className={styles.content_img}>
                    <img src="/img/Prices/MainPage/background.png"  alt="bubble_1"/>
                    <p>Cotiza y reserva desde nuestro sitio</p>
                </div>
                <div className={styles.content_img}>
                    <img src="/img/Benefits/InfoPage/main.png"  alt="bubble_1"/>
                    <p>Sin comisiones ni costos operativos</p>
                </div>
            </div>
        </div>
        <div ref={image} className={styles.MainPage__container__image}>
            <p>Puedes redimir tus noktos con cualquiera de nuestros afiliados</p>
            <div className={styles.MainPage__container__image__box}>
                <img src="/img/LandingPage/OurPartners/choice.jpg" alt="afiliado1"/>
                <img src="/img/LandingPage/OurPartners/city.jpg" alt="afiliado1"/>
                <img src="/img/LandingPage/OurPartners/extended.jpg" alt="afiliado1"/>
                <img src="/img/LandingPage/OurPartners/hyatt.jpg" alt="afiliado1"/>
                <img src="/img/LandingPage/OurPartners/mision.jpg" alt="afiliado1"/>
                <img src="/img/LandingPage/OurPartners/posadas.jpg" alt="afiliado1"/>
                <img src="/img/LandingPage/OurPartners/western.jpg" alt="afiliado1"/>
                <img src="/img/LandingPage/OurPartners/wyndham.png" alt="afiliado1"/>
            </div>
            <p>...Y muchos más</p>
        </div>
    </section>
  )
}

export default Bubbles