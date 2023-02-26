export default function validate(values) {
    let errors = {};

    if (!values.rfc) {
        errors.rfc = 'El RFC es requerido';
    } else if (!/^([A-ZÑ a-zñ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z a-z\d]{2})([A a\d])$/.test(values.rfc)) {
        errors.rfc = 'El RFC no es válido'
    }

    if (!values.razon_social) {
        errors.razon_social = 'La razón social es requerida'
    }else if (values.razon_social.length < 5) {
        errors.razon_social = 'La razón social no es válida'
    }

    return errors;
};