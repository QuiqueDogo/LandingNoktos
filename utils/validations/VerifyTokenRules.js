export default function validate(values) {
    let errors = {};

    if (!values.password) {
        errors.password = 'La contraseña es requerida'
    }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#_.,$^+=!*()@%&]).{8,}$/.test(values.password)) {
             errors.password = 'La contraseña debe contener por lo menos 8 caracteres (una minúscula, una mayúscula, un número, un caracter especial).'
    }
    else if ((values.password !== values.passwordConfirm)) {
        errors.password = 'Las contraseñas no coinciden'
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'La confirmación de contraseña es requerida'
    }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#_.,$^+=!*()@%&]).{8,}$/.test(values.passwordConfirm)) {
        errors.passwordConfirm = 'La contraseña debe contener por lo menos 8 caracteres (una minúscula, una mayúscula, un número, un caracter especial).'
    }


    return errors
}