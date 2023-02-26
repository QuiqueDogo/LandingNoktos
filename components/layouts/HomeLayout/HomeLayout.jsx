import Link from "next/link";
import { useEffect, useState } from "react";
import {connect, useDispatch} from "react-redux";
import { addCompany } from "../../../redux/actions/companyAction";
import Collapse from "react-bootstrap/Collapse";
import Content from "./Content";
import {validateAppVersion} from "../../../utils/clearCache";

const HomeLayout = ({
  title,
  children,
  active,
  companies,
  company,
  user,
  rol,
  addCompany,
}) => {
  const [openBuys, setOpenBuys] = useState(false);
  const [openReports, setOpenReports] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [canMakeReservations, setCanMakeReservations] = useState(false);
  const dispatch  = useDispatch()
  useEffect(() => {
    validateAppVersion(dispatch)
    if (company === undefined || company === null) return;
    // router.push("/select-company");

    const module = rol?.modulos?.filter((modulo) => modulo.id === 1);
    //USUARIO NO TIENE PERMISO
    if (module?.length === 0) setCanMakeReservations(false);
    else {
      const addAction = module?.[0]?.acciones?.filter(({ id }) => id === 34);
      if (addAction?.length > 0) setCanMakeReservations(true);
    }
  }, []);

  function changeSelectedCompany(event) {
    for (const company of companies) {
      if (company.id.toString() === event.target.value.toString()) {
        localStorage.setItem("selected_company", JSON.stringify(company));
        addCompany(company);
      }
    }
  }

  const createOptionInMenu = (module) => {
    const { secciones, ruta, id, icono, nombre } = module;

    if (secciones.length === 0) {
      return (
        <Link href={ruta}>
          <li
            className={`homeLayout__sidenav_list_item ${
              active === id ? "list_item_active" : ""
            }`}
          >
            <i className={icono} /> {nombre}
          </li>
        </Link>
      );
    } else {
      return (
        <>
          <li
            onClick={() =>
              id === 7
                ? setOpenBuys(!openBuys)
                : id === 108
                ? setOpenInvoice(!openInvoice)
                : setOpenReports(!openReports)
            }
            className={`homeLayout__sidenav_list_item ${isActiveMenu(
              secciones
            )}`}
          >
            <i className={icono} /> {nombre}{" "}
            <i
              className={`fas ${
                openBuys || openReports || openInvoice
                  ? "fa-chevron-up"
                  : "fa-chevron-down"
              }`}
            />
          </li>

          <Collapse
            in={id === 7 ? openBuys : id === 108 ? openInvoice : openReports}
          >
            <div id="example-collapse-text">
              <ul className="homeLayout__sidenav_inner_list">
                {secciones.map((section) => {
                  if (parseInt(section.activo) === 1)
                    return (
                      <Link href={section.ruta}>
                        <li
                          className={`homeLayout__sidenav_list_item ${
                            active === section.id ? "list_item_active" : ""
                          }`}
                        >
                          <i className={section.icono} /> {section.nombre}
                        </li>
                      </Link>
                    );
                })}
              </ul>
            </div>
          </Collapse>
        </>
      );
    }
  };

  const isActiveMenu = (sections) => {
    let className = "";
    const activeSection = sections.filter(({ id }) => id === active);

    if (activeSection?.length > 0) className = "list_item_active";
    else className = "";

    return className;
  };

  return (
    <Content
      rol={rol}
      user={user}
      title={title}
      company={company}
      children={children}
      companies={companies}
      createOptionInMenu={createOptionInMenu}
      canMakeReservations={canMakeReservations}
      changeSelectedCompany={changeSelectedCompany}
    />
  );
};

function mapStateToProps(state) {
  return {
    companies: state.company.companies,
    company: state.company.company,
    user: state.user.user,
    rol: state.user.rol,
  };
}

export default connect(mapStateToProps, { addCompany })(HomeLayout);
