import { useRouter } from "next/router";
import { listItems } from "../dataItems";
import styles from "./styles.module.scss";
import Button from "@material-ui/core/Button";
import CheckIcon from "@mui/icons-material/Check";
import BenefitsColumn from "../BenefitsColumn/BenefitsColumn";

const InfoItem = ({ title }) => (
    <div className={styles.InfoItem}>
        <span>{title}</span>
        <CheckIcon sx={{ color: "#00C2FF" }} />
    </div>
);

const buttonStyle = {
    width: "90%",
    padding: "20px 0",
    color: "#fff",
    borderRadius: 35,
    fontSize: 17.5,
    backgroundColor: "#00C2FF",
    textTransform: "none",
    fontWeight: 600,
};

const TableInfo = ({benefits}) => {
    const router = useRouter();

    const handleClick = () => {
        window.open("https://www.app.noktos.com/register/", "_blank")
    }

    return (
        <div className={styles.TableInfo}>
            <div className={styles.TableInfo__container}>
                <div>
                    <BenefitsColumn benefits={benefits}/>
                </div>
                <Button
                    variant="contained"
                    style={buttonStyle}
                    onClick={handleClick}
                >
                    Regístrate Premium
                </Button>
            </div>
        </div>
    );
};

export default TableInfo;
