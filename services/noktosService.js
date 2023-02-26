import axios from "axios";
import { apiRoutes } from "../utils/apiRoutes";
import { setConfigurationRequest } from "../utils/requests";

export const getCatalogOfTokensRequest = async () =>
    await axios.get(
        `${apiRoutes.baseUrl}${apiRoutes.packageOfTokens}`,
        setConfigurationRequest()
    );

export const payTokensRequest = async (dataRequest) => {
    return await axios.post(
        `${apiRoutes.baseUrl}${apiRoutes.buy}${apiRoutes.tokens}/${apiRoutes.baseUsers}/${apiRoutes.cards}`,
        dataRequest,
        setConfigurationRequest()
    );
};

export const payTokensWithTransferRequest = async (dataRequest) => {
    return await axios.post(
        `${apiRoutes.baseUrl}${apiRoutes.buy}${apiRoutes.tokens}${apiRoutes.requestTransfer}`,
        dataRequest,
        setConfigurationRequest()
    );
};

export const attachTransferDocumentNoktosRequest = async (dataRequest) => {
    return await axios.post(
        `${apiRoutes.baseUrl}${apiRoutes.buy}${apiRoutes.tokens}${apiRoutes.payTransfer}`,
        dataRequest,
        setConfigurationRequest()
    );
};

export const sendApproveRequest = async (dataRequest) => {
    return await axios.post(
        `${apiRoutes.baseUrl}${apiRoutes.authorizationRequest}`,
        dataRequest,
        setConfigurationRequest()
    );
};
