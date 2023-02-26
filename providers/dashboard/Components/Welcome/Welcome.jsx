import { useState } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import Banner from "./Components/Banner/Banner";
import MailBox from "components/MailBox/MailBox";
import NotificationBell from "components/NotificationBell/NotificationBell";
import CreditBanner from "../../../../components/CreditBanner";

const Welcome = () => {
    let counter = 6;
    const [drawer, setDrawer] = useState(false);
    const { user } = useSelector(({ user }) => user);

    const handleNotify = () => setDrawer(true);

    return (
        <>
            <section className={styles.Welcome}>
                <div>
                    <div>
                        <h3>¡Hola, {user?.name ?? "Usuario"}!</h3>
                        <h2>Dashboard</h2>
                    </div>
                    {/* <NotificationBell
                        counter={counter}
                        handleNotify={handleNotify}
                    /> */}
                </div>
            </section>
            <Banner />
            <MailBox isOpen={drawer} onClose={() => setDrawer(false)} />
        </>
    );
};

export default Welcome;
