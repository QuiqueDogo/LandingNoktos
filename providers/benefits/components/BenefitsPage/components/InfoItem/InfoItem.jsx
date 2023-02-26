import { forwardRef } from "react";
import useIsDesktop from "customHooks/useIsDesktop";
import styles from "./styles.module.scss";

const InfoItem = forwardRef(
    ({ src, title, description, line, maxWidth }, ref) => {
        const [isDesktop] = useIsDesktop();

        return (
            <div ref={ref} className={styles.InfoItem}>
                <div className={styles.InfoItem__image}>
                    <img
                        alt=""
                        labelledby="noktos-benefits"
                        src={`/img/Benefits/BenefitsPage/${src}`}
                    />
                </div>
                <div className={styles.InfoItem__info} style={{ maxWidth }}>
                    <h4 id="noktos-benefits">{title}</h4>
                    <p>{description}</p>
                </div>
                {line && isDesktop && (
                    <div className={styles.InfoItem__line}>
                        <img alt="" src="/img/Benefits/BenefitsPage/line.png" />
                    </div>
                )}
            </div>
        );
    }
);

InfoItem.defaultProps = {
    line: false,
};

export default InfoItem;
