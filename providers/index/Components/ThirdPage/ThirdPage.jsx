import { dataItems } from "./dataItems";
import { useState, useRef } from "react";
import styles from "./styles.module.scss";
import Carousel from "react-elastic-carousel";
import { useAnimate } from "customHooks/useAnimate";
import useMediaQuery from "customHooks/useMediaQuery";
import InfoItem from "./components/InfoItem/InfoItem";
import Pagination from "components/Pagination/Pagination";

const ThirdPage = () => {
    const [isDesktop] = useMediaQuery(1265);
    const [stepSelected, setStepSelected] = useState(1);
    const [itemSelected, setItemSelected] = useState(1);
    // REFERENCES
    const text = useRef();
    const items = useRef();
    const image = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: text,
            classes: ["down"],
        },
        {
            ref: image,
            classes: ["left"],
        },
        {
            ref: items,
            classes: ["fadeIn"],
        },
    ];

    useAnimate(container, dataRefs);

    return (
        <section
            ref={container}
            id="howDoesItWork"
            className={styles.ThirdPage}
        >
            <div ref={text}>
                <h2>¿Cómo funciona?</h2>
                <span>Fácil, sencillo y práctico</span>
            </div>
            <div ref={items}>
                {!isDesktop ? (
                    <div>
                        <Carousel
                            itemsToShow={1}
                            itemsToScroll={1}
                            pagination={false}
                            onChange={({ index }) => setStepSelected(index)}
                        >
                            {dataItems.map((item) => {
                                const { idItem, description } = item;
                                return (
                                    <InfoItem
                                        key={idItem}
                                        src={item.src}
                                        idItem={idItem}
                                        title={item.title}
                                        description={description}
                                    />
                                );
                            })}
                        </Carousel>
                        <Pagination stepSelected={stepSelected} />
                    </div>
                ) : (
                    <div>
                        {dataItems.map((item) => {
                            const { idItem, showStepper, redirect } = item;
                            return (
                                <InfoItem
                                    key={idItem}
                                    src={item.src}
                                    idItem={idItem}
                                    title={item.title}
                                    redirect={redirect}
                                    showStepper={showStepper}
                                    description={item.description}
                                    setItemSelected={setItemSelected}
                                    isActive={itemSelected === idItem}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
            <div ref={image}>
                {isDesktop && (
                    <div>
                        <div>
                            <img
                                alt=""
                                src="/img/LandingPage/ThirdPage/main.png"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ThirdPage;
