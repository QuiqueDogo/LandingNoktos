import { types } from "../types";

let initState = {
    company: {
        id: 0,
        nombre: "",
        rfc: "",
        razon_social: "",
        estatus_registro: 0,
        id_membresia: 0,
        nombre_membresia: "",
    },
    companies: [
        {
            id: 0,
            nombre: "",
            rfc: "",
            razon_social: "",
            estatus_registro: 0,
            id_membresia: 0,
            nombre_membresia: "",
        },
    ],
    info: {},
    addressInfo: {},
    cp_id: null,
};

export default (state = initState, action) => {
    const {
        add_company,
        add_companies,
        get_company_by_id,
        set_address_info,
    } = types;
    const { type, payload } = action;
    switch (type) {
        case types.add_company:
            return {
                ...state,
                company: payload.company,
            };
        case get_company_by_id:
            return { ...state, info: payload.companyInfo };

        case set_address_info:
            return {
                ...state,
                addressInfo: payload.addressInfo,
                cp_id: payload.addressInfo.colonia[0].cp_id,
            };

        case types.add_companies:
            return {
                ...state,
                companies: payload.companies,
            };

        default:
            return state;
    }
};
