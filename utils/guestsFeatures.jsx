import { blueBorder } from "./DataTableStyles";

export const columns = [
    {
        name: "Nombre",
        selector: "name",
        sortable: true,
    },
    {
        name: "Apellido Paterno",
        selector: "apellido_paterno",
        sortable: true,
    },
    {
        name: "Apellido Materno",
        selector: "apellido_materno",
        sortable: true,
    },
    {
        name: "Email",
        selector: "email",
        sortable: true,
    },
    {
        name: "Telefono",
        selector: "telefono",
        sortable: true,
    },
    // {
    //     name: 'Eliminar',
    //     cell: row => <button className="btn-icon btn-icon--delete"><i class="fas fa-trash-alt"></i></button>,
    //     width: "10%"
    // },
];

export const conditionalRowStyles = [
    {
        when: (row) => row.name,
        style: blueBorder,
    },
];
