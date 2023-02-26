export default function validate(values) {
    let errors = {};

    if (!values.nombre) {
        errors.nombre = 'El nombre es requerido'
    } else if (values.nombre.length < 3) {
        errors.nombre = 'El nombre no es válido'
    }
    if (!values.activo) {
        errors.activo = 'El estatus es requerido'
    }

    return errors
}