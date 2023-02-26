import axios from "axios";
import { types } from "../types";
import { apiRoutes } from "../../utils/apiRoutes";
import Swal from "sweetalert2";
import { setConfigurationRequest } from "../../utils/requests";

const {
    save_cost_center,
    get_cost_centers,
    show_loader,
    hide_loader,
    update_cost_center,
    update_center_cost,
} = types;

export const getCostCenters = (company) => (dispatch) => {
    dispatch({ type: show_loader });

    axios
        .get(
            `${apiRoutes.baseUrl}${apiRoutes.costCenters}/${company.id}`,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({
                type: get_cost_centers,
                payload: { costCenters: response.data.centro_costos },
            });
            dispatch({ type: hide_loader });
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            console.log(error);
        });
};

const checkIfCostCenterAlreadyExists = (costCenters, newCostCenterInfo) =>
    costCenters.filter(
        (costCenter) =>
            costCenter.nombre.trim().toLowerCase() ===
            newCostCenterInfo.nombre.trim().toLowerCase()
    ).length > 0;

export const saveCostCenter = (
    costCenters,
    newCostCenterInfo,
    company,
    clearForm,
    showModal
) => (dispatch) => {
    if (!checkIfCostCenterAlreadyExists(costCenters, newCostCenterInfo)) {
        dispatch({ type: show_loader });

        newCostCenterInfo.compania_id = company.id;
        axios
            .post(
                `${apiRoutes.baseUrl}${apiRoutes.costCenters}`,
                newCostCenterInfo,
                setConfigurationRequest()
            )
            .then((response) => {
                dispatch({ type: hide_loader });

                clearForm();
                dispatch({
                    type: save_cost_center,
                    payload: { newCostCenter: response.data.centro_de_costos },
                });
                Swal.fire({
                    title: "Registro exitoso",
                    text: `Centro de costo almacenado correctamente`,
                    icon: "success",
                    confirmButtonText: "Ok",
                }).then(() => {
                    showModal(false);
                });
            })
            .catch((error) => {
                dispatch({ type: hide_loader });
                clearForm();
                Swal.fire({
                    title: "Error",
                    text: `Error al almacenar el centro de costos`,
                    icon: "error",
                    confirmButtonText: "Ok",
                });
                console.log(error);
            });
    } else {
        clearForm();
        Swal.fire({
            title: "Error",
            text: `Ya hay un centro de costos con ese nombre`,
            icon: "warning",
            confirmButtonText: "Ok",
        });
    }
};

export const updateCostCenter = (costCenterInfo, showModal) => async (
    dispatch
) => {
    dispatch({ type: show_loader });
    try {
        const response = await axios.put(
            `${apiRoutes.baseUrl}${apiRoutes.updateCostCenter}`,
            costCenterInfo,
            setConfigurationRequest()
        );

        console.log("this is the response from update cost center", response);

        dispatch({ type: hide_loader });

        dispatch({
            type: update_center_cost,
            payload: { centerCost: response.data.centro_de_costos },
        });

        Swal.fire({
            text: `El centro de costos fue actualizado exitosamente`,
            icon: "success",
            confirmButtonText: "Ok",
        }).then(() => {
            showModal(false);
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: hide_loader });

        Swal.fire({
            title: "Error",
            text: `No se pudo actualizar el centro de costo`,
            icon: "error",
            confirmButtonText: "Ok",
        }).then(() => {
            showModal(false);
        });
    }
};
