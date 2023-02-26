import axios from "axios";
import { apiRoutes } from '../utils/apiRoutes'
import { setConfigurationRequest } from "../utils/requests";

export const getUsersRequest = async () => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.getUsers}`, setConfigurationRequest())
}

export const getDetailUserRequest = async (userId) => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.users}/${apiRoutes.detail}/${userId}`, setConfigurationRequest())
}

export const createUserRequest = async (dataRequest) => {
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.createUser}`, dataRequest, setConfigurationRequest())
}

export const updateUserRequest = async (dataRequest) => {
    return await axios.put(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.updateUser}`, dataRequest, setConfigurationRequest())
}

export const deleteUserRequest = async (dataRequest) => {
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.deleteUser}`, dataRequest, setConfigurationRequest())
}

export const updateRFCRequest = async (dataRequest) => {
    return await axios.put(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.updateRFC}`, dataRequest, setConfigurationRequest())
}

export const approveNoktosIncreaseRequest = async (dataRequest) => {
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.authorizationResponse}`, dataRequest, setConfigurationRequest())
}

export const getInfoAboutNoktosRequest = async (requestId) => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.getInfoAboutNoktosRequest}/${requestId}`, setConfigurationRequest())
}

export const getUserWallet = (compania_id) => {
    const headers = setConfigurationRequest()
    const { baseUrl, membership, balance } = apiRoutes;
    const URL = `${baseUrl}${membership}${balance}`;
    const body = {
        compania_id,
    };
    return axios.post(URL, body, headers)
}