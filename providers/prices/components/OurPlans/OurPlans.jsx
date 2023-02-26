import { useRef } from "react";
import styles from "./styles.module.scss";
import { useAnimate } from "customHooks/useAnimate";

const OurPlans = () => {
  // REFERENCES
  const title = useRef();
  const container = useRef();

  const dataRefs = [
    {
      ref: title,
      classes: ["left"],
    },
  ];

  useAnimate(container, dataRefs);

  return (
    <section ref={container} className={styles.OurPlans}>
      <div className={styles.OurPlans__container}>
        <div ref={title} className={styles.OurPlans__container__title}>
          <h3>Conoce nuestros planes</h3>
        </div>
      </div>
    </section>
  );
};

export default OurPlans;
