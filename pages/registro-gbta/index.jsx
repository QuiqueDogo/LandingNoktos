import HomeLayout from '../../components/layouts/HomeLayout/HomeLayout';
import {Col, Container, Form, Row} from "react-bootstrap"
import {Formik} from "formik";
import GenericButton from "components/GenericButton";
import style from "./style.module.scss"
import {hideLoader, showLoader} from "../../redux/actions/application";
import {useDispatch} from "react-redux";
import {registerGbtaLeadRequest} from "../../services/externalServices";
import validator from 'validator';
import Swal from "sweetalert2";

const LandingGBTA = () => {
    let initialValues = {
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        email: "",
        telefono_movil: "",
        tipo_costumer: "0",
        empresa: "",
        puesto: "",
        area: "",
        monto_viaje_anual: "1",
        equipo_especializado_ventas: "0",
        rechazo_ventas_credito: "0",
        independiente_o_cadena: "0",
        servicio_1: false,
        servicio_2: false,
        servicio_3: false,
        servicio_4: false,
        servicio_5: false,
        factores_1: false,
        factores_2: false,
        factores_3: false,
        factores_4: false,
        factores_5: false,
        factores_6: false,
        factores_7: false,
        factores_8: false,
        factores_9: false,
        factores_10: false,
        reservas_1: false,
        reservas_2: false,
        reservas_3: false,
        reservas_4: false,
        ayuda_1: false,
        ayuda_2: false,
        ayuda_3: false,
        ayuda_4: false,
        ayuda_5: false,
        ayuda_6: false,
        ayuda_7: false,
        ayuda_8: false,
        ayudahost_1: false,
        ayudahost_2: false,
        ayudahost_3: false,
        ayudahost_4: false,
        platformtosell_1: false,
        platformtosell_2: false,
        platformtosell_3: false,
        platformtosell_4: false,
        channelmanager_1: false,
        channelmanager_2: false,
        channelmanager_3: false,
        channelmanager_4: false,
        channelmanager_5: false,
    }
    let servicioList = {
        servicio_1: "Vuelos",
        servicio_2: "Hoteles",
        servicio_3: "Autos",
        servicio_4: "Casas / Departamentos",
        servicio_5: "Otros"
    }

    let factoresList = {
        factores_1: "Precio",
        factores_2: "Ubicación",
        factores_3: "Tamaño Habitación",
        factores_4: "Salones",
        factores_5: "Categoría",
        factores_6: "Comisión",
        factores_7: "Restaurante",
        factores_8: "Alberca",
        factores_9: "Desayuno",
        factores_10: "Transportación",
    }


    let reservasList = {
        reservas_1: "OTAS (Expedia/Booking)",
        reservas_2: "Metabuscadores (Kayak, Trivago)",
        reservas_3: "Agencias de viajes",
        reservas_4: "Directo con el proveedor (Hotel, línea aerea)",
    }

    let ayudaList = {
        ayuda_1: "Como agencia de viajes",
        ayuda_2: "Control y administración de los gastos de viaje de la empresa",
        ayuda_3: "Certeza en el gasto (Control de presupuestos)",
        ayuda_4: "Evitar fraudes",
        ayuda_5: "Eficientar la comprobación de gastos (Facturación unificada)",
        ayuda_6: "Ahorrar tiempo y dinero",
        ayuda_7: "Buy Now, Pay Later(Comprar ahora, paga después)",
        ayuda_8: "Línea de crédito para tus viajes",
    }

    let ayudaHostList = {
        ayudahost_1: "Como una fuerza de ventas para incrementar los ingresos",
        ayudahost_2: "Utilizando el botón de 'Pay with Noktos' o 'BNPL' en tu sitio Web",
        ayudahost_3: "Ayudando con factoraje (Pagando las CxC vigentes)",
        ayudahost_4: "Ayudando con una línea de crédito"
    }

    let platformsToSellRoomsList = {
        platformtosell_1: "OTAS(Expedia/Booking)",
        platformtosell_2: "Metabuscadores(Kayak, Trivago)",
        platformtosell_3: "GDS",
        platformtosell_4: "Directo (Página web)",
    }

    let channelManagersList = {
        channelmanager_1: "Siteminder",
        channelmanager_2: "TravelClick",
        channelmanager_3: "Sabre/Synxis",
        channelmanager_4: "Omnibees",
        channelmanager_5: "Otro",
    }

    const dispatch = useDispatch()

    let onSubmit = (values, { resetForm }) => {
        let servicio = []
        let factores = []
        let reservas = []
        let ayuda = []
        let platformToSell = []
        let channelManager = []

        for (let key in values) {
            let typeInput = key.split("_")[0]
            switch (typeInput) {
                case "servicio":
                    if (values[key] === true) {
                        servicio.push(servicioList[key])
                    }
                    break
                case "factores":
                    if (values[key] === true) {
                        factores.push(factoresList[key])
                    }
                    break
                case "reservas":
                    if (values[key] === true) {
                        reservas.push(reservasList[key])
                    }
                    break
                case "ayuda":
                    if (values[key] === true) {
                        ayuda.push(ayudaList[key])
                    }
                    break
                case "ayudahost":
                    if (values[key] === true) {
                        ayuda.push(ayudaHostList[key])
                    }
                    break
                case "platformtosell":
                    if (values[key] === true) {
                        platformToSell.push(platformsToSellRoomsList[key])
                    }
                    break
                case "channelmanager":
                    if (values[key] === true) {
                        channelManager.push(channelManagersList[key])
                    }
                    break
            }
        }

        let dataRequest = {}

        dataRequest.nombre = values.nombre
        dataRequest.apellido_paterno = values.apellido_paterno
        dataRequest.apellido_materno = values.apellido_materno
        dataRequest.email = values.email
        dataRequest.telefono_movil = values.telefono_movil
        dataRequest.tipo_costumer = values.tipo_costumer
        dataRequest.empresa = values.empresa
        dataRequest.puesto = values.puesto
        dataRequest.area = values.area
        dataRequest.monto_viaje_anual = values.monto_viaje_anual
        dataRequest.servicio_utiliza_viaje = servicio.join("-")
        dataRequest.factores_selecion_hotel = factores.join("-")
        dataRequest.reservas_atraves_de = reservas.join("-")
        dataRequest.ayuda_noktos = ayuda.join("-")

        dataRequest.plataforma_venta_habitaciones = platformToSell.join("-")
        dataRequest.equipo_especializado_ventas = values.equipo_especializado_ventas //->radio
        dataRequest.rechazo_ventas_credito = values.rechazo_ventas_credito //->radio
        dataRequest.channel_manager = channelManager.join("-")
        dataRequest.independiente_o_cadena = values.independiente_o_cadena //->radio

        if(values.tipo_costumer === "0"){
            if(servicio.length === 0 || factores.length === 0 || reservas.length === 0 || ayuda.length === 0){
                Swal.fire({
                    title: "Registro noktos",
                    text: `Seleccione todas las opciones del formulario`,
                    icon: "warning",
                    confirmButtonText: "Aceptar",
                });
            }else{
                registerCustomer(dataRequest, resetForm)
            }
        }else{
            if(ayuda.length === 0 || platformToSell.length === 0 || channelManager.length === 0){
                Swal.fire({
                    title: "Registro noktos",
                    text: `Seleccione todas las opciones del formulario`,
                    icon: "warning",
                    confirmButtonText: "Aceptar",
                });
            }else{
                registerCustomer(dataRequest, resetForm)
            }
        }


    }

    let validateForm = (values) => {
        let errors = {}

        if (!values.nombre) {
            errors.nombre = "Ingrese un nombre"
        }

        if (!values.apellido_paterno) {
            errors.apellido_paterno = "Ingrese un apellido"
        }

        if(values.telefono_movil){
            if(validator.isNumeric(values.telefono_movil)){
                if(values.telefono_movil.length < 10){
                    errors.telefono_movil = "Ingrese un teléfono válido"
                }
            }else{
                errors.telefono_movil = "Ingrese un teléfono válido"
            }
        }

        if (!values.email) {
            errors.email = "Ingrese un email"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'El correo no es válido'
        }

        if (!values.empresa) {
            errors.empresa = "Ingrese el nombre de la empresa"
        }

        return errors
    }

    const registerCustomer = async (dataRequest, resetForm) => {
        try {
            dispatch(showLoader())
            let response = await registerGbtaLeadRequest(dataRequest)
            Swal.fire({
                title: "Registro Noktos",
                text: `Muchas gracias por registrarte, en los próximos días un ejecutivo de Noktos te estará contactando.`,
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            resetForm()
        } catch (error) {
            let errorText = ""
            if(error?.response?.data?.errors.hasOwnProperty("email")){
                if(error?.response?.data?.errors?.email[0] === "The email has already been taken."){
                    errorText = "El correo electrónico ingresado ya está registrado, ingrese uno diferente e intente de nuevo"
                }
            }
            Swal.fire({
                title: "Registro noktos",
                text: `No se pudo finalizar su registro\n ${errorText}`,
                icon: "warning",
                confirmButtonText: "Aceptar",
            });
            console.log(error)
        } finally {
            dispatch(hideLoader())
        }
    }

    return (
        <HomeLayout>
            <Container>
                <Row className='my-3'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h3 className={`${style.title_page} mt-3`}>Regístrate y Gana</h3>
                        <h3 className={`${style.subtitle_page} mt-3`}>2 noktos</h3>
                        <h3 className={`${style.text_page} mt-3`}>en tu próximo viaje*</h3>
                        <h3 className={`${style.small_text} mt-3`}>en la compra de 1 paquete de 6 noktos*</h3>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validate={validateForm}>
                            {({ handleSubmit, values, errors, handleChange, handleBlur }) => (
                                <form onSubmit={handleSubmit} className={`${style.form_register} mt-5`}>
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-group search_hotel__input_container">
                                                <label htmlFor="exampleInputEmail1">Nombre
                                                    <span className="generic__required_input">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text blue_addon"
                                                        ><i className="fas fa-user" /></span>
                                                    </div>
                                                    <input type="text"
                                                        className={`form-control rounded_input`}
                                                        placeholder="Nombre"
                                                        onChange={handleChange}
                                                        required
                                                        name="nombre"
                                                        onBlur={handleBlur}
                                                        value={values.nombre} />
                                                </div>
                                                {errors.nombre && (
                                                    <p className="error-text">{errors.nombre}</p>
                                                )}
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-group search_hotel__input_container">
                                                <label htmlFor="exampleInputEmail1">Apellido paterno
                                                    <span className="generic__required_input">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text blue_addon"
                                                        ><i className="fas fa-user" /></span>
                                                    </div>
                                                    <input type="text"
                                                        className={`form-control rounded_input`}
                                                        placeholder="Apellido paterno"
                                                        onChange={handleChange}
                                                        name="apellido_paterno"
                                                        required
                                                        onBlur={handleBlur}
                                                        value={values.apellido_paterno} />
                                                </div>
                                                {errors.apellido_paterno && (
                                                    <p className="error-text">{errors.apellido_paterno}</p>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-group search_hotel__input_container">
                                                <label htmlFor="exampleInputEmail1">Apellido materno
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text blue_addon"
                                                        ><i className="fas fa-user" /></span>
                                                    </div>
                                                    <input type="text"
                                                        className={`form-control rounded_input`}
                                                        placeholder="Apellido materno"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="apellido_materno"
                                                        value={values.apellido_materno} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-group search_hotel__input_container">
                                                <label htmlFor="exampleInputEmail1">Correo electrónico
                                                    <span className="generic__required_input">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text blue_addon"
                                                        ><i className="fas fa-user" /></span>
                                                    </div>
                                                    <input type="email"
                                                        className={`form-control rounded_input`}
                                                        placeholder="Correo electrónico"
                                                        onChange={handleChange}
                                                        required
                                                        onBlur={handleBlur}
                                                        name="email"
                                                        value={values.email} />
                                                </div>
                                                {errors.email && (
                                                    <p className="error-text">{errors.email}</p>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-group search_hotel__input_container">
                                                <label htmlFor="exampleInputEmail1">Teléfono personal
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text blue_addon"
                                                        ><i className="fas fa-user" /></span>
                                                    </div>
                                                    <input type="text"
                                                        className={`form-control rounded_input`}
                                                        placeholder="Teléfono personal"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="telefono_movil"
                                                        value={values.telefono_movil} />
                                                </div>
                                                {errors.telefono_movil && (
                                                    <p className="error-text">{errors.telefono_movil}</p>
                                                )}
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-group search_hotel__input_container">
                                                <label htmlFor="exampleInputEmail1">Empresa
                                                    <span className="generic__required_input">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text blue_addon"
                                                        ><i className="fas fa-user" /></span>
                                                    </div>
                                                    <input type="text"
                                                        className={`form-control rounded_input`}
                                                        placeholder="Empresa"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                        name="empresa"
                                                        value={values.empresa} />
                                                </div>
                                                {errors.empresa && (
                                                    <p className="error-text">{errors.empresa}</p>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-group search_hotel__input_container">
                                                <label htmlFor="exampleInputEmail1">Puesto
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text blue_addon"
                                                        ><i className="fas fa-user" /></span>
                                                    </div>
                                                    <input type="text"
                                                        className={`form-control rounded_input`}
                                                        placeholder="Puesto"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="puesto"
                                                        value={values.puesto} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-group search_hotel__input_container">
                                                <label htmlFor="exampleInputEmail1">Área
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text blue_addon"
                                                        ><i className="fas fa-user" /></span>
                                                    </div>
                                                    <input type="text"
                                                        className={`form-control rounded_input`}
                                                        placeholder="Área"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="area"
                                                        value={values.area} />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='mt-5'>
                                        <p className={style.title_section}>Déjanos conocer un poco más de tí</p>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col md={6}>
                                            <p className={style.title}>¿Qué tipo de usuario eres?</p>
                                            <Form.Check id="rb-type-v" type="radio" name="tipo_costumer" label="Viajero"
                                                        value="0" checked={values.tipo_costumer === "0"}
                                                        onChange={handleChange}/>
                                            <Form.Check id="rb-type-h" type="radio" name="tipo_costumer"
                                                        label="Hotelero" value="1"
                                                        checked={values.tipo_costumer === "1"} onChange={handleChange}/>
                                        </Col>
                                    </Row>
                                    {
                                        values.tipo_costumer === "0" &&
                                        <>
                                            <Row className='mt-4'>
                                                <Col md={6}>
                                                    <div>
                                                        <p className={style.title}>¿Cuál es el monto que utilizan en viajes de forma anual?</p>
                                                        <Form.Check id="cb-mon-1" type="radio" name="monto_viaje_anual" label="Menor a 400,000 MXN" value="1" checked={values.monto_viaje_anual === "1"} onChange={handleChange} />
                                                        <Form.Check id="cb-mon-2" type="radio" name="monto_viaje_anual" label="De 400,000 a 2,000,000 MXN" value="2" checked={values.monto_viaje_anual === "2"} onChange={handleChange} />
                                                        <Form.Check id="cb-mon-3" type="radio" name="monto_viaje_anual" label="De 2,000,000 a 7,000,000 MXN" value="3" checked={values.monto_viaje_anual === "3"} onChange={handleChange} />
                                                        <Form.Check id="cb-mon-4" type="radio" name="monto_viaje_anual" label="De 7,000,000 a 10,000,000 MXN" value="4" checked={values.monto_viaje_anual === "4"} onChange={handleChange} />
                                                        <Form.Check id="cb-mon-5" type="radio" name="monto_viaje_anual" label="Mayor a 10,000,000 MXN" value="5" checked={values.monto_viaje_anual === "5"} onChange={handleChange} />
                                                    </div>
                                                </Col>
                                                <Col md={6} className="mt-4 mt-md-0">
                                                    <div>
                                                        <p className={style.title}>¿Qué servicios utilizas en tus viajes?</p>
                                                        <Form.Check id="cb-serv-1" name="servicio_1" type="checkbox" label="Vuelos" checked={values.servicio_1} onChange={handleChange} />
                                                        <Form.Check id="cb-serv-2" name="servicio_2" type="checkbox" label="Hoteles" checked={values.servicio_2} onChange={handleChange} />
                                                        <Form.Check id="cb-serv-3" name="servicio_3" type="checkbox" label="Autos" checked={values.servicio_3} onChange={handleChange} />
                                                        <Form.Check id="cb-serv-4" name="servicio_4" type="checkbox" label="Casas / Departamentos" checked={values.servicio_4} onChange={handleChange} />
                                                        <Form.Check id="cb-serv-5" name="servicio_5" type="checkbox" label="Otros" checked={values.servicio_5} onChange={handleChange} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <div className='mt-4'>
                                                        <p className={style.title}>¿Cuáles son los factores que determinan tu selección del Hotel?</p>
                                                        <Form.Check id="cb-fac-1" name="factores_1" type="checkbox" label="Precio" checked={values.factores_1} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-2" name="factores_2" type="checkbox" label="Ubicación" checked={values.factores_2} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-3" name="factores_3" type="checkbox" label="Tamaño Habitación" checked={values.factores_3} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-4" name="factores_4" type="checkbox" label="Salones" checked={values.factores_4} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-5" name="factores_5" type="checkbox" label="Categoría" checked={values.factores_5} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-6" name="factores_6" type="checkbox" label="Comisión" checked={values.factores_6} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-7" name="factores_7" type="checkbox" label="Restaurante" checked={values.factores_7} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-8" name="factores_8" type="checkbox" label="Alberca" checked={values.factores_8} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-9" name="factores_9" type="checkbox" label="Desayuno " checked={values.factores_9} onChange={handleChange} />
                                                        <Form.Check id="cb-fac-10" name="factores_10" type="checkbox" label="Transportación" checked={values.factores_10} onChange={handleChange} />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className='mt-4'>
                                                        <p className={style.title}>¿Tus reservas las realizas a través de?</p>
                                                        <Form.Check id="cb-ota-1" name="reservas_1" type="checkbox" label="OTAS (Expedia/Booking)" checked={values.reservas_1} onChange={handleChange} />
                                                        <Form.Check id="cb-ota-2" name="reservas_2" type="checkbox" label="Metabuscadores (Kayak, Trivago)" checked={values.reservas_2} onChange={handleChange} />
                                                        <Form.Check id="cb-ota-3" name="reservas_3" type="checkbox" label="Agencias de viajes" checked={values.reservas_3} onChange={handleChange} />
                                                        <Form.Check id="cb-ota-4" name="reservas_4" type="checkbox" label="Directo con el proveedor (Hotel, línea aérea)" checked={values.reservas_4} onChange={handleChange} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <p className={`${style.title} mt-4`}>¿Cómo te puede ayudar Noktos?</p>
                                            <Row>
                                                <Col md={6}>
                                                    <div>
                                                        <p className={style.title}>Productos comerciales</p>
                                                        <Form.Check id="cb-pc-1" name="ayuda_1" type="checkbox" label="Como agencia de viajes" checked={values.ayuda_1} onChange={handleChange} />
                                                        <Form.Check id="cb-pc-2" name="ayuda_2" type="checkbox" label="Control y administración de los gastos de viaje de la empresa" checked={values.ayuda_2} onChange={handleChange} />
                                                        <Form.Check id="cb-pc-3" name="ayuda_3" type="checkbox" label="Certeza en el gasto (Control de presupuestos)" checked={values.ayuda_3} onChange={handleChange} />
                                                        <Form.Check id="cb-pc-4" name="ayuda_4" type="checkbox" label="Evitar fraudes" checked={values.ayuda_4} onChange={handleChange} />
                                                        <Form.Check id="cb-pc-5" name="ayuda_5" type="checkbox" label="Eficientar la comprobación de gastos (Facturación unificada)" checked={values.ayuda_5} onChange={handleChange} />
                                                        <Form.Check id="cb-pc-6" name="ayuda_6" type="checkbox" label="Ahorrar tiempo y dinero" checked={values.ayuda_6} onChange={handleChange} />
                                                    </div>
                                                </Col>
                                                <Col md={6} className="mt-4 mt-md-0">
                                                    <div>
                                                        <p className={style.title}>Productos financieros</p>
                                                        <Form.Check id="cb-pf-1" name="ayuda_7" type="checkbox"
                                                                    label="Buy Now, Pay Later(Comprar ahora, paga después)"
                                                                    checked={values.ayuda_7} onChange={handleChange}/>
                                                        <Form.Check id="cb-pf-2" name="ayuda_8" type="checkbox"
                                                                    label="Línea de crédito para tus viajes"
                                                                    checked={values.ayuda_8} onChange={handleChange}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </>
                                    }
                                    {
                                        values.tipo_costumer === "1" &&
                                        <>
                                            <Row className='mt-4'>
                                                <Col md={6}>
                                                    <div>
                                                        <p className={style.title}>¿Cuentas con un equipo especializado
                                                            en ventas?</p>
                                                        <Form.Check id="cb-team-1" type="radio"
                                                                    name="equipo_especializado_ventas" label="Sí"
                                                                    value="1"
                                                                    checked={values.equipo_especializado_ventas === "1"}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-team-2" type="radio"
                                                                    name="equipo_especializado_ventas" label="No"
                                                                    value="0"
                                                                    checked={values.equipo_especializado_ventas === "0"}
                                                                    onChange={handleChange}/>
                                                    </div>
                                                </Col>
                                                <Col md={6} className="mt-4 mt-md-0">
                                                    <div>
                                                        <p className={style.title}>¿Has rechazado clientes por que te
                                                            solicitan crédito para sus reservaciones?</p>
                                                        <Form.Check id="cb-reject-1" type="radio"
                                                                    name="rechazo_ventas_credito" label="Sí" value="1"
                                                                    checked={values.rechazo_ventas_credito === "1"}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-reject-2" type="radio"
                                                                    name="rechazo_ventas_credito" label="No" value="0"
                                                                    checked={values.rechazo_ventas_credito === "0"}
                                                                    onChange={handleChange}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className='mt-4'>
                                                <Col md={6}>
                                                    <div>
                                                        <p className={style.title}>¿Eres hotel independiente o
                                                            cadena?</p>
                                                        <Form.Check id="cb-independent-1" type="radio"
                                                                    name="independiente_o_cadena"
                                                                    label="Independiente 1 a 3 hoteles" value="0"
                                                                    checked={values.independiente_o_cadena === "0"}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-independent-2" type="radio"
                                                                    name="independiente_o_cadena"
                                                                    label="Independiente 4 o más hoteles" value="1"
                                                                    checked={values.independiente_o_cadena === "1"}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-independent-3" type="radio"
                                                                    name="independiente_o_cadena"
                                                                    label="Independiente 4 o más hoteles" value="2"
                                                                    checked={values.independiente_o_cadena === "2"}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-independent-4" type="radio"
                                                                    name="independiente_o_cadena"
                                                                    label="Cadena de 11 a 20 hoteles" value="3"
                                                                    checked={values.independiente_o_cadena === "3"}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-independent-5" type="radio"
                                                                    name="independiente_o_cadena"
                                                                    label="Cadena más de 20 hoteles" value="4"
                                                                    checked={values.independiente_o_cadena === "4"}
                                                                    onChange={handleChange}/>
                                                    </div>
                                                </Col>
                                                <Col md={6} className="mt-4 mt-md-0">
                                                    <div>
                                                        <p className={style.title}>¿Qué plataformas utilizas para vender
                                                            tus habitaciones?</p>
                                                        <Form.Check id="cb-psell-1" name="platformtosell_1"
                                                                    type="checkbox"
                                                                    label="OTAS(Expedia/Booking)"
                                                                    checked={values.platformtosell_1}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-psell-2" name="platformtosell_2"
                                                                    type="checkbox"
                                                                    label="Metabuscadores(Kayak, Trivago)"
                                                                    checked={values.platformtosell_2}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-psell-3" name="platformtosell_3"
                                                                    type="checkbox" label="GDS"
                                                                    checked={values.platformtosell_3}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-psell-4" name="platformtosell_4"
                                                                    type="checkbox" label="Directo (Página web)"
                                                                    checked={values.platformtosell_4}
                                                                    onChange={handleChange}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className='mt-4'>
                                                <Col md={6}>
                                                    <div>
                                                        <p className={style.title}>¿Qué Channel Manager utilizas para el
                                                            manejo de las tarifas?</p>
                                                        <Form.Check id="cb-cm-1" name="channelmanager_1" type="checkbox"
                                                                    label="Siteminder"
                                                                    checked={values.channelmanager_1}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-cm-2" name="channelmanager_2" type="checkbox"
                                                                    label="TravelClick"
                                                                    checked={values.channelmanager_2}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-cm-3" name="channelmanager_3" type="checkbox"
                                                                    label="Sabre/Synxis"
                                                                    checked={values.channelmanager_3}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-cm-4" name="channelmanager_4" type="checkbox"
                                                                    label="Omnibees" checked={values.channelmanager_4}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-cm-5" name="channelmanager_5" type="checkbox"
                                                                    label="Otro" checked={values.channelmanager_5}
                                                                    onChange={handleChange}/>
                                                    </div>
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <div>
                                                        <p className={`${style.title} mt-4`}>¿Cómo te puede ayudar
                                                            Noktos?</p>
                                                        <Form.Check id="cb-pfh-1"
                                                                    name="ayudahost_1"
                                                                    type="checkbox"
                                                                    label="Como una fuerza de ventas para incrementar los ingresos"
                                                                    checked={values.ayudahost_1}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-pfh-2"
                                                                    name="ayudahost_2"
                                                                    type="checkbox"
                                                                    label="Utilizando el botón de 'Pay with Noktos' o 'BNPL' en tu sitio Web"
                                                                    checked={values.ayudahost_2}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-pfh-3"
                                                                    name="ayudahost_3"
                                                                    type="checkbox"
                                                                    label="Ayudando con factoraje (Pagando las CxC vigentes)"
                                                                    checked={values.ayudahost_3}
                                                                    onChange={handleChange}/>
                                                        <Form.Check id="cb-pfh-4"
                                                                    name="ayudahost_4"
                                                                    type="checkbox"
                                                                    label="Ayudando con una línea de crédito"
                                                                    checked={values.ayudahost_4}
                                                                    onChange={handleChange}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </>
                                    }
                                    <Row className="mt-5">
                                        <Col md={{ span: 4, offset: 4 }}>
                                            <GenericButton
                                                text="Finalizar"
                                                buttonClass="generic__button_blue btn-block" />
                                        </Col>
                                    </Row>
                                </form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </HomeLayout>
    )
}

export default LandingGBTA