import styles from "./styles.module.scss";

const PaginationItem = ({ isActive, label }) => (
    <div
        className={styles.Pagination__item}
        style={{
            backgroundColor: `${
                isActive ? "#00c2ff" : "rgba(0, 194, 255, 0.23)"
            }`,
            boxShadow: `${
                isActive ? "0 12px 24px 0 rgba(0, 194, 255, 0.36)" : "none"
            }`,
        }}
    >
        <span>{label}</span>
    </div>
);

const Pagination = ({ stepSelected, itemsLength }) => {
    const items = new Array(itemsLength).fill(0);

    return (
        <div className={styles.Pagination}>
            {items.map((item, index) => (
                <PaginationItem
                    label={index + 1}
                    isActive={stepSelected === index}
                />
            ))}
        </div>
    );
};

Pagination.defaultProps = {
    itemsLength: 4,
};

export default Pagination;
