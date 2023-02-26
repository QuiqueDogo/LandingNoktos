export const customStyles = {
    headRow: {
        style: {
            border: 'none',
            backgroundColor: "#00253e"
        },
    },
    headCells: {
        style: {
            color: '#ffff',
            fontSize: '12px'
        },
    },
    expanderButton: {
        style: {
            backgroundColor: 'transparent',
            borderRadius: '2px',
            transition: '0.25s',
            height: '100%',
            width: '100%',
            '&:hover:enabled': {
                cursor: 'pointer',
            },
            '&:disabled': {
                color: '#FFFFFF',
            },
            '&:hover:not(:disabled)': {
                cursor: 'pointer',
                backgroundColor: 'rgba(255,255,255,0.32)',
            },
            '&:focus': {
                outline: 'none',
                backgroundColor: 'rgba(255,255,255,0.12)',
            },
            svg: {
                margin: 'auto',
            },
        },
    },
    pagination: {
        style: {
            border: 'none',
        },
    },
    rows: {
        fontSize: '12px',
        fontFamily: 'Helvetica Neue'
    }
}


export const blueBorder = () => (
    {
        borderLeft: '3px solid #00c2ff',
        margin: "0",
        //height: "10px"
    }
);

