import LandingPageLayout from "../../components/layouts/LandingPageLayout/LandingPageLayout";
import React from "react";
import { Accordion, Card, Container } from "react-bootstrap";

export default function Home() {
    const questions = [
        {
            id: 1,
            question: "¿Qué es un Nokto?",
            isMultipleAnswer: false,
            answer: "Es una moneda virtual con la cuál podrás pagar diferentes servicios a un precio preferencial por medio de una membresía, hoy en día hospedaje Nacional, en un futuro, cualquier cosa que puedas imaginar. "
        },
        {
            id: 2,
            question: "¿Cómo funcionan los Noktos?",
            isMultipleAnswer: false,
            answer: "Adquiriendo una membresía tienes acceso a la compra de diferentes paquetes de noktos (moneda virtual) con ello podrás pagar diferentes servicios."
        },
        {
            id: 3,
            question: "¿Cuáles son los servicios y/o beneficios que se ofrecen y hacen la diferencia de los otros?",
            isMultipleAnswer: true,
            answer:"Al ser socio Noktos puedes disfrutar de todas nuestras instalaciones, las cuales ofrecen",
            answers:
                [
                "Tarifas únicas",
                "Atención personalizada 24/7",
                "Facturación inmediata",
                "Control de saldo en tiempo real",
                "Catálogo de hoteles a nivel nacional",
                "Crédito para viajes"]
        },
        {
            id: 4,
            question: "¿Cuál es la compra mínima de Noktos que puedo adquirir?",
            isMultipleAnswer: false,
            answer: "6 Noktos"
        },
        {
            id: 5,
            question: "¿Es necesario utilizar todos los Noktos del paquete adquirido?",
            isMultipleAnswer: false,
            answer: "No, ya que puedes utilizarlas de la forma en que la requieras y en la sede de tu conveniencia"
        },
        {
            id: 6,
            question: "¿Los Noktos son acumulables?",
            isMultipleAnswer: false,
            answer: "Si, puedes adquirirlas y utilizarlas o en caso contrario transferirlas a un tercero, ya que tienen vigencia de un año"
        },
        {
            id: 7,
            question: "¿Qué formas de pago manejan?",
            isMultipleAnswer: false,
            answer: "Transferencia & pago con tarjeta de Débito / Crédito así como Crédito. "
        },
        {
            id: 8,
            question: "¿Se tiene un límite de paquetes para poder adquirir?",
            isMultipleAnswer: false,
            answer: "No se tiene ninguno, estos se pueden comprar acorde a sus necesidades"
        },
        {
            id: 9,
            question: "¿Cómo puedo facturar?",
            isMultipleAnswer: false,
            answer: "Ingresa a la página, inicia sesión, ve al menú de facturación, selecciona la compra que deseas facturar y proporciona tus datos fiscales."
        },
        {
            id: 10,
            question: "¿Quiénes pueden contratar el programa Noktos?",
            isMultipleAnswer: false,
            answer: "Lo pueden contratar tanto personas morales y físicas"
        },
        {
            id: 11,
            question: "¿Se paga algún monto por membresía?",
            isMultipleAnswer: false,
            answer: "Si, el costo de la misma, sin embargo, en ocasiones se tienen promociones donde solamente se paga el monto del paquete que se desee adquirir"
        },
        {
            id: 12,
            question: "¿Cuáles son los pasos para adquirir una membresía con ustedes?",
            isMultipleAnswer: false,
            answer: "Ingresar a la página, registrate, inicia sesión, elige la membresía y realiza el pago correspondiente. En caso de dudas, llamar al 800 666 5867"
        },
        {
            id: 13,
            question: "¿Cómo puedo realizar una reservación?",
            isMultipleAnswer: false,
            answer: "Ingresa a la página, inicia sesión, busca y elige tu hotel y reserva"
        },
        {
            id: 14,
            question: "¿Cómo puedo consultar mi saldo?",
            isMultipleAnswer: false,
            answer: "Ingresa a tu perfil dentro de la página web, selecciona el menú de saldo"
        },
        {
            id: 15,
            question: "¿Cómo puedo cancelar una membresía?",
            isMultipleAnswer: false,
            answer: "Puedes realizarlo en cualquier momento llamando al 800 6 (NOKTOS) 66 5867"
        },
        {
            id: 16,
            question: "Mi tarjeta no pasa/ No puedo pagar en línea",
            isMultipleAnswer: false,
            answer: "Puedes realizar una transferencia bancaria, ingresa a la página y sube tu comprobante de pago"
        },
        {
            id: 17,
            question: "No me ha llegado mi factura",
            isMultipleAnswer: false,
            answer: "Envíanos tus datos a servicioalcliente@noktos.com o llamando al 800 6 (NOKTOS) 66 5867\n"
        },
        {
            id: 18,
            question: "No recibí mi confirmación de mi compra",
            isMultipleAnswer: false,
            answer: "Envíanos tus datos a servicioalcliente@noktos.com o llamando al 800 6 (NOKTOS) 66 5867\n"
        },
        {
            id: 19,
            question: "Tengo dudas con mi saldo de Noktos",
            isMultipleAnswer: false,
            answer: "Envíanos tus datos a servicioalcliente@noktos.com o llamando al 800 6 (NOKTOS) 66 5867\n"
        },
        {
            id: 20,
            question: "En qué establecimientos puedo hacer uso de los Noktos",
            isMultipleAnswer: false,
            answer: "En todos los hoteles afiliados a la red Noktos"
        }
    ]
    return (
        <LandingPageLayout
            title="NOKTOS | Preguntas"
            url="https://www.noktos.com/home/questions/"
        >
            <main>
                <div className="questions_header">
                    <span className="questions_title">
                        Preguntas frecuentes
                    </span>
                </div>
                <Accordion defaultActiveKey="0">
                    <Container>
                        {
                            questions.map(question  => (
                                <React.Fragment>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey={question.id}
                                        className="prueba"
                                    >
                                        <h3 className="h3">
                                            {question.question}
                                        </h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={question.id}>
                                        <Card.Body>
                                            <p>
                                                {question.answer}
                                            </p>
                                            {
                                                question.isMultipleAnswer === true &&
                                                <React.Fragment>
                                                    {
                                                        question.answers.map(answer => <p>-{answer}</p>)
                                                    }
                                                </React.Fragment>
                                            }
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </React.Fragment>
                            ))
                        }
                    </Container>
                </Accordion>
            </main>
        </LandingPageLayout>
    );
}
