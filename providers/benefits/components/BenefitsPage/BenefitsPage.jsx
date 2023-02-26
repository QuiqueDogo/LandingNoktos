import { useRef } from "react";
import styles from "./styles.module.scss";
import { dataItems } from "./components/dataItems";
import { useAnimate } from "customHooks/useAnimate";
import InfoItem from "./components/InfoItem/InfoItem";

const BenefitsPage = () => {
    // REFERENCES
    const item1 = useRef();
    const item3 = useRef();
    const title = useRef();
    const container = useRef();

    const refItems = {
        1: item1,
        3: item3,
    };

    const dataRefs = [
        {
            ref: item1,
            classes: ["left"],
        },
        {
            ref: item3,
            classes: ["right"],
        },
        {
            ref: title,
            classes: ["down"],
        },
    ];

    useAnimate(container, dataRefs);

    return (
        <section ref={container} className={styles.BenefitsPage}>
            <div className={styles.BenefitsPage__container}>
                <h2 ref={title}>Beneficios Exclusivos</h2>
                <div>
                    {dataItems.map((item) => {
                        const { line, maxWidth } = item;
                        const { id, src, title, description } = item;
                        return (
                            <InfoItem
                                key={id}
                                src={src}
                                line={line}
                                title={title}
                                ref={refItems[id]}
                                maxWidth={maxWidth}
                                description={description}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BenefitsPage;
