import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const styleButton = {
    padding: "5px 22px",
    marginLeft: 16,
    color: "#fff",
    backgroundColor: "#000",
    fontSize: 15,
    fontWeight: 600,
    borderRadius: 30,
    textTransform: "none",
    fontFamily: "DM Sans Regular",
};

const RegisterButton = ({setIsOpen}) => {
    const router = useRouter();

    const handleClick = () => {
        window.open("https://www.app.noktos.com/register/", "_blank")
        if(setIsOpen) setIsOpen(false)
    }

    return (
        <Button
            size="small"
            variant="outlined"
            style={styleButton}
            onClick={handleClick}
        >
            Regístrate
        </Button>
    );
};

RegisterButton.defaultProps = {
    setIsOpen: null
}

export default RegisterButton;
