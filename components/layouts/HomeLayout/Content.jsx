import Link from "next/link";
import { useEffect } from "react";
import Head from "./Components/Head";
import { Drawer } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { hideDrawer } from "redux/actions/application";
import LoaderComponent from "components/LoaderComponent";
import HeaderLogin from "./Components/HeaderLogin/HeaderLogin";

const useStyles = makeStyles({
  paper: {
    width: 330,
  },
});

const Content = ({
  rol,
  user,
  title,
  company,
  children,
  companies,
  createOptionInMenu,
  canMakeReservations,
  changeSelectedCompany,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { showDrawer } = useSelector(
    ({ applicationReducer }) => applicationReducer
  );

  useEffect(() => {
    dispatch(hideDrawer());
  }, []);

  return (
    <>
      <Head title={title} />

      <HeaderLogin />

      {/* MENU DESPLEGABLE */}
      <Drawer
        anchor="left"
        open={showDrawer}
        onClose={() => dispatch(hideDrawer())}
        classes={{
          paper: classes.paper,
        }}
      >
        <aside className="homeLayout__sidenav">
          <ul className="homeLayout__sidenav_list">
            <div className="homeLayout__sidenav_image_container">
              <Link href="/portal/search-hotel">
                <img src="/img/noktos_logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="homeLayout__sidenav_user">
              <p>Usuario</p>
              <span>{`${user.name} ${
                user.apellido_paterno !== null ? user.apellido_paterno : ""
              }`}</span>
            </div>
            <div className="homeLayout__companie">
              <select
                className="form-control shadow-sm search_hotel__search_input"
                onChange={changeSelectedCompany}
                value={company.id}
              >
                {companies.map((company) => (
                  <option value={company.id} key={company.id}>
                    {company.rfc.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div className="homeLayout__sidenav_links_container">
              {rol.modulos !== undefined
                ? rol.modulos.map((module) => createOptionInMenu(module))
                : ""}
            </div>
          </ul>
          <div className="homeLayout__version_container">
            <p>V 0.1</p>
          </div>
        </aside>
      </Drawer>

      <section>{children}</section>

      <button
        type="button"
        className="btn landinglayout__purechat purechat-button-expand"
      >
        <i className="fas fa-comments" />
      </button>
      <Footer />

      <LoaderComponent />
    </>
  );
};
export default Content;
