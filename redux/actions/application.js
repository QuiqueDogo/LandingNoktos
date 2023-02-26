import { types } from "../types";

export const showLoader = () => dispatch => {
    dispatch({
        type: "SHOW_LOADER"
    })
}

export const hideLoader = () => dispatch => {
    dispatch({
        type: "HIDE_LOADER"
    })
}

export const showDrawer = () => ({
    type: types.show_drawer,
});

export const hideDrawer = () => ({
    type: types.hide_drawer,
});

export const setOptionMenu = (option) => ({
    type: types.set_option_menu,
    payload: option,
});

export const changeOverlayStatus = (modal_login_status) => {
    return {
        type: types.change_modal_login_status,
        payload: {
            modal_login_status,
        },
    };
};

export const setPackagePriceSelected = (packageId) => ({
    type: types.set_package_price_selected,
    payload: packageId
})

export const setHistorialPages = (asPath) => ({
    type: types.set_historial_pages,
    payload: asPath
})

export const clearHistorialPages = () => ({
    type: types.clear_historial_pages
})