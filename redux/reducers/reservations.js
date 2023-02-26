import { types } from "../types";

const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    const { get_reservations } = types;

    switch (type) {
        case get_reservations:
            return {
                ...state,
                data: payload.reservations,
            };

        default:
            return state;
    }
}
