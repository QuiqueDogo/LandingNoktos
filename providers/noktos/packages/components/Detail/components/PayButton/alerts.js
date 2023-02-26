import Swal from "sweetalert2";
import { formatMoney } from "../../../../../../../utils/formatMoney";

export const noCards = () =>
    Swal.fire({
        title: "No hay tarjetas registradas",
        text: `Ingrese una tarjeta para completar su compra`,
        icon: "warning",
        confirmButtonText: "Aceptar",
    });

export const noTokens = () =>
    Swal.fire({
        title: "Seleccionar paquete",
        text: `Debe seleccionar un paquete de noktos`,
        icon: "warning",
        confirmButtonText: "Aceptar",
    });

export const noSelectedCard = () =>
    Swal.fire({
        title: "No hay tarjetas seleccionadas",
        text: `Seleccione una tarjeta para completar su compra`,
        icon: "warning",
        confirmButtonText: "Aceptar",
    });

export const noCDFI = () =>
    Swal.fire({
            title: "Oops...",
            text: `Seleccione un uso de CFDI válido`,
            icon: "error",
            confirmButtonText: "Aceptar",
    });

export const noRFC = () =>
    Swal.fire({
            title: "Oops...",
            text: `El RFC de la compañía es incorrecto, actualicelo e intente de nuevo`,
            icon: "error",
            confirmButtonText: "Aceptar",
    });

export const buyWithCardSuccessful = () =>
    Swal.fire({
        title: "Compra realizada con éxito",
        text: `Se procesó correctamente su compra de Noktos`,
        icon: "success",
        confirmButtonText: "Aceptar",
    });

export const buyWithCardFailed = (error) =>
    Swal.fire({
        title: "Error al realizar su compra",
        text: `${
            error.response
                ? error.response.data.hasOwnProperty("message")
                    ? error.response.data.message
                    : "Error en el servidor"
                : "No pudimos procesar su pago, intente de nuevo "
        }`,
        icon: "error",
        confirmButtonText: "Aceptar",
    });

export const buyWithTransferSuccesful = (response) =>
    Swal.fire({
        title: "Revisa tu correo y sigue las indicaciones.",
        text: `Su compra en proceso de validación, el número de referencia para realizar la transferencia bancaria es el ${
            response.data.compraToken.referencia
        } y el total a pagar es de: ${formatMoney(
            response.data.compraToken.total
        )}.`,
        icon: "success",
        confirmButtonText: "Aceptar",
    });

export const buyWithTransferFailed = (error) =>
    Swal.fire({
        title: "Error al realizar su compra",
        text: `${
            error.response
                ? error.response.data.hasOwnProperty("message")
                    ? error.response.data.message
                    : "Error en el servidor"
                : "No pudimos procesar su pago, intente de nuevo "
        }`,
        icon: "error",
        confirmButtonText: "Aceptar",
    });
