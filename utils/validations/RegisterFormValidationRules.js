export default function validate(values) {
    let errors = {};

    if (!values.nombre_contacto) {
        errors.nombre_contacto = 'El nombre es requerido'
    }

    if (!values.apellido_paterno) {
        errors.apellido_paterno = 'El apellido paterno es requerido'
    }

    if (!values.apellido_materno) {
        errors.apellido_materno = 'El apellido materno es requerido'
    }

    if (!values.nombre_compania) {
        errors.nombre_compania = 'El nombre de la compañía es requerido'
    }else if (values.nombre_compania.length < 3) {
        errors.nombre_compania = 'El nombre de la compañía no es válido'
    }

    if (!values.numero_empleados) {
        errors.numero_empleados = 'El número de empleados es requerido'
    }else if (values.numero_empleados.length===0) {
        errors.numero_empleados = 'El numero de empleados debe ser mayor a 0'
    }

    if (!values.email) {
        errors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'El email es no es válido'
    }

    if (!values.email_compania) {
        errors.email_compania = 'El email de la compañía es requerido'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email_compania = 'El email de la compañía no es válido'
    }

    if (!values.telefono) {
        errors.telefono = 'El teléfono es requerido'
    }else if (values.telefono.length>0 && !/^[0-9]\d{9}$/.test(values.telefono)) {
        errors.telefono = 'El teléfono debe tener 10 números'
    }

    if (!values.telefono_compania) {
        errors.telefono_compania = 'El teléfono de la compañía es requerido'
    } else if (values.telefono_compania.length < 10 || values.telefono_compania.length > 10) {
        errors.telefono_compania = 'El teléfono de la compañía debe tener 10 dígitos'
    }

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

    if (!values.direccion) {
        errors.direccion = 'La calle es requerida'
    }else if (values.direccion.length < 5) {
        errors.direccion = 'La calle no es válida'
    }

    /*
    if (!values.cp) {
        errors.cp = 'El código postal es requerido';
    }else if (values.cp.length < 5) {
        errors.cp = 'La código postal no es válido';
    }*/

    if (!values.asentamiento_id) {
        errors.asentamiento_id = 'Selecciona la colonia'
    }else if (values.asentamiento_id === "no-aplica") {
        errors.asentamiento_id = 'Selecciona una colonia válida'
    }

    return errors;
};