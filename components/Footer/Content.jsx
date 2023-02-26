import { memo } from "react";
import Link from "next/link";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import styles from "./styles.module.scss";

const IconStyle = {
  fontSize: "22px",
  color: "#19212c",
};

const Content = () => (
  <div className={styles.Footer__container}>
    <footer className={styles.Footer}>
      <section className={styles.Footer__bottom}>
        <div className={styles.Footer__bottom__logo}>
          <Link href="/">
            <a>
              <img src="/img/noktos_logo_blanco.svg" alt="Noktos" />
            </a>
          </Link>
        </div>

        {/*<ul>
                    <b>Sobre Noktos</b>
                    <div>
                        <li>
                            <a>Sobre Noktos</a>
                        </li>
                        <li>
                            <a>Trabaja en Noktos</a>
                        </li>
                        <li>
                            <a>Relación con inversionistas</a>
                        </li>
                    </div>
                </ul>*/}

        <ul>
          <b>Confía en nosotros</b>
          <div>
            <li>
              <Link href="/home/questions">
                <a>Preguntas frecuentes</a>
              </Link>
            </li>
            <li>
              <Link href="/home/politics">
                <a>Términos y condiciones</a>
              </Link>
            </li>
            <li>
              <Link href="/home/privacity">
                <a>Aviso de privacidad</a>
              </Link>
            </li>
          </div>
        </ul>

        <ul>
          <b>Contáctanos</b>
          <div>
            <div>
              <PhoneIcon style={{ fontSize: "18px" }} />
              <span style={{ marginLeft: "8px" }}>800 666 58 67</span>
            </div>
            <div>
              <MailIcon style={{ fontSize: "18px" }} />
              <span style={{ marginLeft: "8px" }}>contacto@noktos.com</span>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between mt-3">
            <div
              style={{ width: "30px", height: "30px" }}
              className="bg-white rounded-circle d-flex justify-content-center align-items-center"
            >
              <a href="https://www.instagram.com/noktos_mx/" target="__blank">
                <InstagramIcon color="action" style={IconStyle} />
              </a>
            </div>

            <div
              style={{ width: "30px", height: "30px" }}
              className="bg-white rounded-circle d-flex justify-content-center align-items-center"
            >
              <a href="https://www.facebook.com/Noktos-107831744033188" target="__blank">
                <FacebookIcon color="action" style={IconStyle} />
              </a>
            </div>

            <div
              style={{ width: "30px", height: "30px" }}
              className="bg-white rounded-circle d-flex justify-content-center align-items-center"
            >
              <a href="https://www.linkedin.com/company/noktos" target="__blank">
                <LinkedInIcon color="action" style={IconStyle} />
              </a>
            </div>
          </div>
        </ul>
      </section>
    </footer>
    <div className={styles.Footer__copy}>
      <span>
        &copy; {new Date().getFullYear()} Noktos. Todos los derechos reservados
      </span>
    </div>
  </div>
);

export default memo(Content);
