import { types } from "../types";

let initState = {
    politica: "",
    huesped_id: "",
    destino_id: "",
    tipo_habitacion_id: "",
    check_in: "",
    check_out: "",
    compania_id: "",
    idHotel: "",
    detailHotel: {},
    infoHotel: {},
    hotelsData: [],
    mainTraveller: null,
    noktosPolitic: false,
    reservationId: null,
    reservationToken: null,
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.set_search_info:
            return {
                ...state,
                [action.payload.searchInfo.field]:
                    action.payload.searchInfo.value,
            };
        case types.set_detail_hotel:
            return {
                ...state,
                detailHotel: action.payload.detailHotel,
            };
        case types.set_current_hotel_selected:
            return {
                ...state,
                infoHotel: action.payload.infoHotel,
            };
        case types.set_hotels_data:
            return {
                ...state,
                hotelsData: action.payload,
            };

        case types.set_main_traveller:
            return {
                ...state,
                mainTraveller: action.payload,
            };

        case types.set_noktos_politic:
            return {
                ...state,
                noktosPolitic: action.payload,
            };
        case types.set_reservation_id:
            return {
                ...state,
                reservationId: action.payload,
            };
        case types.set_reservation_token:
            return {
                ...state,
                reservationToken: action.payload,
            };

        default:
            return state;
    }
};
