import GenericButton from "../GenericButton";
import style from './style.module.scss'
import {useRouter} from "next/router";
const Content = ({size}) => {
    const router = useRouter()
    const goToRegisterCredit  = () => {
        router.replace("solicitud-credito")
    }
    console.log(size)
    return <div className={style.card__container}>
        <div className={size === "sm"? style.circle_sm__center : style.circle_lg__center}/>
        <div className={size === "sm"? style.circle_sm__left : style.circle_lg__left}/>
        <div className="row">
            <div className="col-md-6 d-flex align-content-center justify-content-center">
                <p className={style.text}>¿Necesitas crédito financiero para tu PyMe?</p>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
                <GenericButton text="Solicita el tuyo" buttonClass={style.button} action={() => goToRegisterCredit()}/>
            </div>
        </div>
    </div>
}

export default Content