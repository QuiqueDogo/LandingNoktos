import { useState } from "react";
import { useRouter } from "next/router";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import styles from "./styles.module.scss";
import Tabs from "@material-ui/core/Tabs";
import { useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import PinDropIcon from "@material-ui/icons/PinDrop";
import useMediaQuery from "customHooks/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import ApartmentIcon from "@material-ui/icons/Apartment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HamburguerMenu from "../HamburguerMenu/HamburguerMenu";

const useStyles = makeStyles({
  root: {
    minHeight: "50px",
  },
  wrapper: {
    flexDirection: "row",
  },
  labelIcon: {
    color: "#fff",
  },
  paper: {
    width: 350,
  },
});

const IconItem = ({ Icon }) => (
  <Box mr={0.8} mt={0.4}>
    <Icon style={{ fontSize: 21 }} />
  </Box>
);

const Content = ({
  handleChange,
  canReservate,
  canCheckMyShoppings,
  canCheckMyReservations,
}) => {
  const router = useRouter();
  const classes = useStyles();
  const [isMedia] = useMediaQuery(850);
  const [isOpen, setIsOpen] = useState(false);
  const { optionMenu } = useSelector(
    ({ applicationReducer }) => applicationReducer
  );

  const tabStyle = {
    root: classes.root,
    wrapper: classes.wrapper,
    labelIcon: classes.labelIcon,
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        classes={{ paper: classes.paper }}
        onClose={handleClose}
      >
        <HamburguerMenu setIsOpen={setIsOpen} handleClose={handleClose} />
      </Drawer>
      {isMedia ? (
        <Tabs
          value={optionMenu}
          onChange={handleChange}
          aria-label="Menú de opciones"
          TabIndicatorProps={{ style: { backgroundColor: "#fff" } }}
        >
          <Tab
            wrapped
            label="Inicio"
            icon={<IconItem Icon={HomeIcon} />}
            onClick={() => router.push("/")}
            classes={{ ...tabStyle }}
          />
          <Tab
            wrapped
            label="Dashboard"
            icon={<IconItem Icon={DashboardIcon} />}
            onClick={() => router.push("/dashboard")}
            classes={{ ...tabStyle }}
          />
          {canCheckMyShoppings && (
            <Tab
              wrapped
              label="Mis Compras"
              icon={<IconItem Icon={AssessmentIcon} />}
              onClick={() => router.push("/mis-compras")}
              classes={{ ...tabStyle }}
            />
          )}
          {canReservate && (
            <Tab
              wrapped
              label="Reservar"
              icon={<IconItem Icon={PinDropIcon} />}
              onClick={() => router.push("/reservation/search")}
              classes={{ ...tabStyle }}
            />
          )}
          {canCheckMyReservations && (
            <Tab
              wrapped
              label="Mis reservaciones"
              icon={<IconItem Icon={ApartmentIcon} />}
              onClick={() => router.push("/reservations")}
              classes={{ ...tabStyle }}
            />
          )}
        </Tabs>
      ) : (
        <div className={styles.HamburguerMenu}>
          <IconButton onClick={handleOpen}>
            <MenuIcon sx={{ color: "#fff", fontSize: 30 }} />
          </IconButton>
        </div>
      )}
    </>
  );
};

export default Content;

// import NavItem from "../NavItem";
// import LoginButton from "../LoginButton";
// import styles from "./styles.module.scss";
// import RegisterButton from "../RegisterButton";
// import { IconButton } from "@material-ui/core";
// import CloseIcon from "@mui/icons-material/Close";

// const HamburguerNav = ({ handleClose, setIsOpen }) => (
//     <div className={styles.HamburguerNav}>
//         <div className={styles.HamburguerNav__closeIcon}>
//             <IconButton onClick={handleClose}>
//                 <CloseIcon />
//             </IconButton>
//         </div>
//         <div className={styles.HamburguerNav__logo}>
//             <img src="/img/noktos_logo.svg" alt="Noktos" />
//         </div>
//         <div className={styles.HamburguerNav__buttons}>
//             <RegisterButton setIsOpen={setIsOpen} />
//             <LoginButton setIsOpen={setIsOpen} />
//         </div>
//         <nav className={styles.HamburguerNav__items}>
//             <NavItem title="Inicio" link="/" setIsOpen={setIsOpen} />
//             <NavItem
//                 title="¿Cómo funciona?"
//                 link="/como-funciona"
//                 setIsOpen={setIsOpen}
//             />
//             <NavItem
//                 title="Beneficios"
//                 link="/beneficios"
//                 setIsOpen={setIsOpen}
//             />
//             <NavItem title="Precios" link="/precios" setIsOpen={setIsOpen} />
//         </nav>
//     </div>
// );

// export default HamburguerNav;
