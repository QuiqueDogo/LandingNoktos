import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-input": {
            // INPUT STYLES
            borderRadius: 10,
        },
        "& .MuiInputLabel-root": {
            // LABEL COLOR
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            // INPUT STYLE
            borderRadius: 10,
        },
        "&:hover .MuiOutlinedInput-input": {
            // INPUT HOVER
        },
        "&:hover .MuiInputLabel-root": {
            // LABEL HOVER
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            // INPUT HOVER
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            // INPUT FOCUS
            backgroundColor: "rgba(0, 194, 255, 0.05)",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            // LABEL FOCUS
            color: "#00c2ff"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
            borderRadius: 10,
            borderColor: "#00c2ff",
        },
    },
    filterStyle: {
        "& .MuiOutlinedInput-input": {
            borderRadius: 6,
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderRadius: 6,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#01a0c8"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
            borderRadius: 6,
            borderColor: "#01a0c8",
        },
    },
});
