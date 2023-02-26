import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import {formatMoney} from "../../../../../../utils/formatMoney";

const buttonStyle = {
  width: "95%",
  padding: "12px 32px",
  color: "#fff",
  fontSize: 15,
  fontWeight: 600,
  backgroundColor: "#000",
  borderRadius: 30,
  textTransform: "none",
};

const BlueItem = ({ price_membership, name_membership, description, description_extra, fromScreen }) => {
  const router = useRouter();

  const callbackFlow = () => {

    if(fromScreen === 1){
      window.open("https://www.app.noktos.com/register/", "_blank")
    }else{
      router.push("/buy-tokens")
    }
  }

  return (
    <div className={styles.BlueItem}>
      <div>
        <div className={styles.BlueItem__morePopular}>
          <div>
            <span>MÁS POPULAR</span>
          </div>
        </div>
        <div className={styles.BlueItem__title}>
          <span>Membresía</span>
          <span>{name_membership}</span>
        </div>
        <div className={styles.BlueItem__cost}>
          <div>
            <label>Costo {formatMoney(price_membership)}</label>
            <span>¡Disfruta por hoy!</span>
          </div>
        </div>
        <div className={styles.BlueItem__labelText}>
          <p>{description}</p>
        </div>
        <div className={styles.BlueItem__buyButton}>
          <Button
            variant="contained"
            style={buttonStyle}
            onClick={() => callbackFlow()}
          >
            {
              fromScreen === 1?
              "Regístrate Gratis"
                : "Comprar noktos"
            }
          </Button>
        </div>
        <div className={styles.BlueItem__labelText2}>
          <p>{description_extra}</p>
        </div>
      </div>
      <div className={styles.BlueItem__finalLabel}>
        <label>(Costo por Nokto $280.00)</label>
      </div>
    </div>
  );
};

export default BlueItem;
