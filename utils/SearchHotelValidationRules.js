export default function validate(values) {
    let errors = {};

    if (!values.empresa_id) {
        errors.empresa_id = 'Selecciona la empresa'
    }else if (values.empresa_id === "no-aplica") {
        errors.empresa_id = 'Selecciona una empresa válida'
    }

    if (!values.viajero_id) {
        errors.viajero_id = 'Selecciona el viajero'
    }else if (values.viajero_id === "no-aplica") {
        errors.viajero_id = 'Selecciona un viajero válido'
    }

    if (!values.destino_id) {
        errors.destino_id = 'Selecciona el destino'
    }else if (values.destino_id === "no-aplica") {
        errors.destino_id = 'Selecciona un destino válido'
    }

    if (!values.tipo_id) {
        errors.tipo_id = 'Selecciona el tipo de habitación'
    }else if (values.tipo_id === "no-aplica") {
        errors.tipo_id = 'Selecciona un tipo de habitación válida'
    }

return errors;
};