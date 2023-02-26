import styles from "./styles.module.scss";

const InfoItem = ({ Icon, title, description }) => (
    <div className={styles.InfoItem}>
        <div>
            <Icon
                fontSize="large"
                style={{
                    color: "#fff",
                }}
            />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default InfoItem;
