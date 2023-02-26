import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./Components/Menu/Menu";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import Avatar from "@mui/material/Avatar";
import Dropdown from "./Components/Dropdown";
import useIsTablet from "customHooks/useIsTablet";
import useIsDesktop from "customHooks/useIsDesktop";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState, useRef, forwardRef, memo } from "react";

const Content = ({ user, wallet, canBuyTokens }) => {
  const router = useRouter();
  const [isTablet] = useIsTablet();
  const refUserPanel = useRef(null);
  const [isDesktop] = useIsDesktop();
  const [isOpen, setIsOpen] = useState(false);

  const UserPanel = forwardRef((props, ref) => (
    <div ref={ref} className={styles.UserPanel} onClick={() => setIsOpen(true)}>
      <Avatar className={styles.UserPanel__avatar} alt="" />
      <span className={styles.UserPanel__icon}>
        Hola, {user?.name ?? "Usuario"}
      </span>
      {!isOpen ? (
        <ExpandMoreIcon className={styles.UserPanel__icon} />
      ) : (
        <ExpandLessIcon className={styles.UserPanel__icon} />
      )}
    </div>
  ));

  const srcLogo = isTablet
    ? "/img/new_logo.svg"
    : "/img/noktos_logo_blanco.svg";

  const noktos = wallet?.noktos ?? 0;
  const centauros = wallet?.centauros ?? 0;

  return (
    <header className={styles.Header}>
      <section className={styles.Header__top}>
        <div className={styles.Header__top__logo}>
          <Link href="/">
            <a>
              <img src={srcLogo} alt="Noktos" />
            </a>
          </Link>
        </div>
        <div className={styles.Header__top__options}>
          <div className={styles.Header__top__options__curve}></div>
          <div className={styles.Header__top__options__info}>
            <div className={styles.Header__top__options__info__avatar}>
              <UserPanel ref={refUserPanel} />
              <Dropdown
                isOpen={isOpen}
                ref={refUserPanel}
                setIsOpen={setIsOpen}
              />
            </div>
            <div className={styles.Header__top__options__info__noktos}>
              {isDesktop && (
                <Link href="/home/contact">
                  <a>Soporte</a>
                </Link>
              )}
              <span>{`Tienes ${noktos} Noktos y ${centauros} Centauros`}</span>
              {canBuyTokens && (
                <Button
                  disableElevation
                  variant="contained"
                  style={{
                    color: "#fff",
                    backgroundColor: "#00c2ff",
                  }}
                  onClick={() => router.push("/buy-tokens")}
                >
                  Comprar Noktos
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr />

      <Menu />
    </header>
  );
};

export default memo(Content);
