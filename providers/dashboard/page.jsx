import HomeLayout from "../../components/layouts/HomeLayout/HomeLayout";
import Welcome from "./Components/Welcome/Welcome";
import Wallet from "./Components/Wallet/Wallet";
import Reservations from "./Components/Reservations/Reservations";
import Statistics from "./Components/Statistics/Statistics";
import styles from "./styles.module.scss";

const Content = () => {
  return (
    <HomeLayout title="Dashboard">
      <div className={styles.Dashboard}>
        <div className={styles.Dashboard__container}>
          <Welcome />
          <Wallet />
          <Reservations />
          <Statistics />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Content;
