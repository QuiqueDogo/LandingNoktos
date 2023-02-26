export const atLeastFourCharacters = (value) => value.length <= 3;

export const createRequiredValueMessage = (value) =>
    `El campo ${value} es requerido`;

export const createNoDigitsMessage = (value) =>
    `El campo ${value} no debe de llevar números`;

export const createNameValidations = (name, errors) => {
    if (!name) {
        errors.name = createRequiredValueMessage("nombre");
    } if (!/^([^0-9]*)$/.test(name)) {
        errors.name = createNoDigitsMessage("nombre");
    }
};

export const createPaternalSurnameValidations = (paternalSurname, errors) => {
    if (!paternalSurname) {
        errors.apellido_paterno = createRequiredValueMessage(
            "apellido paterno"
        );
    } else if (!/^([^0-9]*)$/.test(paternalSurname)) {
        errors.apellido_paterno = createNoDigitsMessage("apellido paterno");
    }
};

export const createMaternalSurnameValidations = (maternalSurname, errors) => {
    if (!/^([^0-9]*)$/.test(maternalSurname)) {
        errors.apellido_materno = createNoDigitsMessage("apellido materno");
    }
};

export const createEmailValidations = (email, errors) => {
    if (!email) {
        errors.email = createRequiredValueMessage("email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "El email es no es válido";
    }
};

export const createTelephoneNumberValidations = (telephoneNumber, errors) => {
    if (!telephoneNumber) {
        errors.telefono = createRequiredValueMessage("telefono");
    } else if (
        telephoneNumber.length > 0 &&
        !/^[0-9]\d{9}$/.test(telephoneNumber)
    ) {
        errors.telefono = "El teléfono debe tener 10 números";
    }
};
