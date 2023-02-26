import Swal from "sweetalert2";
import { useState } from "react";
import styles from "./styles.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, FormLabel } from "@material-ui/core";
import { showToast } from "../../../../../../../../../utils/utils";
import { IconButton, Button, Box, CircularProgress } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { showSavedCards } from "../../../../../../../../../redux/actions/packagesAction";
import { hideStripeFormCard } from "../../../../../../../../../redux/actions/packagesAction";
// =============================================================================================
import { loadStripe } from "@stripe/stripe-js";
import { CardNumberElement } from "@stripe/react-stripe-js";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { stripe_token } from "../../../../../../../../../utils/globalKeys";
import { CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { logEvent } from "../../../../../../../../../utils/StripeFormsUtils";
import { saveCardRequest } from "../../../../../../../../../services/stripeService";
import { setStripeError } from "../../../../../../../../../redux/actions/packagesAction";
import { getReloadUserCards } from "../../../../../../../../../redux/actions/packagesAction";
import { showAlertStripeError } from "../../../../../../../../../redux/actions/packagesAction";
import { showProgressSaveStripeCard } from "../../../../../../../../../redux/actions/packagesAction";
import { hideProgressSaveStripeCard } from "../../../../../../../../../redux/actions/packagesAction";

const useStyles = makeStyles({
    formInputAddCard: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderRadius: 15,
            },
            "&.Mui-focused fieldset": {
                borderColor: "rgba(0, 0, 0, 0.54)",
            },
        },
    },
    submitAddCard: {
        width: "100%",
        color: "#fff",
        fontSize: 15,
        fontWeight: 600,
        borderRadius: 15,
        backgroundColor: "#00c2ff",
        textTransform: "none",
    },
});

const inputNameColor = {
    color: "rgba(0, 0, 0, 0.54)",
};

const ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: "16px",
            color: "#424770",
            "::placeholder": {
                color: "#aab7c4",
            },
            boxShadow: "0px 1px 3px",
        },
        invalid: {
            color: "#9e2146",
        },
    },
};

// ==========================================================================

const AddCardForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const stripe = useStripe();
    const elements = useElements();
    const [name, setName] = useState("");
    const noktosPackages = useSelector(({ noktosPackages }) => noktosPackages);
    const { showProgress, cards } = noktosPackages;

    const inputProps = {
        options: ELEMENT_OPTIONS,
        onBlur: logEvent("blur"),
        onFocus: logEvent("focus"),
        onReady: logEvent("ready"),
        onChange: logEvent("change"),
        className: styles.AddCard__stripe__input,
    };

    const handleCloseForm = () => {
        dispatch(hideStripeFormCard());
        dispatch(showSavedCards());
    };

    const moreThanThreeCards = () => {
        if (cards?.length === 3) {
            Swal.fire({
                title: "Oops...",
                text: "Tienes demasiadas tarjetas.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            return true;
        }
        return false;
    };

    const saveStripeCard = async (stripeToken) => {
        try {
            const addError = moreThanThreeCards();
            if (addError) return;
            const body = {
                stripeToken,
            };
            await saveCardRequest(body);
            showToast({
                type: "success",
                text: "Su tarjeta se agregó correctamente",
                duration: 3000,
            });
            handleCloseForm();
            dispatch(getReloadUserCards(stripeToken));
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: "Oops",
                text: `No hemos podido agregar tu tarjeta; ${err.message}`,
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        if (!stripe || !elements) return;

        dispatch(showProgressSaveStripeCard());
        const cardElement = elements.getElement(CardNumberElement);
        const payload = await stripe.createToken(cardElement);

        if (payload.error) {
            console.log("[error]", payload);
            dispatch(setStripeError(payload.error.message));
            dispatch(showAlertStripeError());
        } else {
            dispatch(setStripeError(""));
            saveStripeCard(payload.token.id);
            console.log("[PaymentMethod]", payload.token.id);
        }
        dispatch(hideProgressSaveStripeCard());
    };

    return (
        <div className="animate__animated animate__fadeInDown">
            <div className={styles.AddCard}>
                <div onClick={handleCloseForm}>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </div>
                <ValidatorForm onSubmit={handleSubmit}>
                    <Box mt={2}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="name">Nombre</FormLabel>
                            <TextValidator
                                fullWidth
                                id="name"
                                name="name"
                                size="small"
                                value={name}
                                variant="outlined"
                                validators={["required"]}
                                className={classes.formInputAddCard}
                                errorMessages={["Escribe tu nombre"]}
                                onChange={({ target }) => setName(target.value)}
                                InputLabelProps={{
                                    style: inputNameColor,
                                }}
                            />
                        </FormControl>
                    </Box>

                    <Box mt={2}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="cardNumber">
                                Número de tarjeta
                            </FormLabel>
                            <CardNumberElement
                                id="cardNumber"
                                {...inputProps}
                            />
                        </FormControl>
                    </Box>

                    <Box mt={2} display="flex" justifyContent="space-between">
                        <FormControl style={{ width: "48%" }}>
                            <FormLabel htmlFor="expiry">
                                Fecha de expiración
                            </FormLabel>
                            <CardExpiryElement id="expiry" {...inputProps} />
                        </FormControl>

                        <FormControl style={{ width: "48%" }}>
                            <FormLabel htmlFor="cvc">CVC</FormLabel>
                            <CardCvcElement id="cvc" {...inputProps} />
                        </FormControl>
                    </Box>

                    <Box mt={4} display="flex" justifyContent="center">
                        {stripe &&
                            (!showProgress ? (
                                <Button
                                    type="submit"
                                    className={classes.submitAddCard}
                                >
                                    Agregar Tarjeta
                                </Button>
                            ) : (
                                <CircularProgress
                                    style={{
                                        color: "#00c2ff",
                                    }}
                                />
                            ))}
                    </Box>
                </ValidatorForm>
            </div>
        </div>
    );
};

const AddCard = () => {
    const stripePromise = loadStripe(stripe_token);

    return (
        <Elements stripe={stripePromise}>
            <AddCardForm />
        </Elements>
    );
};

export default AddCard;
