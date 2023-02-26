export default function validate(values) {
    let errors = {};

    if (!values.name) {
        errors.name = 'El nombre es requerido'
    }

    if (!values.correo) {
        errors.correo = 'El correo es requerido'
    } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
        errors.correo = 'El correo no es válido'
    }

    if (!values.apellido_paterno) {
        errors.apellido_paterno = 'El apellido paterno es requerido'
    }else if (values.apellido_paterno.length < 4 && values.apellido_paterno.length  > 0) {
        errors.apellido_paterno = 'El apellido paterno no es válido'
    }

    /*
        if (!values.contrasena) {
            errors.contrasena = 'La contraseña es requerida'
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#_.,$^+=!*()@%&]).{8,}$/.test(values.contrasena)) {
            errors.contrasena = 'La contraseña debe contener por lo menos 8 caracteres (una minúscula, una mayúscula, un número, un caracter especial).'
        }
    */


    if (!values.telefono) {
        errors.telefono = 'El teléfono es requerido'
    }else if (values.telefono.length>0 && !/^[0-9]\d{9}$/.test(values.telefono)) {
        errors.telefono = 'El teléfono debe tener 10 números'
    }

    return errors;

}