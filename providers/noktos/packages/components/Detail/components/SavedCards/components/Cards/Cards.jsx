import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";
import { cardIcon } from "../../cardsIcon";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { hideSavedCards } from "../../../../../../../../../redux/actions/packagesAction";
import { setSelectedCard } from "../../../../../../../../../redux/actions/packagesAction";
import { showSelectedCard } from "../../../../../../../../../redux/actions/packagesAction";

const useStyles = makeStyles({
    buttonCard: {
        padding: "6px 20px",
        color: "#161616",
        fontSize: 13,
        fontWeight: 600,
        borderRadius: 20,
        textTransform: "none",
    },
});

const CardItem = ({ card }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSelectCard = () => {
        dispatch(setSelectedCard(card));
        dispatch(hideSavedCards());
        dispatch(showSelectedCard());
    };

    const { brand, last4 } = card;
    const brandCard = brand.toLowerCase();

    return (
        <div className={styles.Cards__item}>
            <div>
                <img src={cardIcon[brandCard]} alt={brand} />
                <span>Termina en *{last4}</span>
            </div>
            <div>
                <Button
                    variant="outlined"
                    className={classes.buttonCard}
                    onClick={handleSelectCard}
                >
                    Elegir
                </Button>
                {false && (
                    <Button
                        variant="outlined"
                        className={classes.buttonCard}
                        onClick={() => {}}
                    >
                        Borrar
                    </Button>
                )}
            </div>
        </div>
    );
};

const Cards = () => {
    const { cards } = useSelector(({ noktosPackages }) => noktosPackages);

    return (
        <div className={styles.Cards}>
            {cards?.map((card) => (
                <CardItem key={card?.id} card={card} />
            ))}
        </div>
    );
};

export default Cards;
