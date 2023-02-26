import {
    createNameValidations,
    createPaternalSurnameValidations,
    createMaternalSurnameValidations,
    createEmailValidations,
    createTelephoneNumberValidations,
    createRequiredValueMessage,
} from "./general";

const createTokenPurchaseValidations = (purchaseToken, errors) => {
    if (purchaseToken) {
        if (purchaseToken < 0) {
            errors.gasto_token = "El gasto token no debe ser menor a 0";
        } else if (purchaseToken == 0) {
            errors.gasto_token = "El gasto de tokens debe ser mayor a 0";
        } else if (!/^\d+$/.test(purchaseToken)) {
            errors.gasto_token = "El gasto token solo permite números";
        }
    }
};

const createProfileValidations = (rolID, errors) => {
    if (!rolID) {
        errors.rol_id = createRequiredValueMessage("perfil");
    }
}


export default function validate(values) {
    let errors = {};
    createNameValidations(values.name, errors);
    createPaternalSurnameValidations(values.apellido_paterno, errors);
    createMaternalSurnameValidations(values.apellido_materno, errors);
    createEmailValidations(values.email, errors);
    createTelephoneNumberValidations(values.telefono, errors);
    createTokenPurchaseValidations(values.gasto_token, errors);
    createProfileValidations(values.rol_id, errors);

    console.log("errors", errors)
    return errors;
}