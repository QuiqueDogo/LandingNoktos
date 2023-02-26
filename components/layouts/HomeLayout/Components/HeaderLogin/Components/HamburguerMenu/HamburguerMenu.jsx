import NavItem from "../NavItem";
import styles from "./styles.module.scss";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

const HamburguerNav = ({ handleClose, setIsOpen }) => (
  <div className={styles.HamburguerNav}>
    <div className={styles.HamburguerNav__closeIcon}>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </div>
    <div className={styles.HamburguerNav__logo}>
      <img src="/img/noktos_logo.svg" alt="Noktos" />
    </div>
    <nav className={styles.HamburguerNav__items}>
      <NavItem title="Inicio" link="/" setIsOpen={setIsOpen} />
      <NavItem title="Dashboard" link="/dashboard" setIsOpen={setIsOpen} />
      <NavItem title="Mis compras" link="/mis-compras" setIsOpen={setIsOpen} />
      <NavItem
        title="Reservar"
        link="/reservation/search"
        setIsOpen={setIsOpen}
      />
      <NavItem
        title="Mis reservaciones"
        link="/reservations"
        setIsOpen={setIsOpen}
      />
    </nav>
  </div>
);

export default HamburguerNav;
