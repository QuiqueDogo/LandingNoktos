export default function validate(values) {
    let errors = {};

    if (!values.cdfi_id) {
        errors.cdfi_id = 'Selecciona el uso de CFDI'
    }else if (values.cdfi_id === "no-aplica") {
        errors.cdfi_id = 'Selecciona una opción válida'
    }

    if (!values.metodos_pago_id) {
        errors.metodos_pago_id = 'Selecciona una forma de pago'
    }else if (values.metodos_pago_id === "no-aplica") {
        errors.metodos_pago_id = 'Selecciona una opción válida'
    }

    return errors;
};