import Swal from "sweetalert2";
import { showToast } from '../utils'

export const verifySuccess = () => showToast({
    type: "success",
    text: "Se agregó la contraseña correctamente",
    duration: 3000,
});

export const verifyErr = () => Swal.fire({
    title: "Error",
    text: "Error al iniciar sesión",
    icon: "error",
    confirmButtonText: "Ok",
});

export const verifyErrMsg = (message) => Swal.fire({
    icon: "error",
    title: "Error",
    confirmButtonText: "Ok",
    text: `Error al iniciar sesión, ${message}`,
});

export const verifyAssignErr = () => Swal.fire({
    timer: 3000,
    icon: "error",
    title: "Error",
    timerProgressBar: true,
    confirmButtonText: "Ok",
    text: `Error al asignar la contraseña`,
});

export const accountVerifiedErr = () => showToast({
    type: "error",
    duration: 3000,
    text: "La cuenta ya ha sido verificada con anterioridad",
});

export const updateStatusErr = () => Swal.fire({
    icon: "error",
    title: "Error",
    confirmButtonText: "Ok",
    text: "No se pudo actualizar el estatus del usuario",
});