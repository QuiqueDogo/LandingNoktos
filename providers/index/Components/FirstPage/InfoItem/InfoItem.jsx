import styles from "./styles.module.scss";

const InfoItem = ({ title, description }) => (
    <div className={styles.InfoItem}>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
);

export default InfoItem;
