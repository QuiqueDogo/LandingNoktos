import { Avatar } from "@mui/material";
import styles from "./styles.module.scss";

const Comment = ({ initials, name, alias, description }) => (
    <div className={styles.Comment}>
        <p>{description}</p>
        <div>
            <Avatar>{initials}</Avatar>
            <div>
                <span>{name}</span>
                <label>{alias}</label>
            </div>
        </div>
    </div>
);

export default Comment;
