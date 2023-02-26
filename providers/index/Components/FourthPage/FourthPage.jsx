import { dataItems } from "./dataItems";
import { useState, useRef } from "react";
import styles from "./styles.module.scss";
import InfoItem from "./InfoItem/InfoItem";
import Carousel from "react-elastic-carousel";
import { useAnimate } from "customHooks/useAnimate";
import useIsDesktop from "customHooks/useIsDesktop";
import Pagination from "components/Pagination/Pagination";

const FourthPage = () => {
  const [isDesktop] = useIsDesktop();
  const [stepSelected, setStepSelected] = useState(0);
  // REFERENCES
  const info = useRef();
  const items = useRef();
  const container = useRef();

  const handleCarouselChange = ({ index }) => setStepSelected(index);

  const dataRefs = [
    {
      ref: info,
      classes: ["down"],
    },
    {
      ref: items,
      classes: ["up"],
    },
  ];

  useAnimate(container, dataRefs);

  return (
    <section ref={container} className={styles.FourthPage}>
      <div ref={info}>
        <h2>BENEFICIOS</h2>
        <h3>De usar Noktos</h3>
        <p>
          ¡Disfruta de los beneficios exclusivos que te ofrece nuestra
          herramienta financiera!
        </p>
      </div>
      <div ref={items}>
        {!isDesktop ? (
          <div>
            <Carousel
              itemsToShow={1}
              itemsToScroll={1}
              pagination={false}
              onChange={handleCarouselChange}
            >
              {dataItems.map((item) => {
                const { title, description, Icon } = item;
                return (
                  <InfoItem
                    title={title}
                    description={description}
                    Icon={Icon}
                  />
                );
              })}
            </Carousel>
            <Pagination itemsLength={6} stepSelected={stepSelected} />
          </div>
        ) : (
          <div>
            {dataItems.map((item) => {
              const { title, description, Icon } = item;
              return (
                <InfoItem title={title} description={description} Icon={Icon} />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FourthPage;
