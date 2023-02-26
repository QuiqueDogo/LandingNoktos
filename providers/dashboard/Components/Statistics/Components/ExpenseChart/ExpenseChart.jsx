import PropTypes from "prop-types";
import AddBoxIcon from "@material-ui/icons/AddBox";
import styles from "./styles.module.scss";

const ExpenseChart = ({ title, date, buttonLabel }) => (
    <section className={styles.ExpenseChart}>
        <div className={styles.ExpenseChart__info}>
            <div className={styles.ExpenseChart__info__graph}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <h4>{title}</h4>
                <span>{date}</span>
            </div>
        </div>
        <div className={styles.ExpenseChart__showMore}>
            <button onClick={() => {}}>
                <AddBoxIcon
                    style={{
                        color: "#fff",
                    }}
                />
                <span>{buttonLabel}</span>
            </button>
        </div>
    </section>
);

ExpenseChart.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    buttonLabel: PropTypes.string,
};

ExpenseChart.defaultProps = {
    title: "Gastos",
    date: "01 Agosto - 30 Agosto",
    buttonLabel: "Ver todo",
};

export default ExpenseChart;
