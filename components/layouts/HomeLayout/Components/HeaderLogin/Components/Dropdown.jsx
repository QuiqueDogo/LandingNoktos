import { forwardRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { showDrawer } from "redux/actions/application";
import { logout, setIsAuthenticated } from "redux/actions/userAction";
import { ControlledMenu, SubMenu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const Dropdown = forwardRef(({ isOpen, setIsOpen }, ref) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClickConfig = () => dispatch(showDrawer());
  const handleClickNoktos = () => router.push("/buy-tokens");
  const handleChangePassword = () => router.push("/change-password");
  const handleClickMembership = () => router.push("/change-membership");
  const handleClickMethodPayment = () => router.push("/payment-methods");
  const handleClickLogout = () => {
    dispatch(logout());
    setIsAuthenticated(false);
    localStorage.clear();
    router.push("/");
  };

  return (
    <>
      <ControlledMenu
        anchorRef={ref}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <SubMenu label="Mi perfil">
          <MenuItem>Datos personales</MenuItem>
          <MenuItem onClick={handleChangePassword}>
            Cambio de contraseña
          </MenuItem>
          <MenuItem onClick={handleClickMethodPayment}>
            Métodos de pago
          </MenuItem>
        </SubMenu>
        <MenuItem onClick={handleClickConfig}>Configuración</MenuItem>
        <MenuItem onClick={handleClickLogout}>Cerrar sesión</MenuItem>
      </ControlledMenu>
    </>
  );
});

export default Dropdown;
