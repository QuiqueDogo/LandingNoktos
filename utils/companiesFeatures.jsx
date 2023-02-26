import {blueBorder} from './DataTableStyles';
import Link from "next/link";
import React from "react";

export const columns = [
    {
        name: 'Nombre',
        selector: 'nombre',
        sortable: true,
        width: "20%"
    },
    {
        name: 'RFC',
        selector: 'rfc',
        sortable: true,
    },
    {
        name: 'Razón social',
        selector: 'razon_social',
        sortable: true,
    },
    {
        name: 'Membresía',
        selector: 'nombre_suscripcion',
        sortable: true,
    },
    {
        name: 'Paquete',
        selector: 'nombre_paquete_membresia',
        sortable: true,
    },
    {
        name: 'Editar',
        cell: row => <Link href={`/edit-company-info/?id_company=${row.id}`}>
            <a className="btn-icon btn-icon--update"> <i className="fas fa-list"/></a></Link>,
        width: "10%"
    },
    {
        name: 'Eliminar',
        cell: row => <button className="btn-icon btn-icon--delete"><i class="fas fa-trash-alt"></i></button>,
        width: "10%"
    }
];


export const conditionalRowStyles = [
    {
        when: row => row.rfc,
        style: blueBorder
    },
];