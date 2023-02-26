import moment from "moment";
import Swal from "sweetalert2";

export function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

export const compareDates = (a, b) => {
    const completeDateA = new moment(a.fecha).format("YYYY-MM-DD HH:mm:ss");
    const completeDateB = new moment(b.fecha).format("YYYY-MM-DD HH:mm:ss");

    if (completeDateA > completeDateB) return 1
    else if (completeDateA < completeDateB) return -1
    else return 0
}

export const checkIfSessionExist = (router) => {
    const token = localStorage.getItem("local_token");
    // if (token !== null) router.push("/dashboard")
};

export const showToast = ({ type, text, duration }) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: duration,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon: type,
        title: text,
    });
};

export const getFormatDate = (date) => moment(date).format("YYYY-MM-DD");

export const getNumberOfDays = (start, end) => {
    const endDate = moment(end);
    const startDate = moment(start);
    const days = endDate.diff(startDate, "days");
    return days;
};

export const downloadPDF = ({ documentLink, name, callback, extension }) => {
    try {
        const linkSource = `data:application/${extension};base64,${documentLink}`
        const downloadLink = document.createElement("a")
        const fileName = `${name}.${extension}`
        downloadLink.href = linkSource
        downloadLink.download = fileName
        downloadLink.click()
        if (callback !== null) {
            callback()
        }
    } catch (ex) {
        console.log(ex)
    }
}

export const removeDoubleSpaces = value => {

    if( typeof value  !== "string" )  return value

    const arrStr = value.split(' ')
    const expVacio = /^\s*$/
    const vacio = str => expVacio.test(str)
    const newArrStr = arrStr.filter(arr => !vacio(arr))
    
    return newArrStr.join(' ')

}