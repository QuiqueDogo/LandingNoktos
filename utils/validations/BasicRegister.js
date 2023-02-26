export default function validate(values) {
    let errors = {};

    if (!values.correo) {
        errors.correo = 'El correo es requerido'
    } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
        errors.correo = 'El correo no es válido'
    }


    return errors;
};