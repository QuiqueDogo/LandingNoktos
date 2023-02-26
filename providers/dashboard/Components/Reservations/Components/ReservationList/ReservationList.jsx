import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useState } from "react";
import styles from "./styles.module.scss";

const ReservationList = () => {
    const [itemSelected, setItemSelected] = useState(2);

    const ReservationItem = ({
        isActive,
        idItem,
        nameDay,
        dayNumber,
        title,
        date,
        destiny,
    }) => (
        <div
            className={styles.ReservationList__item}
            style={{
                backgroundColor: `${isActive ? "#000" : "#fff"}`,
            }}
            onClick={() => setItemSelected(idItem)}
        >
            <div
                style={{
                    color: `${isActive ? "#fff" : "#11142d"}`,
                    backgroundColor: `${isActive ? "#000" : "#f8f8f8"}`,
                }}
            >
                <span>{nameDay}</span>
                <span>{dayNumber}</span>
            </div>
            <div>
                <h4
                    style={{
                        color: `${isActive ? "#fff" : "#11142d"}`,
                    }}
                >
                    {title}
                </h4>
                <span
                    style={{
                        color: `${isActive ? "#fff" : "#808191"}`,
                    }}
                >
                    {date}
                </span>
                <div
                    style={{
                        color: `${isActive ? "#000" : "#fff"}`,
                        backgroundColor: `${isActive ? "#fff" : "#00c2ff"}`,
                    }}
                >
                    <span>{destiny}</span>
                </div>
            </div>
            <div
                style={{
                    color: `${isActive ? "#fff" : "000"}`,
                }}
            >
                <NavigateNextIcon fontSize="large" />
            </div>
        </div>
    );

    return (
        <section className={styles.ReservationList}>
            <div>
                <h3>Reservaciones realizadas</h3>
                <div>
                    <ReservationItem
                        isActive={itemSelected === 1}
                        idItem={1}
                        nameDay="Lunes"
                        dayNumber={20}
                        title="Reservación 1"
                        date="16 Ago - 20 Ago"
                        destiny="México"
                    />
                    <ReservationItem
                        isActive={itemSelected === 2}
                        idItem={2}
                        nameDay="Martes"
                        dayNumber={21}
                        title="Reservación 2"
                        date="18 Ago - 23 Ago"
                        destiny="Monterrey"
                    />
                    <ReservationItem
                        isActive={itemSelected === 3}
                        idItem={3}
                        nameDay="Miércoles"
                        dayNumber={22}
                        title="Reservación 3"
                        date="22 Ago - 23 Ago"
                        destiny="Gualadajara"
                    />
                    <ReservationItem
                        isActive={itemSelected === 4}
                        idItem={4}
                        nameDay="Jueves"
                        dayNumber={23}
                        title="Reservación 4"
                        date="23 Ago - 26 Ago"
                        destiny="Quéretaro"
                    />
                </div>
            </div>
        </section>
    );
};

export default ReservationList;
