import { useRouter } from "next/router";
import LandingPageLayout from "../components/layouts/LandingPageLayout/LandingPageLayout";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import useBasicForm from "../customHooks/useBasicForm";
import validate from "../utils/validations/LandingRegister";
import { hideLoader, showLoader } from "../redux/actions/application";
import axios from "axios";
import { apiRoutes } from "../utils/apiRoutes";
import Swal from "sweetalert2";
import { setBasicConfigurationRequest } from "../utils/requests";
import { connect } from "react-redux";

const UnaNocheGratis = ({ dispatch, company }) => {
    const router = useRouter();
    const host = router.query.host;
    let contactoId;
    let companiaId;
    const {
        handleChange,
        handleSubmit,
        clearForm,
        resetIsSubmiting,
        values,
        errors,
        setValue,
    } = useBasicForm(sendBasicRegister, validate);

    useEffect(() => {
        setValue("id_catalogo_suscripcion", 0);
        setValue("id_catalogo_membresia", 0);
        setValue("rfc", "0");
        sendFirstLead();
    }, []);

    function sendBasicRegister() {
        dispatch(showLoader());
        axios
            .post(
                `${apiRoutes.baseUrl}${apiRoutes.baseCompany}/${apiRoutes.basicRegisterWithEmail}`,
                values,
                setBasicConfigurationRequest()
            )
            .then((response) => {
                dispatch(hideLoader());
                console.log(response);
                if (response.status === 200) {
                    if (
                        response.data.contacto.hasOwnProperty("compania_id") ===
                            true &&
                        response.data.contacto.compania_id !== null
                    ) {
                        resetIsSubmiting();
                        Swal.fire({
                            text: "Ya existe una cuenta con este correo, intenta iniciar sesión o recupera la contraseña de la cuenta.",
                            icon: "warning",
                            confirmButtonText: "Ok",
                        });
                    } else {
                        sendComplementaryRegister(response.data.contacto.id);
                    }
                } else {
                    resetIsSubmiting();
                    Swal.fire({
                        title: "Error",
                        text: "No se pudo realizar el registro",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            })
            .catch((error) => {
                resetIsSubmiting();
                dispatch(hideLoader());
                Swal.fire({
                    title: "Error",
                    text: "No se pudo realizar el registro",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            });
    }

    function sendComplementaryRegister(idContacto) {
        values.contacto_id = idContacto;
        values.catalogo_suscripcion_id = 0;
        values.catalogo_membresia_id = 0;
        dispatch(showLoader());
        axios
            .post(
                `${apiRoutes.baseUrl}${apiRoutes.baseCompany}/${apiRoutes.contact}`,
                values,
                setBasicConfigurationRequest()
            )
            .then((response) => {
                dispatch(hideLoader());
                if (response.status === 200) {
                    clearForm();
                    sendLead(response.data.user_id);
                    separatePromo(response.data.compania_id);
                    contactoId = response.data.contacto_id;
                    companiaId = response.data.compania_id;
                } else {
                    resetIsSubmiting();
                    Swal.fire({
                        title: "Error",
                        text: "No se pudo realizar el registro",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            })
            .catch((error) => {
                dispatch(hideLoader());
                resetIsSubmiting();
                Swal.fire({
                    title: "Error",
                    text: "No se pudo realizar el registro",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            });
    }

    function sendLead(contactoId) {
        let dataRequest = {
            host_id: host,
            campania_id: 1,
            canal_id: 1,
            user_id: contactoId,
        };

        dispatch(showLoader());
        axios
            .post(
                `${apiRoutes.baseUrl}${apiRoutes.lead}`,
                dataRequest,
                setBasicConfigurationRequest()
            )
            .then((response) => {
                dispatch(hideLoader());
            })
            .catch((error) => {
                dispatch(hideLoader());
            });
    }

    function separatePromo(companiaId) {
        let dataRequest = {
            promocode: "1CENTAURO",
            compania_id: companiaId,
            catalogo_suscripcion_id: 0,
            catalogo_membresia_id: 0,
        };

        dispatch(showLoader());
        axios
            .post(
                `${apiRoutes.baseUrl}${apiRoutes.basePromo}${apiRoutes.apart}`,
                dataRequest,
                setBasicConfigurationRequest()
            )
            .then((response) => {
                dispatch(hideLoader());
                if (response.status === 201) {
                    applyPromo(response.data.promocion_apartada.id);
                }
            })
            .catch((error) => {
                dispatch(hideLoader());
            });
    }

    function applyPromo(promoId) {
        let dataRequest = {
            promocion_aplicada_id: promoId,
            card_id: 0,
        };

        dispatch(showLoader());
        axios
            .post(
                `${apiRoutes.baseUrl}${apiRoutes.basePromo}${apiRoutes.apply}`,
                dataRequest,
                setBasicConfigurationRequest()
            )
            .then((response) => {
                dispatch(hideLoader());
                if (response.status === 201) {
                    router.push({
                        pathname: "/schedule",
                        query: {
                            contacto_id: contactoId,
                            compania_id: companiaId,
                            moduleFrom: 1,
                        },
                    });
                }
            })
            .catch((error) => {
                dispatch(hideLoader());
            });
    }

    function sendFirstLead() {
        let dataRequest = {
            host_id: host,
            campania_id: 1,
            canal_id: 1,
        };

        dispatch(showLoader());
        axios
            .post(
                `${apiRoutes.baseUrl}${apiRoutes.lead}`,
                dataRequest,
                setBasicConfigurationRequest()
            )
            .then((response) => {
                dispatch(hideLoader());
                if (response.status === 200) {
                }
            })
            .catch((error) => {
                dispatch(hideLoader());
            });
    }

    return (
        <LandingPageLayout
            title="NOKTOS | Noches Gratis de Hospedaje"
            url="https://www.noktos.com/unanochegratis"
            keywords=""
            description=""
        >
            <main className="una-noche-gratis__main_container">
                <Container>
                    <div className="una-noche-gratis__container_logo">
                        <img src="/img/noktos_logo.svg" alt="" />
                    </div>

                    <section className="una-noche-gratis__section_form">
                        <div className="una-noche-gratis__container_form_title">
                            <i className="fas fa-chevron-right" />{" "}
                            <h2>REGÍSTRATE HOY</h2>
                        </div>
                        <div className="una-noche-gratis__container_form_subtitle">
                            <p>¡Y OBTÉN EL MISMO PRECIO EN TODOS TUS VIAJES!</p>
                        </div>
                        <div className="una-noche-gratis__container_form">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="completebasicregister__input_container">
                                            <label
                                                className="completebasicregister__label_input"
                                                htmlFor="txt-name"
                                            >
                                                Nombre
                                            </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text blue_addon"
                                                        id="txt-name"
                                                    >
                                                        <i className="fas fa-user" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`form-control rounded_input ${
                                                        errors.name &&
                                                        "is-invalid-input"
                                                    }`}
                                                    placeholder="Nombre"
                                                    aria-label="Email"
                                                    aria-describedby="txt-nombre-addon"
                                                    id="txt-nombre"
                                                    name="name"
                                                    onChange={handleChange}
                                                    value={values.name || ""}
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="error-text">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="completebasicregister__input_container">
                                            <label
                                                className="completebasicregister__label_input"
                                                htmlFor="txt-appaterno"
                                            >
                                                Apellido paterno
                                            </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text blue_addon"
                                                        id="txt-appaterno-addon"
                                                    >
                                                        <i className="fas fa-user" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`form-control rounded_input ${
                                                        errors.apellido_paterno &&
                                                        "is-invalid-input"
                                                    }`}
                                                    placeholder="Apellido paterno"
                                                    aria-label="Email"
                                                    aria-describedby="txt-appaterno-addon"
                                                    id="txt-appaterno"
                                                    name="apellido_paterno"
                                                    onChange={handleChange}
                                                    value={
                                                        values.apellido_paterno ||
                                                        ""
                                                    }
                                                />
                                            </div>
                                            {errors.apellido_paterno && (
                                                <p className="error-text">
                                                    {errors.apellido_paterno}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="completebasicregister__input_container">
                                            <label
                                                className="completebasicregister__label_input"
                                                htmlFor="txt-telefono"
                                            >
                                                Correo electrónico
                                            </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text blue_addon"
                                                        id="txt-email-addon"
                                                    >
                                                        @
                                                    </span>
                                                </div>
                                                <input
                                                    type="email"
                                                    className={`form-control rounded_input ${
                                                        errors.correo &&
                                                        "is-invalid-input"
                                                    }`}
                                                    placeholder="Correo electrónico"
                                                    aria-label="Email"
                                                    aria-describedby="txt-email-addon"
                                                    id="txt-email"
                                                    name="correo"
                                                    onChange={handleChange}
                                                    value={values.correo || ""}
                                                />
                                            </div>
                                            {errors.correo && (
                                                <p className="error-text">
                                                    {errors.correo}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="completebasicregister__input_container">
                                            <label
                                                className="completebasicregister__label_input"
                                                htmlFor="txt-telefono"
                                            >
                                                Número telefónico
                                            </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span
                                                        className="input-group-text blue_addon"
                                                        id="txt-telefono-addon"
                                                    >
                                                        <i className="fas fa-phone-alt" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    className={`form-control rounded_input ${
                                                        errors.telefono &&
                                                        "is-invalid-input"
                                                    }`}
                                                    placeholder="Telefono"
                                                    aria-label="Email"
                                                    aria-describedby="txt-telefono-addon"
                                                    id="txt-telefono"
                                                    name="telefono"
                                                    onChange={handleChange}
                                                    value={
                                                        values.telefono || ""
                                                    }
                                                />
                                            </div>
                                            {errors.telefono && (
                                                <p className="error-text">
                                                    {errors.telefono}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="basicregister__button_container">
                                    <button className="btn btn-primary basicregister__button_continue btn-block">
                                        ENVÍAR REGISTRO{" "}
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>

                    <div className="una-noche-gratis__container_title">
                        <h1>
                            CONOCE MÁS SOBRE <span>NOKTOS</span>
                        </h1>
                    </div>

                    <div className="una-noche-gratis__container_row">
                        <div className="una-noche-gratis__container_column_form">
                            <section className="una-noche-gratis__section_benefits">
                                <h2 className="una-noche-gratis__section_benefits_title">
                                    AL PAGAR CON NOKTOS PUEDES:
                                </h2>
                                <div className="una-noche-gratis__container_benefits">
                                    <div className="una-noche-gratis__benefits">
                                        <span className="una-noche-gratis__benefits_number">
                                            1
                                        </span>{" "}
                                        <p class="una-noche-gratis__benefits_text">
                                            <span>CONGELAR</span> LAS TARIFAS DE
                                            TUS VIAJES TODO EL AÑO
                                        </p>
                                    </div>
                                    <div className="una-noche-gratis__benefits">
                                        <span className="una-noche-gratis__benefits_number">
                                            2
                                        </span>{" "}
                                        <p class="una-noche-gratis__benefits_text">
                                            <span>CONTROLAR</span> CADA ASPECTO
                                            DE TU VIAJE EN UNA SOLA PLATAFORMA
                                        </p>
                                    </div>
                                    <div className="una-noche-gratis__benefits">
                                        <span className="una-noche-gratis__benefits_number">
                                            3
                                        </span>{" "}
                                        <p class="una-noche-gratis__benefits_text">
                                            <span>DEDUCIR Y FACTURAR</span> LOS
                                            GASTOS DE TUS VIAJES
                                        </p>
                                    </div>
                                    <div className="una-noche-gratis__benefits">
                                        <span className="una-noche-gratis__benefits_number">
                                            4
                                        </span>{" "}
                                        <p class="una-noche-gratis__benefits_text">
                                            <span>PERSONALIZAR</span> TU
                                            MEMBRESÍA A LAS NECESIDADES DE TU
                                            EMPRESA
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="una-noche-gratis__container_column_video">
                            <figure>
                                <video
                                    src="/videos/landing_video.mp4"
                                    autoPlay={true}
                                    controls={true}
                                    muted={true}
                                />
                            </figure>
                        </div>
                    </div>
                </Container>
            </main>
        </LandingPageLayout>
    );
};

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(UnaNocheGratis);
