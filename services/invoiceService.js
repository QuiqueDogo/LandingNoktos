import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setConfigurationRequest} from "../utils/requests";

export const getInvoicesRequest = async (companyId) => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.invoices}/${companyId}`, setConfigurationRequest())
}

export const generateInvoiceRequest = async (dataRequest) => {
    return await axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.invoices}/${apiRoutes.requestInvoice}`, dataRequest, setConfigurationRequest())
}

export const getCFDIUseRequest = async (dataRequest) => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.useCFDI}`, setConfigurationRequest())
}