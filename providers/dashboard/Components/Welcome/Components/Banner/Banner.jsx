import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

const Banner = () => {
    const router = useRouter();

    return (
        <section className={styles.Banner}>
            <picture>
                <source
                    media="(min-width: 760px)"
                    srcSet="/img/Dashboard/mainTablet.png"
                    alt="Noktos"
                />
                <source
                    media="(min-width: 400px)"
                    srcSet="/img/Dashboard/mainMobile.png"
                    alt="Noktos"
                />
                <img src="/img/Dashboard/mainDesktop.png" alt="Noktos" />
            </picture>
            <div>
                <div>
                    <h1>¡Bienvenido!</h1>
                    <span>Revisa tus actividades más rápido desde aquí.</span>
                </div>
                <Button
                    variant="outlined"
                    style={{
                        color: "#00c2ff",
                        fontWeight: 600,
                        borderRadius: 15,
                        border: "1px solid #00c2ff",
                        letterSpacing: 1,
                        textTransform: "none",
                    }}
                    onClick={() => router.push("/buy-tokens")}
                >
                    Comprar Noktos
                </Button>
            </div>
        </section>
    );
};

export default Banner;
