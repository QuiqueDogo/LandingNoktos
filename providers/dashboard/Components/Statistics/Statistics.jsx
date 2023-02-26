import AccountStatement from "./Components/AccountStatement/AccountStatement";
import ExpenseChart from "./Components/ExpenseChart/ExpenseChart";
import useMediaQuery from "../../../../customHooks/useMediaQuery";
import styles from "./styles.module.scss";

const Statistics = () => (
    <section className={styles.Statistics}>
        {
            //TODO Cambiar el false para habilitar
            false&&
            <React.Fragment>
                <AccountStatement/>
                <ExpenseChart />
            </React.Fragment>
        }
    </section>
);

export default Statistics;
