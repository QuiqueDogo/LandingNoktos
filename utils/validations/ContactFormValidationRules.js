export default function validate(values) {
    let errors = {};

    if (!values.nombre) {
        errors.nombre = 'El nombre es requerido'
    }

    if (values.empresa !== undefined) {
        if (values.empresa.length < 3 && values.empresa.length > 0) {
            errors.empresa = 'El nombre de la compañía no es válido'
        }
    }

    if (!values.correo) {
        errors.correo = 'El correo es requerido'
    } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
        errors.correo = 'El correo no es válido'
    }

    if (values.telefono !== undefined) {
        if ((values.telefono.length>0 && !/^[0-9]\d{9}$/.test(values.telefono) && values.telefono.length > 0)) {
            errors.telefono = 'El teléfono debe tener 10 números'
        }
    }

    if (values.asunto !== undefined) {
        if (values.asunto.length < 5 && values.asunto.length > 0) {
            errors.asunto = 'El asunto no es válido'
        }
    }

    if (values.mensaje !== undefined) {
        if (values.mensaje.length < 5 && values.mensaje.length > 0) {
            errors.mensaje = 'El mensaje es requerido'
        }
    }

    return errors
}