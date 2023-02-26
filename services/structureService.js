import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setConfigurationRequest} from "../utils/requests";

export const getStructureOfCompanyRequest = async(companyId) =>{
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.getStructureOfCompany}${companyId}`, setConfigurationRequest())
}

export const createStructureRequest = async(dataRequest) =>{
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.createStructureOfCompany}`, dataRequest, setConfigurationRequest())
}

export const updateStructureRequest = async(dataRequest) =>{
    return await axios.put(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.updateStructureOfCompany}`, dataRequest, setConfigurationRequest())
}

export const deleteStructureRequest = async(structureId) =>{
    return await axios.delete(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.deleteStructureOfCompany}/${structureId}`, setConfigurationRequest())
}

export const checkIfStructureHasAuthorizingRequest = async(structureId) =>{
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.checkIfIsAuthorized}/${structureId}`, setConfigurationRequest())
}