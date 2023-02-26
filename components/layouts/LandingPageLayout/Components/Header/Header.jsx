import { useState } from "react";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import NavItem from "./components/NavItem";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "./components/LoginButton";
import useIsDesktop from "customHooks/useIsDesktop";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Drawer } from "@material-ui/core";
import RegisterButton from "./components/RegisterButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HamburguerMenu from "./components/HamburguerMenu/HamburguerMenu";

const useStyles = makeStyles({
  paper: {
    width: 350,
  },
});

const UserInfo = ({ user, isAuthenticated }) => {
  const router = useRouter();
  if (isAuthenticated)
    return (
      <section className={styles.UserInfo}>
        <Avatar sx={{ width: 44, height: 44, backgroundColor: "#00c2ff" }}>
          <PersonIcon sx={{ fontSize: 26 }} />
        </Avatar>
        <div className={styles.UserInfo__panel}>
          <span className={styles.UserInfo__panel__name}>
            Hola, {user?.name ?? "Usuario"}
          </span>
          <Button
            endIcon={<ExitToAppIcon />}
            sx={{ color: "#00c2ff" }}
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </Button>
        </div>
      </section>
    );
  return (
    <>
      <RegisterButton />
      <LoginButton />
    </>
  );
};

const Header = () => {
  const classes = useStyles();
  const [isDesktop] = useIsDesktop();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useSelector(({ user }) => user);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <HamburguerMenu
          setIsOpen={setIsOpen}
          handleClose={handleClose}
          isAuthenticated={isAuthenticated}
        />
      </Drawer>
      <header className={styles.Header}>
        <div className={styles.Header__container}>
          <div className={styles.Header__left}>
            <div className={styles.Header__left__logo}>
              <img src="/img/noktos_logo.svg" alt="Noktos" />
            </div>
            {isDesktop && (
              <nav>
                <NavItem link="/" title="Inicio" />
                <NavItem link="/como-funciona" title="¿Cómo funciona?" />
                <NavItem link="/beneficios" title="Beneficios" />
                <NavItem link="/precios/" title="Precios" />
                <NavItem link="https://www.blog.noktos.com" title="Blog" />
                {/* <NavItem link="/totalplay" title="Noktos TotalPlay" /> */}

              </nav>
            )}
          </div>
          <div className={styles.Header__right}>
            {isDesktop ? (
              <UserInfo user={user} isAuthenticated={isAuthenticated} />
            ) : (
              // HAMBURGUER MENU
              <IconButton onClick={handleOpen}>
                <MenuIcon />
              </IconButton>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
