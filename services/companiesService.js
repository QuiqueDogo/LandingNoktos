import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setConfigurationRequest} from "../utils/requests";

export const getCompaniesOfUserRequest = async() =>{
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompany}`, setConfigurationRequest())
}