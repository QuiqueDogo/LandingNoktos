import {types} from '../types';

const initialState = {
    travellers: [],
    guests: [],
    userPermissions: [],
};

const {
    get_travellers,
    get_guests,
    create_traveller,
    get_permissions,
    update_traveller,
    update_guest,
    create_guest,
    get_cost_centers_by_user_id_and_company_id,
    set_update_cost_centers,
    update_cost_centers,
    set_companies_in_guest,
} = types;

export default function (state = initialState, action) {
    const { type, payload } = action;

    const setItemsWithUpdatedItem = (items, newItem) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === newItem.id) {
                items[i] = newItem;
            }
        }
        return items;
    };

    switch (type) {
        case get_travellers:
            return {...state, travellers: payload.travellers};
        case create_traveller:
            return {
                ...state,
                travellers: [...state.travellers, payload.newTraveller],
            };
        case create_guest:
            return {
                ...state,
                guests: [...state.guests, payload.newGuest],
            };
        case get_guests:
            return { ...state, guests: payload.guests };
        case get_permissions:
            return { ...state, userPermissions: payload.permissions };
        case update_traveller:
            return {
                ...state,
                travellers: setItemsWithUpdatedItem(
                    state.travellers,
                    payload.traveller
                ),
            };
        case update_guest:
            return {
                ...state,
                guests: setItemsWithUpdatedItem(state.guests, payload.guest),
            };
        case get_cost_centers_by_user_id_and_company_id:
            const { userId, costCenters } = payload;

            const setCostCentersToCurrentTraveller = (traveller) => {
                if (traveller.id === userId) {
                    traveller.costCenters = costCenters;
                    return traveller;
                } else {
                    return traveller;
                }
            };

            return {
                ...state,
                travellers: state.travellers.map((traveller) =>
                    setCostCentersToCurrentTraveller(traveller)
                ),
            };
        case set_update_cost_centers:
            return {
                ...state,
                travellers: state.travellers.map((traveller) => {
                    if (traveller.id === payload.userId) {
                        if (payload.costCenter.isChecked) {
                            traveller.costCenters.push(payload.costCenter);
                        } else {
                            traveller.costCenters = traveller.costCenters.filter(
                                (costCenter) =>
                                    costCenter.id !== payload.costCenter.id
                            );
                        }
                        return traveller;
                    } else {
                        return traveller;
                    }
                }),
            };
        case set_companies_in_guest:
            return {
                ...state,
                guests: state.guests.map((guest) => {
                    if (guest.id === payload.guestId) {
                        guest.companies = payload.companies;
                        return guest;
                    } else {
                        return guest;
                    }
                }),
            };
        default:
            return state;
    }
}
