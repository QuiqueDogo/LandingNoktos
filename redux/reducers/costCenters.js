import { types } from "../types";
const { save_cost_center, get_cost_centers, update_center_cost } = types;

const initialState = {
    data: [],
};

const setItemsWithUpdatedItem = (items, newItem) => {
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
        if (items[i].id === newItem.id) {
            items[i] = newItem;
        }
    }
    console.log(items);
    return items;
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case save_cost_center:
            return { data: [...state.data, payload.newCostCenter] };
        case get_cost_centers:
            return { ...state, data: payload.costCenters };

        case update_center_cost:
            return {
                ...state,
                data: setItemsWithUpdatedItem(state.data, payload.centerCost),
            };
        default:
            return state;
    }
}
