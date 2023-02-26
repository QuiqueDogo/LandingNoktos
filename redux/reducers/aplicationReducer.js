import { types } from "../types";

const initialState = {
    data: {},
    historial: [],
    optionMenu: 0,
    loading: false,
    prevPath: null,
    showDrawer: false,
    pricePackageSelected: 1,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.show_loader:
            return { ...state, loading: true };

        case types.hide_loader:
            return { ...state, loading: false };

        case types.show_drawer:
            return { ...state, showDrawer: true };

        case types.hide_drawer:
            return { ...state, showDrawer: false };

        case types.set_option_menu:
            return { ...state, optionMenu: payload };

        case types.change_modal_login_status:
            return {
                ...state,
                modal_login_status: payload.modal_login_status,
            };
        case types.set_package_price_selected:
            return {
                ...state,
                pricePackageSelected: payload,
            };
        case types.set_historial_pages:
            const { historial } = state
            let newHistorial = historial.slice()
            newHistorial.push(payload)
            if (newHistorial.length > 10) newHistorial.shift()
            return {
                ...state,
                historial: newHistorial,
                prevPath: newHistorial[newHistorial.length - 2] ?? null,
            };
        case types.clear_historial_pages:
            return {
                ...state,
                historial: []
            }

        default:
            return state;
    }
};
