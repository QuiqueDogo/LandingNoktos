import moment from "moment";

export const formatMoney = (total) => {
    let integerNumber = total.substring(0, total.length - 2);
    let pointNumber = total.substring(total.length - 2, total.length);
    let totalFormatted = `${integerNumber}.${pointNumber}`;

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(parseFloat(totalFormatted));
};

export const columns = [
    {
        name: "Estatus",
        cell: (row) =>
            row.estado === 2 ? (
                <div className="statusContainer statusContainer--confirmed">
                    <span />
                    <p>Confirmado</p>
                </div>
            ) : row.estado === 4 ? (
                <div className="statusContainer statusContainer--updated">
                    <span />
                    <p>Ajustado</p>
                </div>
            ) : (
                <div className="statusContainer statusContainer--cancelled">
                    <span />
                    <p>Cancelado</p>
                </div>
            ),
        sortable: true,
        center: true,
        width: "8%",
    },
    {
        name: "Hotel",
        cell: (row) => row.host.nombre,
        sortable: true,
        center: true,
    },
    {
        name: "Código",
        cell: (row) =>
            row.codigo_reservacion !== undefined
                ? `${row.codigo_reservacion}`
                : "",
        sortable: true,
        center: true,
    },
    {
        name: "Código hotel",
        cell: (row) =>
            `${
                row.numero_reservacion_Q !== null
                    ? row.numero_reservacion_Q
                    : row.numero_reservacion_QQ
            }`,
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Fecha",
        cell: (row) => moment(row.created_at).format("YYYY-MM-DD"),
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Check In",
        cell: (row) => moment(row.check_in).format("YYYY-MM-DD"),
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Check Out",
        cell: (row) => moment(row.check_out).format("YYYY-MM-DD"),
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Cuartos",
        selector: "num_habitaciones",
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Noches",
        selector: "noches",
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Promedio por noche",
        cell: (row) =>
            row.pagos_token.length > 0
                ? `${(
                      parseInt(row.pagos_token[0].token_gasto) /
                      parseInt(row.noches)
                  ).toFixed(0)}`
                : "--",
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Centro de costo",
        cell: (row) =>
            row.centro_costo_paquete !== null
                ? row.centro_costo_paquete.nombre
                : "",
        sortable: true,
        center: true,
    },
    {
        name: "Noktos",
        cell: (row) =>
            row.pagos_token.length > 0
                ? `${row.pagos_token[0].token_gasto}`
                : "--",
        sortable: true,
        center: true,
        width: "4%",
    },
    {
        name: "Centauros",
        cell: (row) =>
            row.pagos_token.length > 0
                ? `${row.pagos_token[0].noches_gratis_gasto}`
                : "--",
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "MK",
        cell: (row) =>
            row.pagos.length > 0 ? `${formatMoney(row.pagos[0].total)}` : "--",
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Fecha Original",
        cell: (row) =>
            row.estado === 4
                ? moment(row.created_at_original).format("YYYY-MM-DD")
                : "-",
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Cargos(T)",
        cell: (row) =>
            row.estado === 4 ? `* ${row.pagos_token[0].token_gasto}` : "-",
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Abono(T)",
        cell: (row) =>
            row.estado === 4 ? `* ${row.pagos_token[0].token_ajuste}` : "-",
        sortable: true,
        center: true,
        width: "5%",
    },
    {
        name: "Cargos(C)",
        cell: (row) =>
            row.estado === 4
                ? `* ${row.pagos_token[0].noches_gratis_gasto}`
                : "-",
        sortable: true,
        center: true,
        width: "4%",
    },
    {
        name: "Abono(C)",
        cell: (row) =>
            row.estado === 4
                ? `* ${row.pagos_token[0].noches_gratis_ajuste}`
                : "-",
        sortable: true,
        center: true,
        width: "4%",
    },
];

export const conditionalRowStyles = [
    {
        when: (row) => row.estado,
        style: (row) => ({
            borderLeft:
                row.estado === 2
                    ? "3px solid #43B25C"
                    : row.estado === 3
                    ? "3px solid #f16161"
                    : "3px solid #EFB913",
            margin: "0",
            // height: "10px"
        }),
    },
];
