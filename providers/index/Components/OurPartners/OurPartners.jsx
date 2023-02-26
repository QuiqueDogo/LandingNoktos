import styles from "./styles.module.scss";
import { useAnimate } from "customHooks/useAnimate";
import useIsDesktop from "customHooks/useIsDesktop";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "customHooks/useMediaQuery";
import { dataPartners } from "./dataItem";

const OurPartners = () => {
  const [isDesktop] = useIsDesktop();
  const [isMedia] = useMediaQuery(1390);
  // REFERENCES
  const title = useRef();
  const brands = useRef();
  const container = useRef();

  const dataRefs = [
    {
      ref: title,
      classes: ["down"],
    },
    {
      ref: brands,
      classes: ["left"],
    }
  ];

  useAnimate(container, dataRefs);

  return (
    <section className={styles.OurPartners} ref={container}>
      <div className={styles.OurPartners__brands}>
        <div ref={title}>
          <h2>Nuestros Afiliados</h2>
          <span>¡Te ayudamos a monetizar tu inventario no utilizado!</span>
        </div>
        <div ref={brands}>
          {dataPartners.map(({ src, alt }) => (
            <div>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
