import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const DaySelected = ({ label }) => (
    <div className={styles.ReservationGraph__daySelected}>
        <div>{label}</div>
    </div>
);

const ReservationItem = ({ label }) => (
    <div className={styles.ReservationGraph__reservationItem}>
        <div>
            <span>{label}</span>
        </div>
    </div>
);

const InfoItem = ({ backgroundColor }) => (
    <div className={styles.ReservationGraph__infoItem}>
        <div style={{ backgroundColor }}></div>
        <span>Small note</span>
    </div>
);

const ReservationGraph = ({ showGraph }) => {
    const refContainer = useRef();

    useEffect(() => {
        const { current } = refContainer;
        if (showGraph)
            current.classList.add("animate__animated", "animate__backInUp");
    }, [showGraph]);

    return (
        <section className={styles.ReservationGraph} ref={refContainer}>
            <h3>Reservaciones realizadas</h3>
            <div>
                <table>
                    <tr>
                        <th>Aug</th>
                        <th>22</th>
                        <th>
                            <DaySelected label={23} />
                        </th>
                        <th>24</th>
                        <th>25</th>
                        <th>26</th>
                    </tr>
                    <tr>
                        <td>08:00</td>
                        <td>
                            <ReservationItem label="R1" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>09:00</td>
                        <td></td>
                        <td>
                            <ReservationItem label="R2" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>10:00</td>
                        <td></td>
                        <td></td>
                        <td>
                            <ReservationItem label="R3" />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>11:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <ReservationItem label="R4" />
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div>
                <InfoItem backgroundColor="#00C2FF" />
                <InfoItem backgroundColor="#000" />
                <InfoItem backgroundColor="#E4E4E4" />
            </div>
        </section>
    );
};

export default ReservationGraph;
