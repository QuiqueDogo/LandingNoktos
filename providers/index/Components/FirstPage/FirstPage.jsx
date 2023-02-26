import { useRef } from "react";
import { useRouter } from "next/router";
import { dataItems } from "./dataItems";
import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";
import InfoItem from "./InfoItem/InfoItem";
import Carousel from "react-elastic-carousel";
import useIsDesktop from "customHooks/useIsDesktop";
import { useAnimate } from "customHooks/useAnimate";

const joinNowButton = {
    width: 220,
    padding: "12px 14px",
    fontSize: 17,
    fontWeight: 600,
    color: "#fff",
    backgroundColor: "#00c2ff",
    borderRadius: 30,
    textTransform: "none",
    fontFamily: "DM Sans Regular",
};

const FirstPage = () => {
    const router = useRouter();
    const [isDesktop] = useIsDesktop();
    // REFERENCES
    const text = useRef();
    const video = useRef();
    const items = useRef();
    const container = useRef();

    const dataRefs = [
        {
            ref: text,
            classes: ["left"],
        },
        {
            ref: video,
            classes: ["right"],
        },
        {
            ref: items,
            classes: ["up"],
        },
    ];

    useAnimate(container, dataRefs);

    const handleClick = () => {
        window.open("https://www.app.noktos.com/register/", "_blank")
    }

    return (
        <section className={styles.FirstPage} ref={container}>
            <div className={styles.FirstPage__info}>
                <div ref={text}>
                    <div>
                        <span>Noktos,</span>
                        <p>
                            proporciona herramientas a las empresas para hacerles la vida más fácil optimizando la gestión y los presupuestos de viajes.
                        </p>
                        <div>
                            <p>
                                Tu aliado financiero en viajes de negocio.
                            </p>
                        </div>
                    </div>

                    <div>
                        <Button
                            variant="contained"
                            style={joinNowButton}
                            onClick={handleClick}
                        >
                            Únete Ahora
                        </Button>
                    </div>
                </div>
                <div ref={video} className={styles.FirstPage__info__video}>
                    <div>
                        <video
                            muted
                            controls
                            autoPlay
                            aria-label="Noktos video explicativo"
                        >
                            <source
                                type="video/mp4"
                                src="/videos/landing_video.mp4"
                            />
                        </video>
                    </div>
                    {isDesktop && (
                        <p>*Hoy en día nos enfocamos en el hospedaje en México*</p>
                    )}
                </div>
            </div>

            <div ref={items} className={styles.FirstPage__items}>
                {!isDesktop ? (
                    <Carousel
                        itemsToShow={1}
                        itemsToScroll={1}
                        pagination={false}
                    >
                        {dataItems.map(({ title, description }) => (
                            <InfoItem
                                key={title}
                                title={title}
                                description={description}
                            />
                        ))}
                    </Carousel>
                ) : (
                    dataItems.map(({ title, description }) => (
                        <InfoItem
                            key={title}
                            title={title}
                            description={description}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default FirstPage;
