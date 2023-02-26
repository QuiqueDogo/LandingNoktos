import { useState, useEffect } from "react";
import ReservationsList from "./Components/ReservationList/ReservationList";
import ReservationGraph from "./Components/ReservationGraph/ReservationGraph";
import useIsTablet from "../../../../customHooks/useIsTablet";
import BarChartIcon from "@material-ui/icons/BarChart";
import styles from "./styles.module.scss";

const Reservations = () => {
    const [isTablet] = useIsTablet();
    const [showGraph, setShowGraph] = useState(false);

    const ButtonShowGraph = () => (
        <div className={styles.Reservations__showGraph}>
            <button onClick={() => setShowGraph(!showGraph)}>
                <BarChartIcon
                    style={{
                        color: "#fff",
                    }}
                />
                <span>{showGraph ? "Ocultar Gráfica" : "Ver Gráfica"}</span>
            </button>
        </div>
    );

    useEffect(() => {
        if (isTablet) setShowGraph(true);
    }, [isTablet]);

    return (
        <section className={styles.Reservations}>
            {
                //TODO Cambiar el false para habilitar
                false&&
                <React.Fragment>
            <ReservationsList />
            {!isTablet && <ButtonShowGraph />}

                    {showGraph && <ReservationGraph showGraph={showGraph} />}
            </React.Fragment>
            }
        </section>
    );
};

export default Reservations;
