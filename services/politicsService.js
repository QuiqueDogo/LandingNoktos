import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setConfigurationRequest} from "../utils/requests";

export const getPoliticsCatalogRequest = async(idPolitic) =>{
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.politics}/${idPolitic}`, setConfigurationRequest())
}

export const saveNoktosUsesRequest = async(arrayOfUseNoktos, structureId) =>{
    const dataRequest = {
        jerarquia_id: structureId,
        policies_array : arrayOfUseNoktos
    }
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.politics}/${apiRoutes.useNoktos}`, dataRequest, setConfigurationRequest())
}



export const getUseOfNoktosFatherRequest = async (fatherId) => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.politics}/${apiRoutes.useNoktosByFather}/${fatherId}`, setConfigurationRequest())
}