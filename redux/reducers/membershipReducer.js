import {types} from "../types";
import * as moment from "moment";
import {compareDates} from "../../utils/utils";

let initState = {
    membershipPackage: {
        id: 2,
        nombre: "",
        costo_mensual: "",
        costo_anual: "",
        noches_gratis: "",
        numero_tokens: "",
        descuento: "",
        valor_token: "",
        es_activo: "",
        created_at: "",
        updated_at: "",
    },
    membership: {
        id: 1,
        catalogo_membresia: [],
    },
    membershipBalance: {},
    membershipOfCompany: {},
    data: {},
    previousBalance: {},
    payWithToken: [],
    payMarketPlace: [],
    buyTokens: [],
    totalMarketPlace: 0,
    totalBuyTokens: 0,
    movementsTokens: [],
    totalUseTokens: 0,
    totalBuyCentauros: 0,
    totalUseCentauros: 0,
    initialBalanceNoktos: 0,
    initialBalanceCentauros: 0,
    finalBalanceNoktos: 0,
    finalBalanceCentauros: 0,
    totalBuyTokensMoney:0
};

const { get_membership, get_previous_balance, get_movements, get_movements_history } = types;

const createMovementsFromPayWithTokenItems = (payWithTokenItems) => {
    const movements = [];
    for (let pagoToken of payWithTokenItems) {
        let movement = {
            fecha: pagoToken.created_at,
            estado: pagoToken.reservacion.estado,
            token_inicial: pagoToken.token_inicial,
            token_gasto: pagoToken.token_gasto,
            token_adquirido: pagoToken.token_ajuste > 0 ? `*${pagoToken.token_ajuste}` : '-',
            token_fin: pagoToken.token_fin,
            noches_gratis_inicial: pagoToken.noches_gratis_inicial,
            noches_gratis_gasto:pagoToken.noches_gratis_gasto,
            noches_gratis_fin: pagoToken.noches_gratis_fin,
            noches_gratis_adquirido: pagoToken.noches_gratis_ajuste > 0 ?  `*${ pagoToken.noches_gratis_ajuste}` : '-',
            created_at_original: pagoToken.reservacion.created_at_original,
            total: '',
            viajero: pagoToken.viajero,
            reservante: pagoToken.reservante,
            centro_costos: pagoToken.centro_costos,
            descripcion: `Reservación en el hotel: ${
                pagoToken.host !== undefined
                    ? pagoToken.host.nombre
                    : ''
            } con número de reservación: ${
                pagoToken.reservacion !== undefined
                    ? pagoToken.reservacion
                        .codigo_reservacion
                    : ''
            }`,
        };
        movements.push(movement);
    }
    return movements;
};

const createMovementsFromBuyTokensItems = (buyTokensItems) => {
    const movements = [];

    for (let compraToken of buyTokensItems) {
        let movement = {
            fecha: compraToken.created_at,
            token_inicial: compraToken.token_inicial,
            token_gasto: '',
            token_adquirido: compraToken.token_adquirido,
            token_fin: compraToken.token_fin,
            noches_gratis_inicial: '',
            noches_gratis_gasto: '',
            noches_gratis_fin: '',
            noches_gratis_adquirido: '',
            total: compraToken.total,
            descripcion: (compraToken.brand !== null && compraToken.last_4 !== null)? `Adquisición de noktos en la plataforma con la tarjeta ${compraToken.brand} terminación  ${compraToken.last_4} ` : `Adquisición de noktos en la plataforma por medio de transferencia electrónica `,
        };
        movements.push(movement);
    }

    return movements;
};

const createMovementsFromDevolutionItems = (devolutionItems) =>{
    const movements = [];

    for(let devolucionTokens of devolutionItems){
        let movement = {
            fecha: devolucionTokens.updated_at,
            token_inicial: devolucionTokens.token_inicial,
            token_gasto: "",
            token_adquirido: devolucionTokens.token_gasto,
            token_fin: devolucionTokens.token_fin,
            total: '',
            descripcion: `Devolución de noktos `,
        };
        movements.push(movement);
    }

    return movements;
}

function compareFromDates(a, b) {
    const dateA = moment(a.fecha).format("YYYY-MM-DD");
    const dateB = moment(b.fecha).format("YYYY-MM-DD");

    let comparison = 0;
    if (dateA > dateB) {
        comparison = 1;
    } else if (dateA < dateB) {
        comparison = -1;
    }
    return comparison;
}

const sumTotal = (items) =>
    items.reduce((a, { total }) => a + parseInt(total), 0);

const sumUseTokens = (items) =>
    items.reduce(
        (a, { token_gasto }) => a + parseInt(token_gasto),
        0
    );

const sumDevolutionTokens = (items) => items.reduce(
    (a, { token_ajuste }) => a + parseInt(token_ajuste),
    0
);

const sumBuyTokensMoney = (items) =>
    items.reduce(
        (a, { total }) => a + parseFloat(total),
        0
    );

const sumBuyTokens = (items) =>
    items.reduce(
        (a, { token_adquirido }) => a + parseInt(token_adquirido),
        0
    );

const sumBuyCentauros = (items) =>
    items.reduce(
        (a, { noches_gratis_gasto }) => a + parseInt(noches_gratis_gasto),
        0
    );

const sumUseCentauros = (items) =>
    items.reduce(
        (a, { token_gasto }) => a + parseInt(token_gasto),
        0
    );


export default (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.select_membership:
            return {
                ...state,
                membership: payload.membership,
            };
        case types.select_membership_package:
            return {
                ...state,
                membershipPackage: payload.membershipPackage,
            };

        case types.set_membership_balance:
            return {
                ...state,
                membershipBalance: payload.membershipBalance,
            };

        case types.set_membership_of_company:
            return {
                ...state,
                membershipOfCompany: payload.membershipOfCompany,
            };
        case get_membership:
            return {
                ...state,
                data: payload.membership,
            };
        case get_previous_balance:
            return {
                ...state,
                previousBalance: payload.previousBalance,
                totalBuyCentauros: payload.payCentauros,
            };
        case get_movements:
            let mergedArrayOfBuysAndSell = [...payload.payWithToken, ...payload.buyTokens]

            const initialBalanceNoktos = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]?.token_inicial
            const initialBalanceCentauros = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]?.noches_gratis_inicial !== undefined ? mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]?.noches_gratis_inicial : mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]?.noches_inicial

            const finalBalanceNoktos = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]?.token_fin
            const finalBalanceCentauros = mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]?.noches_gratis_fin !== undefined ? mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]?.noches_gratis_fin : mergedArrayOfBuysAndSell[mergedArrayOfBuysAndSell.length - 1]?.noches_fin

            let movements = [
                ...createMovementsFromPayWithTokenItems(payload.payWithToken),
                ...createMovementsFromBuyTokensItems(payload.buyTokens),
                ...createMovementsFromDevolutionItems(payload.devolutions)
            ];

            movements.sort(compareDates)

            return {
                ...state,
                payWithToken: payload.payWithToken,
                payMarketPlace: payload.payMarketPlace,
                buyTokens: payload.buyTokens,
                movementsTokens: movements,
                totalMarketPlace: sumTotal(payload.payMarketPlace),
                totalBuyTokens: sumBuyTokens(payload.buyTokens),
                totalBuyTokensMoney: sumBuyTokensMoney(payload.buyTokens),
                totalUseTokens: (sumUseTokens(payload.payWithToken) - sumDevolutionTokens(payload.payWithToken)),
                totalUseCentauros: sumBuyCentauros(payload.payWithToken),
                initialBalanceNoktos: initialBalanceNoktos,
                initialBalanceCentauros: initialBalanceCentauros,
                finalBalanceNoktos: finalBalanceNoktos,
                finalBalanceCentauros: finalBalanceCentauros
            };

        case get_movements_history:

            let movementsHistory = [
                ...createMovementsFromPayWithTokenItems(payload.payWithToken),
                ...createMovementsFromBuyTokensItems(payload.buyTokens),
                ...createMovementsFromDevolutionItems(payload.devolutions)
            ];

            movementsHistory.sort(compareDates)

            return {
                ...state,
                payWithToken: payload.payWithToken,
                payMarketPlace: payload.payMarketPlace,
                buyTokens: payload.buyTokens,
                totalMarketPlace: sumTotal(payload.payMarketPlace),
                totalBuyTokens: sumBuyTokens(payload.buyTokens),
                movementsTokens: movementsHistory,
                totalUseTokens: sumUseTokens(payload.payWithToken),
                previousBalance: {
                    token_inicial: payload.prevMembershipBalance.saldo_token,
                    token_final : payload.prevMembershipBalance.saldo_token_inicial !== null ? payload.prevMembershipBalance.saldo_token_inicial : 0,
                    inicialCentauros: payload.prevMembershipBalance.saldo_noches_gratis,
                    finalCentauros : payload.prevMembershipBalance.saldo_noches_gratis_inicial !== null ? payload.prevMembershipBalance.saldo_noches_gratis_inicial : 0,
                },
                membershipBalance: {
                    ...initState.membershipBalance,
                    saldo_token: payload.prevMembershipBalance.saldo_token
                },
                totalUseCentauros: sumBuyCentauros(payload.payWithToken),

            };

        default:
            return state;
    }
};
