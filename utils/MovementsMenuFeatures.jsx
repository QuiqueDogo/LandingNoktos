import {blueBorder} from "./DataTableStyles";
import * as moment from "moment";
import React from "react";
import {formatMoney} from "./formatMoney";

export const conditionalRowStyles = [
    {
        when: row => row,
        style: blueBorder
    },
];

export const columnsMarketPlace = [
    {
        name: 'Reservante',
        cell: row => ((row.reservante !== undefined) ? `${row.reservante.name} ${row.reservante.apellido_paterno} ${(row.reservante.apellido_materno !== null) ? row.reservante.apellido_materno : ""}` : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Fecha',
        cell: row => (moment(row.created_at).format("YYYY-MM-DD")),
        sortable: true,
        center: true,
        width: "10%"
    },
    {
        name: 'Hora',
        cell: row => (moment(row.created_at).format("HH:mm:ss")),
        sortable: true,
        center: true,
        width: "10%"
    },
    {
        name: 'Hotel',
        cell: row => ((row.host !== undefined) ? row.host.nombre : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Viajero',
        cell: row => ((row.viajero !== undefined) ? `${row.viajero.nombre} ${row.viajero.apellido_paterno} ${(row.viajero.apellido_materno !== null) ? row.viajero.apellido_materno : ""}` : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Código reservación',
        cell: row => ((row.reservacion !== undefined) ? `${row.reservacion.codigo_reservacion}/ Hotel: ${(row.reservacion.numero_reservacion_Q !== null) ? row.reservacion.numero_reservacion_Q : row.reservacion.numero_reservacion_QQ}` : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Centro de costos',
        cell: row => ((row.centro_costos !== null && row.centro_costos !== undefined) ? row.centro_costos.nombre : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Tarjeta',
        cell: row => (`${row.last_4} - ${row.brand}`),
        sortable: true,
        center: true
    },
    {
        name: 'Total',
        cell: row => (formatMoney(row.total)),
        sortable: true,
        center: true
    },
    {
        name: 'Estatus',
        cell: row => ((row.reservacion !== undefined) ? (row.reservacion.estado === 2) ? 'Confirmada' : 'Cancelada' : ''),
        sortable: true,
        center: true
    },

]

export const columnsPayWithTokens = [
    {
        name: 'Fecha',
        cell: row => (moment(row.created_at).format("YYYY-MM-DD")),
        sortable: true,
        center: true,
        width: "8%"
    },
    {
        name: 'Hora',
        cell: row => (moment(row.created_at).format("HH:mm:ss")),
        sortable: true,
        center: true,
        width: "8%"
    },
    /*
    {
        name: 'Fecha Original',
        cell: row => row.reservacion.estado === 4 ? ( moment(row.reservacion.created_at_original).format("YYYY-MM-DD") ): "-",
        sortable: true,
        center: true,
        width: "8%"
    },
     */
    {
        name: 'Estado',
        cell: (row) =>
            (row.reservacion !== undefined) ?
                row.reservacion.estado === 2 ? (
                    <div className="statusContainer statusContainer--confirmed">
                        <span/>
                        <p>Confirmado</p>
                    </div>
                ) : row.reservacion.estado === 4 ? (
                    <div className="statusContainer statusContainer--updated">
                        <span/>
                        <p>Ajustado</p>
                    </div>
                ) : row.reservacion.estado === 3 ? (
                    <div className="statusContainer statusContainer--cancelled">
                        <span/>
                        <p>Cancelado</p>
                    </div>
                ): "-" : "-",
        sortable: true,
        center: true,
        width: "8%"
    },
    {
        name: 'Código reservación',
        cell: row => ((row.reservacion !== undefined) ? `${row.reservacion.codigo_reservacion}/ Hotel: ${(row.reservacion.numero_reservacion_Q !== null) ? row.reservacion.numero_reservacion_Q : row.reservacion.numero_reservacion_QQ}` : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Viajero',
        cell: row => ((row.viajero !== undefined && row.viajero !== null) ? `${row.viajero.nombre} ${row.viajero.apellido_paterno} ${(row.viajero.apellido_materno !== null) ? row.viajero.apellido_materno : ""}` : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Reservante',
        cell: row => ((row.reservante !== undefined) ? `${row.reservante.name} ${row.reservante.apellido_paterno} ${(row.reservante.apellido_materno !== null) ? row.reservante.apellido_materno : ""}` : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Centro de costos',
        cell: row => ((row.centro_costos !== null && row.centro_costos !== undefined) ? row.centro_costos.nombre : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Hotel',
        cell: row => ((row.host !== undefined) ? row.host.nombre : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Check in',
        cell: row => ((row.reservacion !== undefined) ? `${row.reservacion.check_in}` : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Check out',
        cell: row => ((row.reservacion !== undefined) ? `${row.reservacion.check_out}` : ''),
        sortable: true,
        center: true
    },
    {
        name: 'Saldo inicial(N)',
        selector: 'token_inicial',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Cargo(N)',
        selector: 'token_gasto',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Saldo final(N)',
        selector: 'token_fin',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Saldo inicial(C)',
        selector: 'noches_gratis_inicial',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Cargo(C)',
        selector: 'noches_gratis_gasto',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Saldo final(C)',
        selector: 'noches_gratis_fin',
        sortable: true,
        center: true,
        width: "5%"
    }
]

export const columnsBuyTokens = [
    {
        name: 'Fecha',
        cell: row => (moment(row.created_at).format("YYYY-MM-DD")),
        sortable: true,
        center: true,
        width: "10%"
    },
    {
        name: 'Hora',
        cell: row => (moment(row.created_at).format("HH:mm:ss")),
        sortable: true,
        center: true,
        width: "10%"
    },
    {
        name: 'Tarjeta',
        cell: row => row.last_4 !== null ? `${row.last_4} - ${row.brand}` : '-',
        sortable: true,
        center: true
    },
    {
        name: 'Total',
        cell: row => (formatMoney(row.total)),
        sortable: true,
        center: true,
        width: "20%"
    },
    {
        name: 'Saldo inicial',
        selector: 'token_inicial',
        sortable: true,
        center: true,
        width: "10%"
    },
    {
        name: 'Abono',
        selector: 'token_adquirido',
        sortable: true,
        center: true,
        width: "10%"
    },
    {
        name: 'Saldo final',
        selector: 'token_fin',
        sortable: true,
        center: true,
        width: "10%"
    }
]

export const columnsMovements = [
    {
        name: 'Fecha',
        cell: row => ( moment(row.fecha).format("YYYY-MM-DD") ),
        sortable: true,
        center: true,
        width: "8%"
    },
    {
        name: 'Hora',
        cell: row => ( moment(row.fecha).format("HH:mm:ss") ),
        sortable: true,
        center: true,
        width: "6.5%"
    },
    /*
    {
        name: 'Fecha Original',
        cell: row => row.estado === 4 ? ( moment(row.created_at_original).format("YYYY-MM-DD") ): "-",
        sortable: true,
        center: true,
        width: "6.5%%"
    },
     */
    {
        name: 'Estado',
        cell: (row) =>
            row.estado === 2 ? (
                <div className="statusContainer statusContainer--confirmed">
                    <span/>
                    <p>Confirmado</p>
                </div>
            ) : row.estado === 4 ? (
                <div className="statusContainer statusContainer--updated">
                    <span/>
                    <p>Ajustado</p>
                </div>
            ) : row.estado === 3 ? (
                <div className="statusContainer statusContainer--cancelled">
                    <span/>
                    <p>Cancelado</p>
                </div>
            ): "-",
        sortable: true,
        center: true,
        width: "8%"
    },
    {
        name: 'Descripción',
        cell: row => (<p>{row.descripcion}</p>),
        sortable: true,
        center: true,
        width: "15%"
    },
    {
        name: 'Viajero',
        cell: row => ((row.viajero !== undefined && row.viajero !== null) ? `${row.viajero[0].name} ${row.viajero[0].apellido_paterno} ${(row.viajero[0].apellido_materno !== null) ? row.viajero[0].apellido_materno : ""}` : ''),
        sortable: true,
        center: true,
        width: "6.5%"
    },
    {
        name: 'Reservante',
        cell: row => ((row.reservante !== undefined) ? `${row.reservante.name} ${row.reservante.apellido_paterno} ${(row.reservante.apellido_materno !== null) ? row.reservante.apellido_materno : ""}` : ''),
        sortable: true,
        center: true,
        width: "6%"
    },
/*    {
        name: 'Centro de costos',
        cell: row => ((row.centro_costos !== null && row.centro_costos !== undefined) ? row.centro_costos.nombre : ''),
        sortable: true,
        center: true,
        width: "10%"
    },*/
    {
        name: 'Total',
        cell: row => ((row.total !== null && row.total !== "" ) ? formatMoney(row.total) : "-"),
        sortable: true,
        center: true,
        width: "10%"
    },
    {
        name: 'Saldo inicial(T)',
        selector: 'token_inicial',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Cargo(T)',
        selector: 'token_gasto',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Abono(T)',
        selector: 'token_adquirido',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Saldo final(T)',
        selector: 'token_fin',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Saldo inicial(C)',
        selector: 'noches_gratis_inicial',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Cargo(C)',
        selector: 'noches_gratis_gasto',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Abono(C)',
        selector: 'noches_gratis_adquirido',
        sortable: true,
        center: true,
        width: "5%"
    },
    {
        name: 'Saldo final(C)',
        selector: 'noches_gratis_fin',
        sortable: true,
        center: true,
        width: "5%"
    }
]
