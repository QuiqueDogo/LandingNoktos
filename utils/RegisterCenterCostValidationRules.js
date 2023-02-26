export default function validate(values) {
    let errors = {};

    if (!values.nombre) {
        errors.nombre = 'El nombre es requerido'
    }

    if (!values.descripcion) {
        errors.descripcion = 'La descripción es requerida'
    } else if (values.descripcion.length < 8) {
        errors.descripcion = 'La descripción no es válida, debe ser mínimo de 8 caracteres'
    }

    return errors;
};