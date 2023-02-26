import { types } from "../types";

let initState = {
    rol: {},
    user: {},
    searchInfo: {},
    userWallet: {},
    reloadUserWallet: "",
    isAuthenticated: false,
};

export default (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.set_is_authenticated:
            return {
                ...state,
                isAuthenticated: payload.isAuth
            }

        case types.add_user:
            return {
                ...state,
                user: payload.user,
            };

        case types.add_rol:
            return {
                ...state,
                rol: payload.userRol,
            };

        case types.logout:
            return initState;

        case types.set_search_form:
            return {
                ...state,
                searchInfo: payload,
            };

        case types.set_user_wallet:
            return {
                ...state,
                userWallet: payload,
            };

        case types.reload_user_wallet:
            return {
                ...state,
                reloadUserWallet: payload,
            };

        default:
            return state;
    }
};
