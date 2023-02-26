import axios from "axios";
import { types } from "../types";
import { apiRoutes } from "utils/apiRoutes";
import { setConfigurationRequest } from "utils/requests";
import { showLoader, hideLoader } from "redux/actions/application";

export const getReservations =
    (company, typeFilter, parameters) => (dispatch) => {
        dispatch(showLoader());

        const { dates, selectedCostCenter, selectedTraveller } = parameters;
        const { id } = company;
        let { start, end } = dates;
        const { baseUrl, reservations, baseCompanies } = apiRoutes;
        const URL = `${baseUrl}${reservations}/${baseCompanies}/${id}/${typeFilter}/${start}/${end}/0`;

        axios
            .get(URL, setConfigurationRequest())
            .then(({ data }) => {
                dispatch(hideLoader());

                const { reservaciones } = data;

                const filterReservations = reservaciones.filter(
                    ({ estado }) => estado !== 1
                );

                dispatch({
                    type: types.get_reservations,
                    payload: {
                        reservations: filterReservations,
                    },
                });
            })
            .catch((err) => dispatch(hideLoader()));
    };

export const resendReservation = (idReservation) => (dispatch) => {
    dispatch({
        type: types.show_loader,
    });

    let dataRequest = {
        codigo_reservacion: idReservation,
    };
    axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.baseAdmin}${apiRoutes.baseReservations}${apiRoutes.resend}`,
            dataRequest,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({
                type: types.hide_loader,
            });
        })
        .catch((error) => {
            dispatch({
                type: types.hide_loader,
            });
        });
};
