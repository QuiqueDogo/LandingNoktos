import styles from "./styles.module.scss";
import { cardIcon } from "../../cardsIcon";
import { Checkbox } from "@material-ui/core";
import { useStyles } from "../../../../customStyles";
import { useSelector, useDispatch } from "react-redux";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { showSavedCards } from "../../../../../../../../../redux/actions/packagesAction";
import { setSelectedCard } from "../../../../../../../../../redux/actions/packagesAction";
import { hideSelectedCard } from "../../../../../../../../../redux/actions/packagesAction";

const CardSelected = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const noktosPackages = useSelector(({ noktosPackages }) => noktosPackages);
    const { selectedCard } = noktosPackages;

    const handleChangeCard = () => {
        dispatch(setSelectedCard(null));
        dispatch(hideSelectedCard());
        dispatch(showSavedCards());
    };

    const brandCard = selectedCard?.brand.toLowerCase();

    return (
        <div className={styles.CardSelected}>
            <div>
                <Checkbox
                    checked
                    name="cardChecked"
                    icon={
                        <RadioButtonUncheckedIcon
                            classes={{ root: classes.iconSelectCard }}
                        />
                    }
                    checkedIcon={
                        <RadioButtonCheckedIcon
                            classes={{ root: classes.iconSelectCard }}
                        />
                    }
                />
                <img src={cardIcon[brandCard]} alt={selectedCard?.brand} />
                <span>Termina en *{selectedCard?.last4}</span>
            </div>
            <div onClick={handleChangeCard}>
                <span>Cambiar</span>
            </div>
        </div>
    );
};

export default CardSelected;
