export default function validate(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'El correo es requerido'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'El correo no es válido'
    }


    return errors;
};