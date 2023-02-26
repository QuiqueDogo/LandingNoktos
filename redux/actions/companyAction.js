import { types } from "../types";
import { hideLoader, showLoader } from "./application";
import axios from "axios";
import { apiRoutes } from "../../utils/apiRoutes";
import Swal from "sweetalert2";
import { setConfigurationRequest } from "./../../utils/requests";

export const addCompanies = (companies) => {
    return {
        type: types.add_companies,
        payload: {
            companies,
        },
    };
};

export const addCompany = (company) => (dispatch) => {
    console.log("company from action", company);
    dispatch({
        type: types.add_company,
        payload: {
            company,
        },
    });
};

const getInfoOfAddress = (cp, dispatch) => {
    const { set_address_info, show_loader, hide_loader } = types;
    dispatch({ type: show_loader });
    axios
        .get(`${apiRoutes.baseUrl}${apiRoutes.infoCP}/${cp}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        .then((response) => {
            dispatch({ type: hide_loader });
            dispatch({
                type: set_address_info,
                payload: { addressInfo: response.data },
            });
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            Swal.fire({
                title: "Error",
                text: `Error con el código postal`,
                icon: "error",
                confirmButtonText: "Ok",
            });
            console.log("Este es el error de getInfoOfAddress", error);
        });
};

export const setNewAdressFromCP = (cp) => (dispatch) => {
    getInfoOfAddress(cp, dispatch);
};

export const getCompanyInfo = (idCompany) => (dispatch) => {
    dispatch({ type: showLoader });
    const token = localStorage.getItem("local_token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
    const { get_company_by_id } = types;

    axios
        .get(
            `${apiRoutes.baseUrl}${apiRoutes.baseCompany}/${idCompany}`,
            config
        )
        .then((response) => {
            getInfoOfAddress(response.data.informacion.codigo_postal, dispatch);
            dispatch({ type: hideLoader });
            dispatch({
                type: get_company_by_id,
                payload: { companyInfo: response.data.informacion },
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: hideLoader });
        });
};

export const updateCompanyInfo =
    (companyInfo, resetIsSubmiting, clearForm, redirect) => (dispatch) => {
        const { show_loader, hide_loader } = types;
        dispatch({ type: show_loader });

        axios
            .put(
                `${apiRoutes.baseUrl}${apiRoutes.addCompany}`,
                JSON.stringify(companyInfo),
                setConfigurationRequest()
            )
            .then((response) => {
                dispatch({ type: hide_loader });
                if (response.status === 200) {
                    clearForm();
                    getCompanies(dispatch);
                    Swal.fire({
                        title: "Registro exitoso",
                        text: "Su compañía se modificó correctamente",
                        icon: "success",
                        confirmButtonText: "Ok",
                    }).then(() => {
                        redirect(true);
                    });
                } else {
                    resetIsSubmiting();
                    console.log(response);
                    Swal.fire({
                        title: "Error",
                        text: "No se pudo realizar el registro",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            })
            .catch((error) => {
                dispatch({ type: hide_loader });
                resetIsSubmiting();
                let errorMessage = "";
                Object.keys(error.response.data.errors).forEach((nameKey) => {
                    errorMessage += `${error.response.data.errors[nameKey]} \n`;
                });

                Swal.fire({
                    title: "Error",
                    text: `No se pudo realizar el registro. ${errorMessage}`,
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            });
    };

function getCompanies(dispatch) {
    console.log("LOAD COMPANIES");
    dispatch(showLoader());
    const token = localStorage.getItem("local_token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    axios
        .get(`${apiRoutes.baseUrl}${apiRoutes.baseCompany}`, config)
        .then((response) => {
            dispatch(hideLoader());
            console.log(response.data);
            dispatch(addCompanies(response.data));
            dispatch(addCompany(response.data[0]));
            localStorage.setItem(
                "selected_company",
                JSON.stringify(response.data[0])
            );
        })
        .catch((error) => {
            dispatch(hideLoader());
            console.log(error);
        });
}
