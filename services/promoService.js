import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setConfigurationRequest} from "../utils/requests";


export const checkPromocodeRequest = async (dataRequest) => {
    return await axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.baseCompany}/${apiRoutes.validatePromo}`,
            dataRequest,
            setConfigurationRequest()
        )
}

