import axios from "axios";
import { apiRoutes } from "utils/apiRoutes";
import { setBasicConfigurationRequest, setConfigurationRequest } from "utils/requests";

export const registerUserRequest = async (dataRequest) => {
    return await axios.post(`https://api.noktos.com/api/${apiRoutes.baseCompany}/${apiRoutes.contact}`, dataRequest, setConfigurationRequest())
}

export const changePasswordRequest = ({ idUser, token, dataRequest }) => {
    const { baseUrl, user } = apiRoutes
    const headers = setBasicConfigurationRequest()
    return axios.put(`${baseUrl}${user}/${token}/${idUser}`, dataRequest, headers)
}

export const loginRequest = (body) => {
    const { baseUrl, login } = apiRoutes
    const headers = setBasicConfigurationRequest()
    return axios.post(`${baseUrl}${login}`, body, headers)
}

export const getUserRequest = async () => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.users}`, setConfigurationRequest())
}

export const changeFirstLoginRequest = async (dataRequest) => {
    return await axios.put(`${apiRoutes.baseUrl}${apiRoutes.users}/${apiRoutes.firstLogin}`, dataRequest, setConfigurationRequest())
}