import LandingPageLayout from "../../components/layouts/LandingPageLayout/LandingPageLayout";
import React from "react";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <LandingPageLayout
      title="NOKTOS | Privacidad"
      url="https://www.noktos.com/home/privacity/"
    >
      <main>
        <section>
          <div className="privacity_header">
            <span className="privacity_title">Aviso de privacidad</span>
          </div>
          <div className="col-xs-12 col-sm-9 privacity_container">
            <p className="privacity_textop">
              La protección de datos personales es un derecho preservado por
              nuestra Constitución que implica que a toda persona se le debe
              garantizar que el tratamiento de su información personal en manos
              de terceros, siempre será legítimo, controlado e informado, además
              de que deberá salvaguardar su privacidad y el derecho a la
              autodeterminación informativa.
            </p>

            {/* <span className="privacity_textospan">
              Identificación del Responsable
            </span> */}
            <p className="privacity_textop">
              Para satisfacer a cabalidad los extremos de amparo aludidos, la
              Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares (LFPDPPP) prevé, como norma encargada de regular esta
              materia, una serie de principios y obligaciones, de entre las que
              sobresale una por su importancia: el aviso de privacidad.
            </p>

            <p className="privacity_textop">
              Dicho aviso es un documento físico, electrónico o de cualquier
              otro formato creado por el responsable, puesto a disposición del
              titular para informarle qué datos le son recabados y con qué
              fines.
            </p>

            <p className="privacity_textop">
              Como se aprecia, tal documento es pináculo en la protección de los
              datos personales, porque permite que el titular esté informado
              sobre los datos que se le están pidiendo y para qué. Así mismo se
              establece y delimita el alcance, los términos y las condiciones a
              que sujetará su tratamiento, para que este, en el ejercicio de su
              derecho a la autodeterminación informativa, tome decisiones
              conscientes en relación con su información, y además, mantenga el
              control y disposición sobre la misma.
            </p>

            <p className="privacity_textop">
              No obstante la importancia del tema, y de las fuertes multas
              aplicables por el incumplimiento a las disposiciones, las personas
              físicas o morales siguen sin cumplirlas o desconocen su alcance.
            </p>

            <ul>
              <li className="privacity_textop">
                identidad y el domicilio del responsable{" "}
              </li>
              <li className="privacity_textop">finalidad del tratamiento </li>
              <li className="privacity_textop">
                opciones y los canales que el responsable ofrezca para limitar
                el uso o divulgación{" "}
              </li>
              <li className="privacity_textop">
                medios para ejercer los derechos de acceso, rectificación,
                cancelación u oposición (ARCO){" "}
              </li>
              <li className="privacity_textop">
                transferencias de datos, de existir, y{" "}
              </li>
              <li className="privacity_textop">
                procedimiento y medio por el cual el responsable comunicará a
                los titulares de cambios al aviso{" "}
              </li>
            </ul>

            <p className="privacity_textop">
              Adicionalmente, este documento debe exhibirse en el momento
              oportuno, pues dada la finalidad del aviso de privacidad es lógico
              que el titular lo tenga a su disposición en el mismo momento en el
              que proporcione sus datos personales.
            </p>

            <p className="privacity_textop">
              Entonces, la oportunidad en la que se proporciona el aviso de
              privacidad depende tanto de la forma en que se obtengan los datos
              personales, como de si se allegaron de ellos de forma directa o
              indirecta. Si se obtuvieron:
            </p>

            <ul>
              <li className="privacity_textop">
                de forma personal del titular, el aviso de privacidad será
                facilitado en el momento en que se recaba el dato de forma clara
                y fehaciente, a través de los formatos por los que se consiguen,
                salvo que aquel se hubiese facilitado con anterioridad{" "}
              </li>
              <li className="privacity_textop">
                directamente del titular por cualquier medio electrónico,
                óptico, sonoro, visual u otra tecnología, el responsable
                proporcionará al titular de manera inmediata, al menos la
                información referente a su identidad y domicilio, así como la
                finalidad del tratamiento; de igual modo le comunicará en dónde
                puede consultar el texto completo, y de forma indirecta del
                titular, y si el tratamiento:
              </li>
              <ul>
                <li className="privacity_textop">
                  involucra el contacto directo con este, el citado aviso se
                  debe proporcionar al primer contacto que se tenga{" "}
                </li>
                <li className="privacity_textop">
                  no requiere ese contacto, es obligatorio exhibir el referido
                  aviso de forma previa al uso de los datos personales, y los
                  mecanismos que el responsable ofrece para que el titular
                  conozca el aviso de privacidad completo{" "}
                </li>
              </ul>
            </ul>

            <p className="privacity_textop">
              No lo olvide que incumplir con el aviso de privacidad le puede
              costar una multa que oscilará desde los 7 mil 304 hasta los 11
              millones 686 mil 400 pesos.{" "}
            </p>
          </div>
        </section>
      </main>
    </LandingPageLayout>
  );
}
