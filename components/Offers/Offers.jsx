import { Paper } from "@material-ui/core";
import styles from "./styles.module.scss";

const URL_IMG = "/img/GridPhoto/main.png";

const Card = ({ name, location, value }) => (
    <Paper elevation={3} className={styles.Card__card}>
        <div>
            <img src={URL_IMG} />
        </div>
        <div>
            <h6>{name}</h6>
            <p>{location}</p>
            <b>{value}</b>
        </div>
    </Paper>
);

const Offers = ({ title }) => (
    <section className={styles.Card}>
        <h3>{title}</h3>
        <div className={styles.Card__container}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
);

Card.defaultProps = {
    name: "Hotel del Gobernador",
    location: "Mérida, Centro",
    value: "2 Noktos",
};

Offers.defaultProps = {
    title: "Ofertas cerca de ti",
};

export default Offers;
