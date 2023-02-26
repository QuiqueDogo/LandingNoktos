import axios from "axios";
import { apiRoutes } from "../utils/apiRoutes";
import { setConfigurationRequest } from "../utils/requests";

const { baseUrl } = apiRoutes;

export const getHotels = async (body) => {
    const { headers } = setConfigurationRequest();
    const { getHotels } = apiRoutes;
    const URL = `${baseUrl}${getHotels}`;
    return axios({
        method: "POST",
        url: URL,
        timeout: process.env.NEXT_PUBLIC_GET_HOTELS_TIMEOUT,
        timeoutErrorMessage:
            "Disculpa las molestias, tiempo de espera agotado.",
        headers,
        data: body,
    });
};

export const getSuggestions = async (keyword) => {
    const headers = setConfigurationRequest();
    const { autocomplete } = apiRoutes;
    const URL = `${baseUrl}${autocomplete}/${keyword}`;
    return axios.get(URL, headers, keyword);
};

export const getHierarchies = async () => {
    const headers = setConfigurationRequest();
    const { hierarchies } = apiRoutes;
    const URL = `${baseUrl}${hierarchies}`;
    return axios.get(URL, headers);
};

export const cancelReservation = async (reservationId) => {
    const headers = setConfigurationRequest();
    const { cancelReservation } = apiRoutes;
    const URL = `${baseUrl}${cancelReservation}/${reservationId}`;
    return axios.delete(URL, headers);
};

export const getReservations = async (data) => {
    const headers = setConfigurationRequest();
    const { baseUrl, reservations, baseCompanies } = apiRoutes;
    const { companyId, typeFilter, startDate, endDate, onlyReserved } = data
    const URL = `${baseUrl}${reservations}/${baseCompanies}/${companyId}/${typeFilter}/${startDate}/${endDate}/${onlyReserved}`;
    return axios.get(URL, headers)
}

export const getReservationInfoAndCompanyBalance = (reservationId) => {
    const { baseUrl, getInfoOfCompanyAndReservationToModify } = apiRoutes;
    return axios.get(`${baseUrl}${getInfoOfCompanyAndReservationToModify}${reservationId}`, setConfigurationRequest())
}

export const getModifyCostRequest = (dataRequest) => {
    const { baseUrl, modificationCost } = apiRoutes;
    return axios.post(`${baseUrl}${modificationCost}`, dataRequest, setConfigurationRequest())
}