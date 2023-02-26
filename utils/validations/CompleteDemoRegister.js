export default function validate(values) {
    let errors = {};

    if (!values.name) {
        errors.name = 'El nombre es requerido'
    }

    if (!values.apellido_paterno) {
        errors.apellido_paterno = 'El apellido paterno es requerido'
    }

    if (!values.apellido_materno) {
        errors.apellido_materno = 'El apellido materno es requerido'
    }

    if (!values.telefono) {
        errors.telefono = 'El teléfono es requerido'
    }else if (values.telefono.length>0 && !/^[0-9]\d{9}$/.test(values.telefono)) {
        errors.telefono = 'El teléfono debe tener 10 números'
    }

    return errors;
};