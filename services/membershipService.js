import axios from "axios";
import {apiRoutes} from "../utils/apiRoutes";
import {setBasicConfigurationRequest, setConfigurationRequest} from "../utils/requests";


export const getPackageBalanceRequest = async (dataRequest) => {
    return await axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.membership}${apiRoutes.balance}`,
            dataRequest,
            setConfigurationRequest()
        )
}

export const getMembershipOfCompanyRequest = async (dataRequest) => {
    return await axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.membership}`,
            dataRequest,
            setConfigurationRequest()
        )
}

export const payMembershipWithCardRequest = async (dataRequest) => {
    return await axios
        .post(`${apiRoutes.baseUrl}${apiRoutes.baseCompanies}/${apiRoutes.membership}/${apiRoutes.pay}`,
            dataRequest,
            setConfigurationRequest()
        )
}

export const payMembershipWithTransferRequest = async (dataRequest) => {
    return await axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.buy}${apiRoutes.membership}${apiRoutes.requestTransfer}`,
            dataRequest,
            setConfigurationRequest()
        )
}

export const attachTransferDocumentMembershipRequest = async (dataRequest) => {
    return await axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.buy}${apiRoutes.membership}${apiRoutes.payTransfer}`,
            dataRequest,
            setConfigurationRequest()
        )
}

export const getCataloOfMembership = async () => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.suscriptions}${apiRoutes.memberships}`, setConfigurationRequest())
}

export const getBenefitsCatalog = async () => {
    return await axios.get(`${apiRoutes.baseUrl}${apiRoutes.benefits}`, setBasicConfigurationRequest())
}
