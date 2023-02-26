import styles from "./styles.module.scss";

const Squares = () => (
    <div className={styles.Squares__bigSquare}>
        <div className={styles.Squares__smallSquareRight}></div>
        <div className={styles.Squares__smallSquareLeft}></div>
    </div>
);

export default Squares;
