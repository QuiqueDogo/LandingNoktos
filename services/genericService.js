import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setConfigurationRequest} from "../utils/requests";

export const getAddressInfoRequest = async(postalCode) =>{
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.infoCP}/${postalCode}`, setConfigurationRequest())
}