export default function validate(values) {
    let errors = {};

    if (!values.name) {
        errors.name = 'El nombre es requerido'
    }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.exec(values.name)){
        errors.name = 'El nombre solo debe contener letras'
    }

    if (!values.apellido_paterno) {
        errors.apellido_paterno = 'El apellido paterno es requerido'
    }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.exec(values.apellido_paterno)){
        errors.apellido_paterno = 'El apellido paterno solo debe contener letras'
    }

    if (values.apellido_materno !== undefined) {
        if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.exec(values.apellido_materno)){
            errors.apellido_materno = 'El apellido materno solo debe contener letras'
        }
    }

    if (!values.email) {
        errors.email = 'El correo es requerido'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'El correo no es válido'
    }

    // if (!values.contrasena) {
    //     errors.contrasena = 'La contraseña es requerida'
    // } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#_.,$^+=!*()@%&]).{8,}$/.test(values.contrasena)) {
    //     errors.contrasena = 'La contraseña debe contener por lo menos 8 caracteres (una minúscula, una mayúscula, un número, un caracter especial).'
    // }

    if (values.telefono !== undefined) {
        if (values.telefono.length>0 && !/^[0-9]\d{9}$/.test(values.telefono)) {
            errors.telefono = 'El teléfono debe tener 10 números'
        }
    }

    if (values.rfc !== undefined && values.rfc !== null) {
        if (values.rfc.length>0 && !/^([A-ZÑ a-zñ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z a-z\d]{2})([A a\d])$/.test(values.rfc)) {
            errors.rfc = 'El RFC no es válido'
        }
    }


    return errors;
};