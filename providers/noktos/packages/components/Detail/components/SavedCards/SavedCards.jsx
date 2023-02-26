import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";
import Cards from "./components/Cards/Cards";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";
import AddCard from "./components/AddCard/AddCard";
import { useSelector, useDispatch } from "react-redux";
import { hideSavedCards } from "redux/actions/packagesAction";
import { hideSelectedCard } from "redux/actions/packagesAction";
import { showStripeFormCard } from "redux/actions/packagesAction";
import CardSelected from "./components/CardSelected/CardSelected";

const useStyles = makeStyles({
  addCard: {
    padding: "4px 16px",
    color: "#161616",
    fontSize: 12,
    fontWeight: 600,
    borderRadius: 10,
    textTransform: "none",
  },
});

const SavedCards = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const noktosPackages = useSelector(({ noktosPackages }) => noktosPackages);
  const { showStripeForm } = noktosPackages;
  const { showSavedCards, showSelectedCard } = noktosPackages;

  const handleOpenForm = () => {
    dispatch(hideSavedCards());
    dispatch(hideSelectedCard());
    dispatch(showStripeFormCard());
  };

  return (
    <div className="animate__animated animate__fadeInUp">
      <div className={styles.SavedCards}>
        <div className={styles.SavedCards__container}>
          <div className={styles.SavedCards__addCard}>
            <label>Tarjetas guardadas</label>
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              className={classes.addCard}
              onClick={handleOpenForm}
            >
              Agregar nueva
            </Button>
          </div>
          <div className={styles.SavedCards__icons}>
            <div>
              <img src="/icons/masterCardIcon.svg" alt="Master Card" />
            </div>
            <div>
              <img src="/icons/visaIcon.png" alt="Visa" />
            </div>
            <div>
              <img
                src="/icons/americanExpressIcon.png"
                alt="American Express"
              />
            </div>
          </div>
        </div>
        {showSavedCards && <Cards />}
        {showSelectedCard && <CardSelected />}
        {showStripeForm && <AddCard />}
      </div>
    </div>
  );
};

export default SavedCards;
