import { blueBorder } from "./DataTableStyles";

export const conditionalRowStyles = [
    {
        when: (row) => row.es_activo === 1,
        style: blueBorder,
    },
];
