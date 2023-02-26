import { types } from "../types";

const initialState = {
    promotion: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    const {set_promotion_data} = types
    switch (type) {
        case set_promotion_data:
            console.log("payload", payload.promotion)
            return {
                ...state,
                promotion: payload.promotion,
            }
        default:
            return state;
    }
}