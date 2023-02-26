import Squares from "./Squares/Squares";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import useIsDesktop from "customHooks/useIsDesktop";
import { animateClasses } from "utils/animateClasses";

const Support = () => {
    const [isDesktop] = useIsDesktop();
    // REFERENCES
    const info = useRef();
    const image = useRef();
    const container = useRef();

    useEffect(() => {
        const options = {
            threshold: [0, 0.5, 1],
        };

        const callback = (entries, observer) => {
            if (entries[0].intersectionRatio >= 0.5) {
                const { primary, left, right } = animateClasses;
                info.current.classList.add("visible", primary, left);
                image.current.classList.add("visible", primary, right);
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(container.current);

        return () => {
            observer.unobserve(container.current);
        };
    }, []);

    return (
        <section ref={container} className={styles.Support}>
            <div className={styles.Support__container}>
                <div ref={info} className={styles.Support__container__info}>
                    <h2 id="personalizedAttention">ATENCIÓN PERSONALIZADA</h2>
                    <p>Atención 24/7 totalmente personalizada</p>
                    <p>
                        Con nuestro sistema de soporte siempre podrás hablar con
                        un especialista para resolver cualquier inconveniente o
                        duda.
                    </p>
                </div>
                <div ref={image} className={styles.Support__container__image}>
                    <div className={styles.Support__container__image__box}>
                        <img
                            alt=""
                            src="/img/LandingPage/Support/main.png"
                            aria-labelledby="personalizedAttention"
                        />
                        {isDesktop && <Squares />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
