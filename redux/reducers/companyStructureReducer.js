import { types } from "../types";

const initialState = {
    structureData: [],
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    const { get_company_structure } = types;

    switch (type) {
        case get_company_structure:
            return {
                ...state,
                structureData: payload.companyStructureData,
            };

        default:
            return state;
    }
}
