import { types } from "../types";

export const setIsAuthenticated = (isAuth) => ({
    type: types.set_is_authenticated,
    payload: {
        isAuth
    }
})

export const addUser = (user) => ({
    type: types.add_user,
    payload: {
        user,
    },
})

export const setUserWallet = (wallet) => ({
    type: types.set_user_wallet,
    payload: wallet,
});

export const reloadUserWallet = (reloadId) => ({
    type: types.reload_user_wallet,
    payload: reloadId,
});

export const addUserRol = (userRol) => ({
    type: types.add_rol,
    payload: {
        userRol,
    },
})

export const logout = () => (dispatch) => {
    dispatch({
        type: types.logout,
    });
};

export const reset = () => (dispatch) => {
    dispatch({
        type: types.reset,
    });
};

export const setSearchForm = (info) => ({
    type: types.set_search_form,
    payload: info,
});
