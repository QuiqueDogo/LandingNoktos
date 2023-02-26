import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setConfigurationRequest} from "../utils/requests";

export const registerGbtaLeadRequest = async (dataRequest) => {
    return await axios.post(`${apiRoutes.baseUrl}costumers/create`, dataRequest, setConfigurationRequest())
}