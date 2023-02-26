import { types } from "../types";
import customers from "./customers";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import costCenters from "./costCenters";
import reservations from "./reservations";
import companyReducer from "./companyReducer";
import searchInfo from "./searchHotelReducer";
import packagesReducer from "./packagesReducer";
import membershipReducer from "./membershipReducer";
import applicationReducer from "./aplicationReducer";
import companyStructureReducer from "./companyStructureReducer";
import promotionReducer from "./promotionReducer";

const appReducer = combineReducers({
    /* your app’s top-level reducers */
    customers,
    costCenters,
    reservations,
    user: userReducer,
    applicationReducer,
    searchInfo: searchInfo,
    company: companyReducer,
    membership: membershipReducer,
    noktosPackages: packagesReducer,
    companyStructure: companyStructureReducer,
    promotion: promotionReducer
});

const rootReducer = (state, action) => {
    if (action.type === types.logout || action.type === types.reset) return appReducer(undefined, action);
    return appReducer(state, action);
};

export default rootReducer;
