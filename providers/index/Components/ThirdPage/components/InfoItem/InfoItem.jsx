import { useRouter } from "next/router";
import Stepper from "../Stepper/Stepper";
import styles from "./styles.module.scss";
import useMediaQuery from "customHooks/useMediaQuery";

const InfoItem = ({
    src,
    title,
    idItem,
    isActive,
    redirect,
    description,
    showStepper,
    setItemSelected,
}) => {
    const router = useRouter();
    const [isMedia] = useMediaQuery(1265);

    const handleClick = () => {
        setItemSelected(idItem);
        if (redirect) router.push(redirect);
    };

    return (
        <div
            className={styles.InfoItem}
            onClick={handleClick}
            style={{
                border: isActive ? "2px solid #00c2ff" : "2px solid #fff",
            }}
        >
            <div>
                <span>{idItem}</span>
            </div>
            <div>
                <img
                    alt=""
                    src={`/img/LandingPage/ThirdPage/${src}`}
                    aria-labelledby={title}
                />
            </div>
            <h3 id={title}>{title}</h3>
            <p>{description}</p>
            {isMedia && showStepper && <Stepper />}
        </div>
    );
};

InfoItem.defaultProps = {
    redirect: null,
    isActive: true,
    showStepper: false,
};

export default InfoItem;
