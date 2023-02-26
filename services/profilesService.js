import axios from "axios";
import {apiRoutes} from '../utils/apiRoutes'
import {setConfigurationRequest} from "../utils/requests";

export const getProfilesRequest = async() =>{
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.roles}`, setConfigurationRequest())
}

export const getDetailProfileRequest = async(idRol) =>{
    const dataRequest = {
        'rol_id': idRol
    }
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.detailRole}`, dataRequest, setConfigurationRequest())
}

export const createProfileRequest = async(dataRequest) =>{
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.createRole}`, dataRequest, setConfigurationRequest())
}

export const updateProfileRequest = async(dataRequest) =>{
    return await axios.put(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.updateRole}`, dataRequest, setConfigurationRequest())
}

export const deleteProfileRequest = async(idRol) =>{
    return await axios.delete(`${apiRoutes.baseUrl}${apiRoutes.baseAdmin}${apiRoutes.deleteRole}/${idRol}`, setConfigurationRequest())
}

export const getPermitsRequest = async() =>{
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.permits}`, setConfigurationRequest())
}