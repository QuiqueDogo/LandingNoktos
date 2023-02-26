import React from "react";

export const conditionalRowStyles = [
    {
        when: (row) => row.email_verified_at !== null,
        style: {
            borderLeft: '3px solid #43B25C',
        },
    },
    {
        when: (row) => row.email_verified_at === null,
        style: {
            borderLeft: '3px solid #f16161',
        },
    },
];