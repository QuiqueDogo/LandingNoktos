import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const styleButton = {
    padding: "5px 16px",
    marginLeft: 16,
    color: "#000",
    backgroundColor: "#fff",
    fontSize: 15,
    fontWeight: 600,
    borderRadius: 30,
    borderColor: "#979797",
    textTransform: "none",
    fontFamily: "DM Sans Regular",
};

const LoginButton = () => {
    const router = useRouter();
    return (
        <Button
            size="small"
            disableElevation
            variant="outlined"
            style={styleButton}
            onClick={() => {
                window.open("https://www.app.noktos.com/login/", "_blank")
            }}>
            Iniciar Sesión
        </Button>
    );
};

export default LoginButton;
