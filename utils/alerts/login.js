import Swal from "sweetalert2";

export const loginErr = () =>
    Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonText: "Ok",
        text: "Error al iniciar sesión",
    });

export const loginErrMsg = (message) =>
    Swal.fire({
        icon: "error",
        title: "Error",
        confirmButtonText: "Ok",
        text: `Error al iniciar sesión, ${message}`,
    });

export const loginUserBlocked = () => Swal.fire({
    icon: "warning",
    confirmButtonText: "Continuar",
    allowOutsideClick: false,
    title: "Cambio de contraseña",
    text: "Para continuar es necesario que cambie su contraseña",
})