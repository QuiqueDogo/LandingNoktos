import { forwardRef } from "react";
import styles from "./styles.module.scss";

const InfoItem = forwardRef(
    ({ label, title, description, labelColor }, ref) => (
        <div ref={ref} className={styles.InfoItem}>
            <div
                className={styles.InfoItem__label}
                style={{ backgroundColor: labelColor }}
            >
                <span>{label}</span>
            </div>
            <div className={styles.InfoItem__info}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
);

export default InfoItem;
