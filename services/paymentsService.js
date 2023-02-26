import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setConfigurationRequest} from "../utils/requests";

export const getPaymentsRequest = async (dataRequest) => {
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.purchaseOrders}`,dataRequest, setConfigurationRequest())
}