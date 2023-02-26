import Content from "./Content";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { setOptionMenu } from "redux/actions/application";

const Menu = ({ rol }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [canReservate, setCanReservate] = useState(false);
  const [canCheckMyShoppings, setCanCheckMyShoppings] = useState(false);
  const [canCheckMyReservations, setCanCheckMyReservations] = useState(false);

  const handleChange = (ev, value) => dispatch(setOptionMenu(value));

  useEffect(() => {
    const { pathname } = router;
    checkPermits();
    switch (pathname) {
      case "/":
        dispatch(setOptionMenu(0));
        break;
      case "/dashboard":
        dispatch(setOptionMenu(1));
        break;
      case "/mis-compras":
        dispatch(setOptionMenu(2));
        break;
      case "/reservation/search":
        dispatch(setOptionMenu(3));
        break;
      case "/reservations":
        dispatch(setOptionMenu(4));
        break;
      default:
        dispatch(setOptionMenu(null));
    }
  }, []);

  const checkPermits = () => {
    const moduleShoppings = rol.modulos?.filter((modulo) => modulo.id === 7);
    const moduleReservations = rol.modulos?.filter((modulo) => modulo.id === 1);

    if (moduleReservations !== undefined && moduleShoppings !== undefined) {
      if (moduleShoppings.length === 0) {
        //USUARIO NO TIENE PERMISO
        setCanCheckMyShoppings(false);
      } else {
        const sectionMyShoppings = moduleShoppings[0].secciones.filter(
          (section) => section.id === 122
        );
        if (sectionMyShoppings.length === 0) {
          setCanCheckMyShoppings(false);
        } else {
          const getAction = sectionMyShoppings[0].acciones.filter(
            (actions) => actions.id === 123
          );
          if (getAction.length > 0) {
            setCanCheckMyShoppings(true);
          }
        }
      }

      if (moduleReservations.length === 0) {
        //USUARIO NO TIENE PERMISO
        setCanCheckMyReservations(false);
        setCanReservate(false);
      } else {
        const getAction = moduleReservations[0].acciones.filter(
          (actions) => actions.id === 9
        );
        const createAction = moduleReservations[0].acciones.filter(
          (actions) => actions.id === 34
        );
        if (getAction.length > 0) setCanCheckMyReservations(true);
        if (createAction.length > 0) setCanReservate(true);
      }
    } else {
      setCanReservate(false);
      setCanCheckMyShoppings(false);
      setCanCheckMyReservations(false);
    }
  };

  return (
    <Content
      handleChange={handleChange}
      canReservate={canReservate}
      canCheckMyShoppings={canCheckMyShoppings}
      canCheckMyReservations={canCheckMyReservations}
    />
  );
};

function mapStateToProps(state) {
  return {
    rol: state.user.rol,
  };
}

export default connect(mapStateToProps)(Menu);
