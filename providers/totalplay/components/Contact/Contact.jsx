import { useRef, useState } from "react";
import styles from "./style.module.scss";
import { useAnimate } from "customHooks/useAnimate";
import { Button, Slide, TextField } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { connect, useDispatch } from "react-redux";
import { hideLoader, showLoader } from "redux/actions/application";
import{ removeDoubleSpaces }from 'utils/utils'
import Swal from "sweetalert2";
import { registerUserRequest } from "services/authService";
import { useEffect } from "react";
import axios from "axios";

function Contact() {
    const info = useRef();
    const dispatch = useDispatch();
    const container = useRef();
    const [contact, setContact] = useState(null);
    const refContent = useRef(null);
    const [dataRegister, setdataRegister ] = useState({
        email:"",
        nombre:"",
        apellido_paterno:"",
        apellido_materno:"",
        telefono:"",
        rfc:null
    })
    const [dataContact, setdataContact] = useState({
      nombre:"",
      correo:"",
      empresa:"",
      telefono:"",
      asunto:"",
      mensaje:"",
      is_totalplay:true
    })

    const dataRefs = [
        {
            ref: info,
            classes: ["up"],
        },
        
    ];

    useEffect(()=>{
      dispatch(hideLoader())
    },[])
    useAnimate(container, dataRefs);

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        dispatch(showLoader());
        let values = dataContact;

        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        axios
            .post(`https://api.noktos.com/api/zohoCRM/nuevoProspecto`, values, config)
            .then((response) => {
                dispatch(hideLoader());
                if (response.data.res) {
                    // clearForm();

                    Swal.fire({
                        title: "GRACIAS POR CONTACTARNOS HEMOS RECIBIDO TU CORREO",
                        text: `Nos comunicaremos contigo lo más pronto posible`,
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                    setdataContact({
                      nombre:"",
                      correo:"",
                      empresa:"",
                      telefono:"",
                      asunto:"",
                      mensaje:""
                    })
                } else {
                    // resetIsSubmiting();
                    setdataContact({
                      nombre:"",
                      correo:"",
                      empresa:"",
                      telefono:"",
                      asunto:"",
                      mensaje:""
                    })
                    Swal.fire({
                        title: "Error",
                        text: `Error al envíar la información`,
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            })
            .catch((error) => {
                dispatch(hideLoader());
                // resetIsSubmiting();
                Swal.fire({
                  title: "Error",
                  text: `Error al envíar la información`,
                  icon: "error",
                  confirmButtonText: "Ok",
              });
                setdataContact({
                  nombre:"",
                  correo:"",
                  empresa:"",
                  telefono:"",
                  asunto:"",
                  mensaje:""
                })
                console.log(error);
            });
    }
    const handleSubmitRegisterNoktos = (e) =>{
        e.preventDefault();
        let values = {
            email:dataRegister.email,
            name:dataRegister.nombre,
            apellido_paterno:dataRegister.apellido_paterno,
            apellido_materno:dataRegister.apellido_materno,
            telefono:dataRegister.telefono,
            rfc:dataRegister.rfc,
            id_catalogo_suscripcion: 0,
            id_catalogo_membresia: 0,
            is_totalplay:true
          };
          // if (values.rfc === "" || !values.rfc) {
          //   values.rfc = null;
          // }
          // values.id_catalogo_membresia = 0;
          // values.id_catalogo_suscripcion = 0;
          dispatch(showLoader());
      
          let request = {}
      
          const keys = Object.keys(values)
         
          keys.map( key =>{
              request = {
                ...request,
                [key]: removeDoubleSpaces(values[key])
              }
            }
          )
          
          registerUserRequest(request)
          .then((response) => {
            dispatch(hideLoader());
            if (response.status === 200 || response.status === 204) {
              // setloginView(true)
              // clearForm();
              // showOverlay();
              setdataRegister({email:"",nombre:"",apellido_paterno:"", apellido_materno:"",telefono :"",rfc:""});
              Swal.fire({
                title: "¡Enhorabuena!",
                text: "Antes de iniciar sesión revisa tu correo electrónico para confirmar tu cuenta. ",
                icon: "success",
                confirmButtonText: "Continuar",
              });
            } else {
              // resetIsSubmiting();
              Swal.fire({
                title: "Error",
                text: "No se pudo realizar el registro, verifique su información",
                icon: "error",
                confirmButtonText: "Ok",
              });
            }
          })
          .catch((error) => {
            dispatch(hideLoader());
            // resetIsSubmiting();
            // setdataRegister({email:"",nombre:"",apellido_paterno:"", apellido_materno:"",telefono :"",rfc:""})
            try {
              if (error.response !== undefined) {
                let errorMessage = "";
                Object.keys(error.response?.data?.errors).forEach((nameKey) => {
                  if (nameKey === "email") {
                    errorMessage += `Ya existe una cuenta con el correo ingresado, intente recuperar su contraseña \n`;
                  }
                });
                Swal.fire({
                  title: "El correo ya existe",
                  text: `No se pudo realizar el registro, ${errorMessage}`,
                  icon: "warning",
                  confirmButtonText: "Ok",
                });
              } else {
                Swal.fire({
                  title: "Error en el servidor",
                  text: `No se pudo realizar el registro`,
                  icon: "warning",
                  confirmButtonText: "Ok",
                });
              }
            } catch (ex) {
              Swal.fire({
                title: "Error en el servidor",
                text: `No se pudo realizar el registro`,
                icon: "warning",
                confirmButtonText: "Ok",
              });
            }
          });
    }
    const handleChangeRegister = ({target}) => {
        const { value, name } = target;
        setdataRegister({...dataRegister, [name]: value});
    }
    const contactChange = ({target}) =>{
      const  {name , value} = target;
      setdataContact({...dataContact, [name]:value})
    }
  return (
    <section ref={container} className={styles.MainPage}>
        <div className={styles.MainPage__container}>
            <div>
                <Button onClick={()=>setContact(true)} variant="contained" color="primary">Quiero Registrarme</Button>
                <Button onClick={()=>setContact(false)} variant="contained" color="secondary">Quiero Informacion</Button>
            </div>
            <div ref={info}style={{display:"none"}}></div>
            {(contact == true || contact === false) &&
            <div  className={styles.MainPage__container__info}>
                {contact == false &&
                <Slide container={info.current} direction="left" in={!contact}>
                <div style={{width:"100%"}}>
                <ValidatorForm fullWidth onSubmit={handleSubmitRegister}>
                <p>Contacto</p>
                <div className={`row ${styles.content_contact}`}>
                  <div className="col-sm-12 col-md-6">
                    <TextValidator 
                        fullWidth
                        style={{margin:"10px 0"}}
                        label="Nombre"
                        name="nombre"
                        value={dataContact.nombre}
                        onChange={contactChange}
                        variant="outlined"
                        validators={["required"]}
                        errorMessages={[""]}
                        />
                  </div>
                  <div className="col-sm-12 col-md-6">

                    <TextValidator 
                        fullWidth
                        style={{margin:"10px 0"}}
                        label="Correo Electronico"
                        name="correo"
                        value={dataContact.correo}
                        onChange={contactChange}
                        variant="outlined"
                        validators={["required","isEmail"]}
                        errorMessages={["","Email Incorrecto"]}
                        />
                  </div>
                  <div className="col-sm-12 col-md-6">

                    <TextValidator
                      name="telefono"
                        value={dataContact.telefono} 
                        fullWidth
                        style={{margin:"10px 0"}}
                        label="Telefono"
                        onChange={contactChange}
                        variant="outlined"
                        validators={["required"]}
                        errorMessages={[""]}
                        />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <TextValidator 
                    name="empresa"
                        value={dataContact.empresa}
                        fullWidth
                        style={{margin:"10px 0"}}
                        onChange={contactChange}
                        label="Empresa"
                        variant="outlined"
                        validators={["required"]}
                        errorMessages={[""]}
                    />
                    </div>
                    <div className="col-md-12">
                      
                    <TextValidator 
                    name="asunto"
                    value={dataContact.asunto}
                        fullWidth
                        style={{margin:"10px 0"}}
                        label="Asunto"
                        onChange={contactChange}
                        variant="outlined"
                        validators={["required"]}
                        errorMessages={[""]}
                        />
                    </div>
                    <div className="col-md-12">
                    <TextValidator 
                        fullWidth
                        name="mensaje"
                        value={dataContact.mensaje}
                        onChange={contactChange}
                        multiline
                        rows={6}
                        style={{margin:"10px 0"}}
                        label="Mensaje"
                        variant="outlined"
                        validators={["required"]}
                        errorMessages={[""]}
                    />
                    </div>
                </div>
                <Button variant="contained" color="default" type="submit">Enviar</Button>
                </ValidatorForm>
                </div>
                </Slide>
            }
            {contact == true &&
            <Slide in={contact} container={info.current} direction="right">
                  <div >
                  <ValidatorForm fullWidth  onSubmit={handleSubmitRegisterNoktos}>
                    <div className={`row ${styles.content_contact_register}` }>
                    <div className={styles.two_img}>
                        <img src="/img/totalplay.png" alt="noktos" srcset="" />
                        <img src="/img/noktos_logo.png" alt="totalplay" srcset="" />
                    </div>
                    <h4 style={{color:"#00c2ff", margin:0}}>¡Registrate!</h4>
                    <p style={{fontSize:"1rem"}}>Completa tu registro y comienza a disfrutar los beneficios de noktos.</p>
                    <div className="col-md-12 p-1">
                            <TextValidator 
                                fullWidth
                                id="correo_electronico"
                                name="email"
                                
                                label="Correo Electronico"
                                value={dataRegister.email}
                                variant="outlined"
                                onChange={handleChangeRegister}
                                validators={["required","isEmail"]}
                                errorMessages={["","Email Incorrecto"]}
                            />
                        </div>
                        <div className="col-md-6  p-1">
                        <TextValidator 
                                fullWidth
                                id="name"
                                name="nombre"
                                
                                label="Nombre"
                                value={dataRegister.nombre}
                                variant="outlined"
                                onChange={handleChangeRegister}
                                validators={["required"]}
                                errorMessages={[""]}
                            />
                        </div>
                        <div className="col-md-6  p-1">
                        <TextValidator 
                                fullWidth
                                id="apellido_paterno"
                                name="apellido_paterno"
                                
                                label="Apellido Paterno"
                                value={dataRegister.apellido_paterno}
                                variant="outlined"
                                onChange={handleChangeRegister}
                                validators={["required"]}
                                errorMessages={[""]}
                            />   
                        </div>
                        <div className="col-md-6  p-1">
                        <TextValidator 
                                fullWidth
                                id="apellido_materno"
                                name="apellido_materno"
                                
                                label="Apellido Materno"
                                value={dataRegister.apellido_materno}
                                variant="outlined"
                                onChange={handleChangeRegister}
                                validators={["required"]}
                                errorMessages={[""]}
                            />   
                        </div>
                        <div className="col-md-6  p-1">
                        <TextValidator 
                                fullWidth
                                id="Telefono"
                                name="telefono"
                                
                                label="Telefono"
                                value={dataRegister.telefono}
                                variant="outlined"
                                onChange={handleChangeRegister}
                                validators={["required"]}
                                errorMessages={[""]}
                            />   
                        </div>
                <Button variant="contained" color="default" type="submit">Registrarme</Button>
                    </div>
                  </ValidatorForm>
                  </div>
            </Slide>
            }
            </div>
            }
        </div>
    </section>
  )
}

export default Contact