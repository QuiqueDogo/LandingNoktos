import { useState } from "react";
import { Button } from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import useIsTablet from "../../../../../../customHooks/useIsTablet";
import styles from "./styles.module.scss";

const AccountStatement = () => {
    const [itemSelected, setItemSelected] = useState(2);
    const [isTablet] = useIsTablet();

    const ReportItem = ({ idItem, isActive, date, label }) => (
        <div
            className={styles.AccountStatement__reportItem}
            style={{
                backgroundColor: `${isActive ? "#F8F8F8" : "#fff"}`,
            }}
            onClick={() => setItemSelected(idItem)}
        >
            <div>
                <div>
                    <Brightness2Icon
                        style={{
                            width: 56,
                            height: 56,
                            color: "#00c2ff",
                            transform: "rotate(-230deg)",
                        }}
                    />
                </div>
                <div>
                    <h4>{date}</h4>
                    <span>{label}</span>
                    <Button
                        style={{
                            marginTop: 5,
                            padding: "2px 8px",
                            color: "#fff",
                            backgroundColor: "#00c2ff",
                            borderRadius: 10,
                            fontWeight: 600,
                            textTransform: "none",
                        }}
                    >
                        Descargar
                    </Button>
                </div>
            </div>
            <div>
                <NavigateNextIcon fontSize="large" />
            </div>
        </div>
    );

    return (
        <section className={styles.AccountStatement}>
            <div>
                <h3>Estados de cuenta</h3>
                <div>
                    <TrendingUpIcon />
                    <label>Estado de Cuenta</label>
                </div>
            </div>
            <div>
                <ReportItem
                    idItem={1}
                    isActive={itemSelected === 1}
                    date="Agosto 2021"
                    label="Mensual"
                />
                <ReportItem
                    idItem={2}
                    isActive={itemSelected === 2}
                    date="Septiembre 2021"
                    label="Mensual"
                />
                <ReportItem
                    idItem={3}
                    isActive={itemSelected === 3}
                    date="Octubre 2021"
                    label="Mensual"
                />
            </div>
        </section>
    );
};

export default AccountStatement;
