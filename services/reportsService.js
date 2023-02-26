import axios from "axios";
import {apiRoutes} from '../utils/apiRoutes'
import {setConfigurationRequest} from "../utils/requests";

export const getExpenses = (idExpense) => {
    const body =  {'compra_token_id' : idExpense}
    return axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.getExpenseTokens}`, body, setConfigurationRequest())
}

export const getAccountStatusDocument = (dataRequest) => {
    return axios.post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.statementAccountDocument}`, dataRequest, setConfigurationRequest())
}