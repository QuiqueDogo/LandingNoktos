import React, { useEffect, useState } from "react";
import { hideLoader, showLoader } from "../../redux/actions/application";
import axios from "axios";
import { apiRoutes } from "../../utils/apiRoutes";
import { setSelectedMembership } from "../../redux/actions/membershipAction";
import LandingPageLayout from "../../components/layouts/LandingPageLayout/LandingPageLayout";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import FullMembershipCard from "../../components/FullMembershipCard";
import { useRouter } from "next/router";

const Prices = ({
    dispatch,
    selectedMembership,
    selectedMembershipPackage,
}) => {
    const [benefits, setBenefits] = useState([]);
    const [fullMemberships, setFullMemberships] = useState(null);
    const [monthlyMemberships, setMonthlyMemberships] = useState(null);
    const [annualMemberships, setAnnualMemberships] = useState(null);
    const [isMonthly, setIsMonthly] = useState(true);
    const router = useRouter();

    useEffect(() => {
        getMembershipCatalog();
        getBenefits();
    }, []);

    function getMembershipCatalog() {
        dispatch(showLoader());
        const token = localStorage.getItem("local_token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        };

        axios
            .get(
                `${apiRoutes.baseUrl}${apiRoutes.suscriptions}${apiRoutes.memberships}`,
                config
            )
            .then((response) => {
                dispatch(hideLoader());
                let monthlyMemberships = [];
                let annualMemberships = [];
                //let freePackage = response.data.suscripciones_membresias[2].catalogo_membresia[0]
                for (let membership of response.data.suscripciones_membresias) {
                    let value = {
                        name_membership: membership.nombre,
                        discount: membership.descuento,
                        price_membership:
                            membership.id < 4
                                ? membership.catalogo_membresia[0].costo_mensual
                                : membership.catalogo_membresia[0].costo_anual,
                        id_membership: membership.id,
                        tokens: membership.catalogo_membresia[0].numero_tokens,
                        nights: membership.catalogo_membresia[0].noches_gratis,
                        id_package: membership.catalogo_membresia[0].id,
                        //"price_package": membership.catalogo_membresia[0].costo_mensual,
                        description: setDescription(membership),
                    };
                    if (membership.id < 4) {
                        monthlyMemberships.push(value);
                    } else {
                        annualMemberships.push(value);
                    }
                }
                setFullMemberships(monthlyMemberships);
                setMonthlyMemberships(monthlyMemberships);
                setAnnualMemberships(annualMemberships);
                dispatch(setSelectedMembership(monthlyMemberships[1]));
            })
            .catch((error) => {
                dispatch(hideLoader());
                console.log(error);
            });
    }

    function getBenefits() {
        dispatch(showLoader());
        const token = localStorage.getItem("local_token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        };

        axios
            .get(`${apiRoutes.baseUrl}${apiRoutes.benefits}`, config)
            .then((response) => {
                dispatch(hideLoader());
                setBenefits(response.data.rubro_beneficios);
            })
            .catch((error) => {
                dispatch(hideLoader());
                console.log(error);
            });
    }

    function setPayPeriod(period) {
        setIsMonthly(period);

        if (period === true) {
            setFullMemberships(monthlyMemberships);
        } else {
            setFullMemberships(annualMemberships);
        }
    }

    function setDescription(membership) {
        switch (membership.id) {
            case 1:
                return "Para negocios con viajes esporádicos o poco frecuentes";
            case 2:
                return "Para empresas con viajes de negocios poco frecuentes";
            case 3:
                return "Para alta demanda de viajes de negocios";
            case 4:
                return "Para negocios con viajes esporádicoso poco frecuentes";
            case 5:
                return "Para empresas con viajes de negocios poco frecuentes";
            case 6:
                return "Para alta demanda de viajes de negocios";
        }
    }

    function goToBasicRegister() {
        router.push({
            pathname: "/basic-register",
        });
    }

    function goToDemo() {
        router.push({
            pathname: "/solicitud-demo",
        });
    }

    function switchLeft(period) {
        setIsMonthly(period);
        setFullMemberships(monthlyMemberships);
        //activeSwitch.style.left 						= '0%';
    }

    function switchRight(period) {
        setIsMonthly(period);
        setFullMemberships(annualMemberships);
        //activeSwitch.style.left 						= '50%';
    }

    function setMembership(idMembership) {
        let selectedMembership;

        for (const membership of fullMemberships) {
            if (membership.id_membership === idMembership) {
                selectedMembership = membership;
                break;
            }
        }
        dispatch(setSelectedMembership(selectedMembership));

        router.push({
            pathname: "/basic-register",
            query: {
                id_membership: selectedMembership.id_membership,
                id_package: selectedMembership.id_package,
            },
        });
    }

    return (
        <LandingPageLayout
            title="NOKTOS | Precios"
            description="Conoce los planes que ofrecemos, así como los precios de estos. Puedes personalizar un plan a la medida de las necesidades de tu empresa. Conoce como ahorrar en viajes de negocio."
            keywords="membresías para gestión de viajes, ahorro en viajes de negocio, noches gratis de hotel, administración de viajes corporativos, tokens Noktos, Membresía básica Noktos, membresía Gold Noktos, Membresía platinum Noktos, descuentos en viajes corporativos."
            url="https://www.noktos.com/home/prices/"
            active={2}
        >
            <main>
                <link rel="icon" type="imagen/x-icon" href="/img/luna.png" />
                <div>
                    <Container>
                        <div className="prices__header">
                            <div className="prices__header_container_text">
                                <h1 className="prices__header_title">
                                    Paga tus viajes con Noktos, y congela las
                                    mejores tarifas todo el año.
                                </h1>
                                {/* <h2 className="prices__header_subtitle">Paga siempre <span>2 Noktos por noche</span> <br/> sin importar la temporada del año.</h2> */}

                                <div className="prices__header_benefits">
                                    <p>
                                        <i className="fas fa-check" />{" "}
                                        Regístrate gratis
                                    </p>
                                    <p>
                                        <i className="fas fa-check" />{" "}
                                        Personaliza tu experiencia
                                    </p>
                                    <p>
                                        <i className="fas fa-check" /> Cancela
                                        en cualquier momento
                                    </p>
                                </div>
                            </div>

                            <div className="prices__header_container_image">
                                <img src="/img/prices/header.png" alt="" />
                            </div>
                        </div>
                        <section>
                            <div className="prices__change_period_row">
                                <div className="prices__change_period_wrapper">
                                    <div className="switch-button">
                                        <span
                                            className={`active ${
                                                isMonthly
                                                    ? "switch-start"
                                                    : "switch-end"
                                            }`}
                                        />
                                        <button
                                            onClick={() => switchLeft(true)}
                                            className={`switch-button-case left ${
                                                isMonthly ? "active-case" : ""
                                            }`}
                                        >
                                            Mensual
                                        </button>
                                        <button
                                            onClick={() => switchRight(false)}
                                            className={`switch-button-case right ${
                                                isMonthly === false
                                                    ? "active-case"
                                                    : ""
                                            }`}
                                        >
                                            Anual
                                        </button>
                                    </div>
                                    <img
                                        className="arrow-line"
                                        src="/img/prices/arrow.svg"
                                        alt=""
                                    />
                                    <span className="save-more">
                                        Ahorra hasta un 10%
                                    </span>
                                </div>
                            </div>
                            {fullMemberships && (
                                <div className="prices__memberships_container">
                                    {fullMemberships.map((membership) => (
                                        <FullMembershipCard
                                            membership={membership}
                                            from={0}
                                        />
                                    ))}
                                </div>
                            )}
                        </section>

                        <section className="prices__section_custom_package">
                            <div className="prices__section_custom_package_column">
                                <p className="prices__section_custom_package_text">
                                    Personaliza tu Paquete de Noktos{" "}
                                    <span>
                                        para los miembros de tu empresa.
                                    </span>
                                </p>
                                <p className="prices__section_custom_package_subtext">
                                    Ponte en contacto con nosotros para más
                                    información
                                </p>
                            </div>
                            <div className="prices__section_custom_package_container_image">
                                <img
                                    src="/img/prices/custom_package.png"
                                    alt=""
                                />
                            </div>
                        </section>

                        <section>
                            <h3>Características generales</h3>
                            <div className="membershipBenefits__container">
                                {benefits.length > 0
                                    ? benefits.map((typeOfBenefits) => (
                                          <div>
                                              <div className="row">
                                                  <div className="col-md-6 delete-padding ">
                                                      <div className="membershipBenefits__title">
                                                          <p>
                                                              {
                                                                  typeOfBenefits.nombre
                                                              }
                                                          </p>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-2 delete-padding">
                                                      <div className="membershipBenefits__name_suscription add-borders">
                                                          <p>BÁSICA</p>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-2 delete-padding">
                                                      <div className="membershipBenefits__name_suscription_stripped add-borders">
                                                          <p>PREMIUM</p>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-2 delete-padding">
                                                      <div className="membershipBenefits__name_suscription add-borders">
                                                          <p>PROFESIONAL</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              {typeOfBenefits.beneficios.map(
                                                  (benefits) => (
                                                      <div className="row">
                                                          <div className="col-md-6 add-borders delete-padding">
                                                              <div className="membershipBenefits__benefit">
                                                                  <p>
                                                                      {
                                                                          benefits.nombre
                                                                      }
                                                                  </p>
                                                              </div>
                                                          </div>
                                                          <div className="col-md-2 add-borders">
                                                              <div className="membershipBenefits__check">
                                                                  {benefits.suscripciones.map(
                                                                      (
                                                                          suscription
                                                                      ) =>
                                                                          suscription.id ===
                                                                          1 ? (
                                                                              <i className="fas fa-check" />
                                                                          ) : (
                                                                              ""
                                                                          )
                                                                  )}
                                                              </div>
                                                          </div>
                                                          <div className="col-md-2 add-borders delete-padding">
                                                              <div className="membershipBenefits__check membershipBenefits__cell_stripped">
                                                                  {benefits.suscripciones.map(
                                                                      (
                                                                          suscription
                                                                      ) =>
                                                                          suscription.id ===
                                                                          2 ? (
                                                                              <i className="fas fa-check" />
                                                                          ) : (
                                                                              ""
                                                                          )
                                                                  )}
                                                              </div>
                                                          </div>
                                                          <div className="col-md-2 add-borders">
                                                              <div className="membershipBenefits__check">
                                                                  {benefits.suscripciones.map(
                                                                      (
                                                                          suscription
                                                                      ) =>
                                                                          suscription.id ===
                                                                          3 ? (
                                                                              <i className="fas fa-check" />
                                                                          ) : (
                                                                              ""
                                                                          )
                                                                  )}
                                                              </div>
                                                          </div>
                                                      </div>
                                                  )
                                              )}
                                          </div>
                                      ))
                                    : ""}

                                <div className="row">
                                    <div className="col-md-6 delete-padding "></div>
                                    <div className="col-md-2 delete-padding">
                                        <div className="membershipBenefits__name_suscription ">
                                            <button
                                                className="prices__button_normal btn"
                                                onClick={() => setMembership(1)}
                                            >
                                                Regístrate básica
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-2 delete-padding">
                                        <div className="membershipBenefits__name_suscription ">
                                            <button
                                                className="prices__button_popular btn"
                                                onClick={() => setMembership(2)}
                                            >
                                                Regístrate premium
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-2 delete-padding">
                                        <div className="membershipBenefits__name_suscription ">
                                            <button
                                                className="prices__button_normal btn"
                                                onClick={() => setMembership(3)}
                                            >
                                                Regístrate profesional
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="prices__section_questions">
                            <h3 className="prices__section_custom_package_text">
                                Preguntas Frecuentes{" "}
                            </h3>

                            <div className="prices__section_questions_container">
                                <div className="prices__section_questions_row_blue">
                                    <p className="prices__section_questions_title">
                                        ¿Qué es Noktos?
                                    </p>
                                    <p className="prices__section_questions_text">
                                        NOKTOS es la moneda de pago digital que
                                        democratiza los viajes de negocio.
                                    </p>
                                </div>

                                <div className="prices__section_questions_row">
                                    <p className="prices__section_questions_title">
                                        ¿Por qué Noktos?
                                    </p>
                                    <p className="prices__section_questions_text">
                                        Con Noktos podrás reservar y administrar
                                        tus viajes de negocios de forma
                                        eficiente y económica. Al pagar con
                                        Noktos puedes reservar en cientos de
                                        hoteles con una sola tarifa congelada.
                                        Además tendrás tu facturación en un solo
                                        lugar y toda la información que
                                        necesites en tiempo real para tomar
                                        decisiones sobre tus viajes de negocios.
                                    </p>
                                </div>
                                <div className="prices__section_questions_row_blue">
                                    <p className="prices__section_questions_title">
                                        ¿Para quién es Noktos?
                                    </p>
                                    <p className="prices__section_questions_text">
                                        Noktos esta pensado para administradores
                                        de viajes empresariales, viajeros de
                                        negocio y equipos financieros que
                                        necesitan hacer más fácil la reserva,
                                        gestión y el control de gastos de los
                                        viajes de negocios de una empresa.{" "}
                                    </p>
                                </div>

                                <div className="prices__section_questions_row">
                                    <p className="prices__section_questions_title">
                                        ¿Qué es un Nokto?
                                    </p>
                                    <p className="prices__section_questions_text">
                                        Un Nokto (Token) es el tipo de moneda
                                        con el que pagas la misma tarifa por
                                        noche en cualquier hotel y en cualquier
                                        temporada del año. Una Noche = 2 Noktos
                                    </p>
                                </div>
                                <div className="prices__section_questions_row_blue">
                                    <p className="prices__section_questions_title">
                                        ¿Cómo puedo comprar Noktos?
                                    </p>
                                    <p className="prices__section_questions_text">
                                        Solo regístrate y comienza a disfrutar
                                        de los beneficios.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="prices__section_buy">
                            <h3 className="prices__section_custom_package_text">
                                Adquiere Noktos
                            </h3>
                            <p className="prices__section_custom_package_subtext">
                                y comienza a disfrutar de exclusivos beneficios
                            </p>

                            <div className="prices__section_buy_container_buttons">
                                <button
                                    className="btn generic__button_primary"
                                    onClick={() => goToBasicRegister()}
                                >
                                    Regístrate GRATIS
                                </button>
                                <button
                                    className="btn generic__button_orange"
                                    onClick={() => goToDemo()}
                                >
                                    Solicita una DEMO{" "}
                                </button>
                            </div>
                        </section>

                        <section className="index2__header_gestiona">
                            <div className="col-md-5">
                                <span className="index2__texto_soporte">
                                    <strong>¿CÓMO PODEMOS AYUDARTE?</strong>
                                </span>
                                <br />
                                <span className="index2__texto_soporte index2__texto_soporte_naranja">
                                    SOPORTE 24/7
                                </span>
                                <br />
                                <p className="index2__subtexto_Reserva">
                                    Con nuestro sistema de soporte, siempre
                                    <br />
                                    podrán hablar con un especialista para
                                    <br />
                                    resolver cualquier inconveniente antes,
                                    <br />
                                    durante y después de tu viaje.
                                </p>
                                <span className="index2__llamanosAhora">
                                    Llámanos Ahora
                                </span>
                                <br />
                                <span className="index2__llamanosAhora index2__llamanosAhora_borde">
                                    (800) 666 5867
                                </span>
                            </div>
                            <div className="col-xs-12 col-sm-5">
                                <img src="/img/product/producto6.svg" />
                            </div>
                        </section>

                        {/*                        <section className="prices__section_call_center">
                            <div className="prices__section_call_center_container_text">
                                <p className="prices__section_call_center_title">SOPORTE 24/7</p>
                                <p className="prices__section_call_center_text">Con nuestro sistema de soporte, siemprepodrán hablar con un especialista
                                    pararesolver cualquier inconveniente antes,durante y después de tu viaje. </p>
                                <p className="prices__section_call_center_call">Llámanos Ahora</p>
                                <p className="prices__section_call_center_call_underline">(55) 5252-5455</p>
                            </div>
                            <div className="prices__section_call_center_container_image">
                                <img src="/img/prices/call_center.png" alt=""/>
                            </div>

                        </section>*/}
                    </Container>
                </div>
            </main>
        </LandingPageLayout>
    );
};

export default connect(null)(Prices);
