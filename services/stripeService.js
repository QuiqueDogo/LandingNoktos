import axios from "axios";
import { apiRoutes } from "../utils/apiRoutes";
import { setConfigurationRequest } from "../utils/requests";

export const getStripeUserRequest = async () =>
    await axios.post(
        `${apiRoutes.baseUrl}${apiRoutes.baseStripe}${apiRoutes.baseUsers}`,
        null,
        setConfigurationRequest()
    );

export const getCardsOfUserRequest = async () =>
    await axios.get(
        `${apiRoutes.baseUrl}${apiRoutes.baseStripe}${apiRoutes.cards}`,
        setConfigurationRequest()
    );

export const saveCardRequest = async (dataRequest) => {
    return await axios.post(
        `${apiRoutes.baseUrl}${apiRoutes.baseStripe}${apiRoutes.cards}`,
        dataRequest,
        setConfigurationRequest()
    );
};
