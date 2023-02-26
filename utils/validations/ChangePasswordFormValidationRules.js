export default function validate(values) {
    let errors = {};

    if (!values.password) {
        errors.password = 'La contraseña es requerida'
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#_.,$^+=!*()@%&]).{8,}$/.test(values.password)) {
        errors.password = 'La contraseña debe contener por lo menos 8 caracteres (una minúscula, una mayúscula, un número, un caracter especial).'
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'La confirmación del password es requerida'
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#_.,$^+=!*()@%&]).{8,}$/.test(values.password)) {
        errors.passwordConfirmation = 'La contraseña debe contener por lo menos 8 caracteres (una minúscula, una mayúscula, un número, un caracter especial).'
    } else if(values.password !== values.passwordConfirmation){
        errors.passwordConfirmation = 'Las contraseñas deben ser iguales'
    }

    return errors
}