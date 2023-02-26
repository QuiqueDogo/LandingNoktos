import NavItem from "../NavItem";
import { useRouter } from "next/router";
import LoginButton from "../LoginButton";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import RegisterButton from "../RegisterButton";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const HamburguerNav = ({ handleClose, setIsOpen, isAuthenticated }) => {
  const router = useRouter();
  return (
    <div className={styles.HamburguerNav}>
      <div className={styles.HamburguerNav__closeIcon}>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={styles.HamburguerNav__logo}>
        <img src="/img/noktos_logo.svg" alt="Noktos" />
      </div>
      <div className={styles.HamburguerNav__buttons}>
        {!isAuthenticated ? (
          <>
            <RegisterButton setIsOpen={setIsOpen} />
            <LoginButton setIsOpen={setIsOpen} />
          </>
        ) : (
          <Button
            variant="outlined"
            sx={{ color: "#00c2ff" }}
            endIcon={<ExitToAppIcon />}
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </Button>
        )}
      </div>
      <nav className={styles.HamburguerNav__items}>
        <NavItem title="Inicio" link="/" setIsOpen={setIsOpen} />
        <NavItem
          title="¿Cómo funciona?"
          link="/como-funciona/"
          setIsOpen={setIsOpen}
        />
        <NavItem title="Beneficios" link="/beneficios/" setIsOpen={setIsOpen} />
        <NavItem title="Precios" link="/precios/" setIsOpen={setIsOpen} />
        <NavItem link="https://www.blog.noktos.com" title="Blog" />
        {/* <NavItem link="/totalplay" title="Noktos TotalPlay" /> */}
      </nav>
    </div>
  );
};

export default HamburguerNav;
