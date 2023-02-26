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
      classes: ["left"],
    },
    {
      ref: image,
      classes: ["right"],
    },
    {
      ref: items,
      classes: ["up"],
    },
  ];

  useAnimate(container, dataRefs);

  return (
    <section className={styles.SecondPage} ref={container}>
      <div className={styles.SecondPage__info}>
        <div ref={text}>
          <h2>¿QUÉ HACEMOS?</h2>
          <p>Somos tu aliado financiero en viajes de negocios, manteniendo tarifas fijas en tu hospedaje todo el año.</p>
        </div>
      </div>
      <div className={styles.SecondPage__image} ref={image}>
        <div>
          <img
            alt=""
            aria-labelledby="whatDoWeDo"
            src="/img/LandingPage/SecondPage/person.png"
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
