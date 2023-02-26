import {
    createPaternalSurnameValidations,
    createMaternalSurnameValidations,
    createEmailValidations,
    createTelephoneNumberValidations,
    createRequiredValueMessage,
} from "./general";

const createNameValidations = (name, errors) => {
    if (!name) {
        errors.name = createRequiredValueMessage("nombre");
    } else if (!/^([^0-9]*)$/.test(name)) {
        errors.name = "El nombre no debe de llevar digitos";
    }
};


export default function validate(values) {
    let errors = {};
    createNameValidations(values.name, errors);
    createPaternalSurnameValidations(values.apellido_paterno, errors);
    createMaternalSurnameValidations(values.apellido_materno, errors);
    createEmailValidations(values.email, errors);
    createTelephoneNumberValidations(values.telefono, errors);
    return errors;
}
