import axios from 'axios';
import { apiRoutes } from '../../utils/apiRoutes';
import { types } from './../types';
import Swal from 'sweetalert2';
import { setConfigurationRequest } from '../../utils/requests';

const {
    show_loader,
    hide_loader,
    get_travellers,
    create_traveller,
    create_guest,
    update_traveller,
    get_guests,
    get_permissions,
    update_guest,
    get_cost_centers_by_user_id_and_company_id,
    set_update_cost_centers,
    update_cost_centers,
    set_companies_in_guest,
} = types;

export const getTravellers = (company) => (dispatch) => {
    dispatch({ type: show_loader });

    axios
        .get(
            `${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.travellers}/${company.id}`,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({ type: hide_loader });
            dispatch({
                type: get_travellers,
                payload: { travellers: response.data },
            });
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            console.log(error);
        });
};

const registerCostCenters = (
    costCenterInfo,
    clearScreen,
    dispatch,
    showModal
) => {
    dispatch({ type: show_loader });

    axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.baseTraveller}${apiRoutes.baseCompany}/${apiRoutes.centerCosts}`,
            costCenterInfo,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({ type: hide_loader });
            clearScreen();
            Swal.fire({
                title: 'Registro exitoso',
                text: `Viajero almacenado correctamente`,
                icon: 'success',
                confirmButtonText: 'Ok',
            }).then(() => {
                showModal(false);
            });
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            Swal.fire({
                title: 'Error',
                text: `Error al almacenar el viajero`,
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        });
};

export const createTraveller = (
    values,
    costCenterInfo,
    clearScreen,
    showModal
) => (dispatch) => {
    let registeredIdTraveller = 0;

    dispatch({ type: show_loader });

    values.compania_id = costCenterInfo.compania_id;

    axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.travellers}`,
            values,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({ type: hide_loader });
            if (
                response.data.message.includes(
                    'Ya existe un registro con este email'
                )
            ) {
                clearScreen();
                Swal.fire({
                    title: 'Error',
                    text: `Ya existe un registro con ese correo electrónico`,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                });
            } else {
                if (response.data.viajero.id) {
                    dispatch({
                        type: create_traveller,
                        payload: { newTraveller: response.data.viajero },
                    });
                    registeredIdTraveller = response.data.viajero.id;
                    costCenterInfo.viajero_id = registeredIdTraveller;
                    registerCostCenters(
                        costCenterInfo,
                        clearScreen,
                        dispatch,
                        showModal
                    );
                }
            }
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            Swal.fire({
                title: 'Error',
                text: `Error al almacenar el viajero`,
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        });
};

export const getGuests = (company) => (dispatch) => {
    axios
        .get(
            `${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.getGuest}/${company.id}`,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({ type: hide_loader });
            dispatch({ type: get_guests, payload: { guests: response.data } });
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            console.log(error);
        });
};

export const getPermissions = () => (dispatch) => {
    dispatch({ type: show_loader });

    axios
        .get(
            `${apiRoutes.baseUrl}${apiRoutes.functionalities}/${apiRoutes.baseCompany}`,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({
                type: get_permissions,
                payload: { permissions: response.data.funcionalidades },
            });
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            console.log(error);
        });
};

function registerFunctionalities(body, dispatch, clearScreen, showModal) {
    axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.functionalities}`,
            body,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({ type: hide_loader });
            clearScreen();

            Swal.fire({
                title: 'Registro exitoso',
                text: `Reservante almacenado correctamente`,
                icon: 'success',
                confirmButtonText: 'Ok',
            }).then(() => {
                showModal(false);
            });
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            console.log(error);
            Swal.fire({
                title: 'Error',
                text: `Error al almacenar el reservante`,
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        });
}

export const saveGuest = (
    body,
    company,
    clearForm,
    functionalitiesInfo,
    clearScreen,
    showModal
) => (dispatch) => {
    dispatch({ type: show_loader });
    body.rol_id = 4;

    body.compania_id = company.id;

    axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.guest}`,
            body,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({
                type: create_guest,
                payload: { newGuest: response.data[0] },
            });
            functionalitiesInfo.user_id = response.data[0].id;

            if (functionalitiesInfo.funcionalidades.length > 0) {
                registerFunctionalities(
                    functionalitiesInfo,
                    dispatch,
                    clearScreen,
                    showModal
                );
            } else {
                dispatch({ type: hide_loader });
                clearForm();

                Swal.fire({
                    title: 'Registro exitoso',
                    text: `Reservante almacenado correctamente`,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                }).then(() => {
                    showModal(false);
                });
            }
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            let errorMessage = '';
            Object.keys(error.response.data.errors).forEach((nameKey) => {
                errorMessage += `${error.response.data.errors[nameKey]} \n`;
            });

            Swal.fire({
                title: 'Error',
                text: `No se pudo realizar el registro. ${errorMessage}`,
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        });
};

const makeUpdateTravellerRequest = async (body) => {
    const response = await axios.put(
        `${apiRoutes.baseUrl}${apiRoutes.updateTraveller}`,
        body,
        setConfigurationRequest()
    );
    return response;
};

const handleUpdateTravellerErrors = (callbacks) => {
    const { dispatch, cleanFormHandler, showModal } = callbacks;
    dispatch({ type: hide_loader });
    cleanFormHandler();
    Swal.fire({
        title: 'Error',
        text: `No se pudo actualizar el viajerossss`,
        icon: 'error',
        confirmButtonText: 'Ok',
    }).then(() => {
        showModal(false);
    });
};

const makeCreateCostCenterRequest = async (body) => {
    let response;

    response = await axios.post(
        `${apiRoutes.baseUrl}${apiRoutes.travellers}/${apiRoutes.baseCompany}/${apiRoutes.centerCosts}`,
        body,
        setConfigurationRequest()
    );

    return response;
};

const createBody = (costCentersInfo) => {
    const costCentersRequest = costCentersInfo.centros_costo.map(
        (costCenter) => {
            return {
                centro_costo: costCenter.id,
            };
        }
    );
    const body = {
        viajero_id: costCentersInfo.viajero_id,
        compania_id: costCentersInfo.compania_id,
        centros_costo: costCentersRequest.length > 0 ? costCentersRequest : [],
    };
    return body;
};

const handleSuccessfulCreateCostCenterRequest = (responses, callbacks) => {
    const { cleanFormHandler, dispatch, showModal } = callbacks;
    const { responseCostCenters, responseTraveller } = responses;
    if (responseCostCenters.status === 200) {
        cleanFormHandler();

        dispatch({ type: hide_loader });
        dispatch({
            type: update_traveller,
            payload: { traveller: responseTraveller.data.viajero },
        });

        Swal.fire({
            title: 'Exito',
            text: `El viajero fue actualizado exitosamente`,
            icon: 'success',
            confirmButtonText: 'Ok',
        }).then(() => {
            showModal(false);
        });
    }
};

const makeCreateCostCenterRequestIfResponseTravellerWasSuccessful = async (
    responseTraveller,
    costCentersInfo,
    callbacks
) => {
    const { cleanFormHandler, dispatch, showModal } = callbacks;
    if (responseTraveller.status === 200) {
        try {
            const responseCostCenters = await makeCreateCostCenterRequest(
                createBody(costCentersInfo)
            );
            handleSuccessfulCreateCostCenterRequest(
                { responseCostCenters, responseTraveller },
                { cleanFormHandler, dispatch, showModal }
            );
        } catch (error) {
            handleUpdateTravellerErrors({
                dispatch,
                cleanFormHandler,
                showModal,
            });
        }
    }
};

export const updateTraveller = (
    travellerInfo,
    showModal,
    cleanFormHandler,
    costCentersInfo
) => async (dispatch) => {
    dispatch({ type: show_loader });

    try {
        const responseTraveller = await makeUpdateTravellerRequest(
            travellerInfo
        );

        makeCreateCostCenterRequestIfResponseTravellerWasSuccessful(
            responseTraveller,
            costCentersInfo,
            {
                cleanFormHandler,
                dispatch,
                showModal,
            }
        );
    } catch (error) {
        handleUpdateTravellerErrors({ dispatch, cleanFormHandler, showModal });
    }
};

export const updateGuest = (guestInfo, showModal, cleanFormHandler) => async (
    dispatch
) => {
    dispatch({ type: show_loader });

    const bodyRequest = {
        id: guestInfo.id,
        name: guestInfo.name,
        apellido_paterno: guestInfo.apellido_paterno,
        telefono: guestInfo.telefono,
        companias: guestInfo.companias,
    };

    try {
        const response = await axios.put(
            `${apiRoutes.baseUrl}${apiRoutes.updateGuest}`,
            bodyRequest,
            setConfigurationRequest()
        );

        dispatch({ type: hide_loader });
        cleanFormHandler();

        dispatch({
            type: update_guest,
            payload: { guest: response.data.reservante },
        });

        Swal.fire({
            title: 'Exito',
            text: `El reservante fue actualizado exitosamente`,
            icon: 'success',
            confirmButtonText: 'Ok',
        }).then(() => {
            showModal(false);
        });
    } catch (error) {
        dispatch({ type: hide_loader });
        cleanFormHandler();

        Swal.fire({
            title: 'Error',
            text: `No se pudo actualizar el reservante`,
            icon: 'error',
            confirmButtonText: 'Ok',
        }).then(() => {
            showModal(false);
        });
    }
};

export const getCostCentersByUserIdAndCompanyId = (userId, companyId) => async (
    dispatch
) => {
    dispatch({ type: show_loader });
    try {
        const response = await axios.get(
            `${apiRoutes.baseUrl}${apiRoutes.getCostCenters}/${userId}/${companyId}`,
            setConfigurationRequest()
        );
        dispatch({ type: hide_loader });

        dispatch({
            type: get_cost_centers_by_user_id_and_company_id,
            payload: { costCenters: response.data.centro_costos, userId },
        });
    } catch (error) {
        dispatch({ type: hide_loader });
        console.log('This is the error', error);
    }
};

export const setUpdateCostCenters = (userId, costCenter) => (dispatch) => {
    dispatch({
        type: set_update_cost_centers,
        payload: { userId, costCenter },
    });
};

export const getCompaniesByGuestId = (id) => async (dispatch) => {
    dispatch({ type: show_loader });
    try {
        const response = await axios.get(
            `${apiRoutes.baseUrl}${apiRoutes.updateGuest}/${id}`,
            setConfigurationRequest()
        );
        dispatch({ type: hide_loader });
        dispatch({
            type: set_companies_in_guest,
            payload: {
                companies: response.data.reservante.companias,
                guestId: response.data.reservante.id,
            },
        });
    } catch (error) {
        dispatch({ type: hide_loader });
        console.log('This is the getCompaniesByGuestId error', error);
    }
};
