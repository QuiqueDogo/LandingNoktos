import {types} from "../types";
import axios from "axios";
import {apiRoutes} from "../../utils/apiRoutes";
import {setConfigurationRequest} from "../../utils/requests";
import moment from "moment";

const {
    show_loader,
    hide_loader,
    get_membership,
    get_previous_balance,
    set_membership_balance,
    get_movements,
    get_movements_history
} = types;

export const setSelectedMembership = (membership) => {
    return {
        type: types.select_membership,
        payload: {
            membership,
        },
    };
};

export const setSelectedMembershipPackage = (membershipPackage) => {
    return {
        type: types.select_membership_package,
        payload: {
            membershipPackage,
        },
    };
};

export const setMembershipOfCompany = (membershipOfCompany) => {
    return {
        type: types.set_membership_of_company,
        payload: {
            membershipOfCompany,
        },
    };
};

export const setMembershipBalance = (membershipBalance) => {
    return {
        type: types.set_membership_balance,
        payload: {
            membershipBalance,
        },
    };
};

export const getMembership = (body) => (dispatch) => {
    dispatch({ type: show_loader });

    axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.membership}`,
            body,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({ type: hide_loader });
            dispatch({
                type: get_membership,
                payload: { membership: response.data.membresia },
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: hide_loader });
        });
};

export const getPrevBalance = (body) => (dispatch) => {
    dispatch({ type: show_loader });

    axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.prevBalanceAaccount}`,
            body,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({ type: hide_loader });
            dispatch({
                type: get_previous_balance,
                payload: { previousBalance: response.data.saldosToken, payCentauros: response.data.abonos_centauros},
            });
            // setPrevBalance(response.data.saldosToken);
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            console.log(error);
        });
};

export const getMembershipBalance = (body) => (dispatch) => {
    axios
        .post(
            `${apiRoutes.baseUrl}${apiRoutes.membership}${apiRoutes.balance}`,
            body,
            setConfigurationRequest()
        )
        .then((response) => {
            dispatch({
                type: set_membership_balance,
                payload: { membershipBalance: response.data.saldoMembresia },
            });
        })
        .catch((error) => {
            dispatch({ type: hide_loader });
            console.log(error);
        });
};

export const get_YYYY_MM_DD_format = (date) =>
    moment(date).format("YYYY-MM-DD");

const createDates = (date) => {
    let newDate = new Date();
    const day = parseInt(date.split("-")[date.split("-").length - 1]);
    newDate.setDate(day);
    newDate = get_YYYY_MM_DD_format(newDate);
    const todayOneMonthAgo = moment(newDate)
        .subtract(1, "months")
        .format("YYYY-MM-DD");
    return {
        newDate,
        todayOneMonthAgo,
    };
};

export const getMovements = (membershipBalance, selectedCompany, data) => async (
    dispatch
) => {
    if (membershipBalance.fecha !== undefined) {
        dispatch({ type: show_loader });
        const {eDate, sDate, hierarchy, mainTraveller} = data
        let dataRequest
        dataRequest = {
            compania_id: selectedCompany.id,
            fecha_inicio: moment(sDate).format("YYYY-MM-DD"),
            fecha_fin: moment(eDate).format("YYYY-MM-DD"),
            huesped_id: mainTraveller,
            jerarquia_id: hierarchy
        };

        try {
            const response = await axios.post(
                `${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.movements}`,
                dataRequest,
                setConfigurationRequest()
            );
            dispatch({ type: hide_loader });

            dispatch({
                type: get_movements,
                payload: {
                    payWithToken: response.data.pagosToken,
                    payMarketPlace: response.data.pagosMP,
                    buyTokens: response.data.compraTokens,
                    devolutions: response.data.devoluciones
                },
            });
        } catch (error) {
            dispatch({type: hide_loader});
            console.log("THIIIS IS THE ERROR", error);
        }
    }
};

export const getMovementsHistory = (selectedCompany, dates) => async (
    dispatch
) => {
    dispatch({type: show_loader});

    let dataRequest

    const {anio, mes} = dates
    console.log("Fechas", dates)
    dataRequest = {
        compania_id: selectedCompany.id,
        anio: anio,
        mes: mes,
    };

    try {
        const response = await axios.post(
            `${apiRoutes.baseUrl}${apiRoutes.baseCompanies}${apiRoutes.historical}${apiRoutes.movements}`,
            dataRequest,
            setConfigurationRequest()
        );
        dispatch({type: hide_loader});

        console.log(response.data)

        dispatch({
            type: get_movements_history,
            payload: {
                payWithToken: response.data.pagosToken,
                payMarketPlace: response.data.pagosMP,
                buyTokens: response.data.compraTokens,
                //TODO FALTAN DEVOLUCIONES
                //TODO CENTRO DE COSTOS
                devolutions: [],
                prevMembershipBalance: response.data.saldoMembresiaAnterior
            },
        });

    } catch (error) {
        dispatch({type: hide_loader});
        console.log("ERROR MEMBERSHIP ACTION", error.response);
    }

};
