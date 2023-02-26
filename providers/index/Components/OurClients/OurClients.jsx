import Comment from "./Comment/Comment";
import styles from "./styles.module.scss";
import Carousel from "react-elastic-carousel";
import { useAnimate } from "customHooks/useAnimate";
import useIsDesktop from "customHooks/useIsDesktop";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "customHooks/useMediaQuery";
import { dataClients, dataComments } from "./dataItem";

const OurClients = () => {
  const [isDesktop] = useIsDesktop();
  const [isMedia] = useMediaQuery(1390);
  const [items, setItems] = useState(1);
  // REFERENCES
  const title = useRef();
  const brands = useRef();
  const comments = useRef();
  const container = useRef();

  const dataRefs = [
    {
      ref: title,
      classes: ["down"],
    },
    {
      ref: brands,
      classes: ["left"],
    },
    {
      ref: comments,
      classes: ["right"],
    },
  ];

  useAnimate(container, dataRefs);

  useEffect(() => {
    if (isMedia) setItems(3);
    else if (isDesktop) setItems(2);
    else setItems(1);
  }, [isDesktop, isMedia]);

  return (
    <section className={styles.OurClients} ref={container}>
      <div className={styles.OurClients__brands}>
        <div ref={title}>
          <h2>Nuestros Clientes</h2>
          <span>¡Te ayudamos a ahorrar tiempo y dinero!</span>
        </div>
        <div ref={brands}>
          {dataClients.map(({ src, alt }) => (
            <div>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>
      <div ref={comments} className={styles.OurClients__comments}>
        <div className={styles.OurClients__comments__title}>
          <div>
            <h5>Lo que dicen nuestros clientes</h5>
          </div>
        </div>

        <div className={styles.OurClients__comments__clients}>
          <div>
            <Carousel
              enableAutoPlay
              itemsToShow={items}
              itemsToScroll={items}
              pagination={false}
              autoPlaySpeed={8000}
              // showArrows={false}
            >
              {dataComments.map(({ name, alias, initials, description }) => (
                <Comment
                  name={name}
                  alias={alias}
                  key={description}
                  initials={initials}
                  description={description}
                />
              ))}
            </Carousel>
          </div>
          <div className={styles.circleOne}></div>
          <div className={styles.circleTwo}></div>
          <div className={styles.circleThree}></div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
