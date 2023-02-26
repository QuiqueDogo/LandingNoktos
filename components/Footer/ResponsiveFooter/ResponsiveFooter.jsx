import { memo } from "react";
import Link from "next/link";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import styles from "./styles.module.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    iconMain: {
        color: "#fff",
        marginRight: 8,
        fontSize: "1.5em",
    },
    iconSocial: {
        color: "#fff",
        margin: "0 2.5px",
        fontSize: "1.44em",
    },
});

const ResponsiveFooter = () => {
    const classes = useStyles();
    const { iconMain, iconSocial } = classes;

    return (
        <div className={styles.ResponsiveFooter}>
            <div>
                <div>
                    <Link href="/">
                        <a>
                            <img src="/img/new_logo.svg" alt="Noktos" />
                        </a>
                    </Link>
                    <div>
                        <div>
                            <div>
                                <PhoneIcon classes={{ root: iconMain }} />
                                <span>800 666 5867</span>
                            </div>
                            <div>
                                {/*<TwitterIcon classes={{ root: iconSocial }} />
                                <FacebookIcon classes={{ root: iconSocial }} />
                                <YouTubeIcon classes={{ root: iconSocial }} />*/}
                            </div>
                        </div>
                        <hr />
                        <div>
                            <MailIcon classes={{ root: iconMain }} />
                            <span>contacto@noktos.com</span>
                        </div>
                    </div>
                </div>
                <div>
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
                </div>
            </div>

            <div className={styles.ResponsiveFooter__copy}>
                <span>
                    &copy; {new Date().getFullYear()} Noktos. Todos los derechos
                    reservados
                </span>
            </div>
        </div>
    );
};

export default memo(ResponsiveFooter);
