import styles from "./styles.module.scss";
import { IconButton } from "@mui/material";

const buttonStyle = {
    width: 60,
    height: 60,
    color: "#fff",
    backgroundColor: "#00c2ff",
    borderRadius: "100%",
};

const iconStyle = {
    fontSize: 32,
};

const InfoItem = ({ Icon, title, description }) => (
    <div className={styles.InfoItem}>
        <IconButton aria-label={title} style={buttonStyle}>
            <Icon style={iconStyle} />
        </IconButton>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

export default InfoItem;
