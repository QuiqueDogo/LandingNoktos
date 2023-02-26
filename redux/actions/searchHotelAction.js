import { types } from "../types";

export const setSearchInfo = (searchInfo) => {
    return {
        type: types.set_search_info,
        payload: {
            searchInfo,
        },
    };
};

export const setDetailHotel = (detailHotel) => {
    return {
        type: types.set_detail_hotel,
        payload: {
            detailHotel,
        },
    };
};

export const setHotelsData = (dataHotels) => ({
    type: types.set_hotels_data,
    payload: dataHotels,
});

export const setCurrentHotelSelected = (infoHotel) => ({
    type: types.set_current_hotel_selected,
    payload: {
        infoHotel,
    },
});

export const setReservationId = (reservationId) => ({
    type: types.set_reservation_id,
    payload: reservationId,
});

export const setReservationToken = (reservationToken) => ({
    type: types.set_reservation_token,
    payload: reservationToken,
});

export const setMainTraveller = (info) => ({
    type: types.set_main_traveller,
    payload: info,
});

export const setNoktosPolitic = (info) => ({
    type: types.set_noktos_politic,
    payload: info,
});
