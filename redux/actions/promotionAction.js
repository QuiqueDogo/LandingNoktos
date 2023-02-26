import {types} from "../types";

export const setPromotion = (promotion) => async (dispatch) => {
    const {set_promotion_data} = types
    dispatch({
        type: set_promotion_data,
        payload: {
            promotion
        },
    });
};