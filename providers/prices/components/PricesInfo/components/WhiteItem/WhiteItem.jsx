import { forwardRef } from "react";
import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import {formatMoney} from "../../../../../../utils/formatMoney";

const InfoItem = ({ boldText, normalText }) => (
  <div className={styles.InfoItem}>
    <div>
      <CheckIcon sx={{ color: "#00C2FF", fontSize: 18 }} />
    </div>
    <div>
      <span>{boldText}</span>
      <span>{normalText}</span>
    </div>
  </div>
);

const buttonStyle = {
  width: "84%",
  padding: "14px 24px",
  color: "#00C2FF",
  fontSize: 14,
  fontWeight: 600,
  backgroundColor: "rgba(0, 194, 255, 0.13)",
  borderRadius: 30,
};

const WhiteItem = ({
                       price_membership,
                       price_membership_month,
                       tokens,
                       nights,
                       discount,
                       name_membership,
                       description,
}) => (
  <div className={styles.WhiteItem}>
    <div className={styles.WhiteItem__title}>
      <span>Membresía</span>
      <span>{name_membership}</span>
    </div>
    <div className={styles.WhiteItem__cost}>
      <div>
          {/*TODO REVISAR*/}
        <label>Costo {formatMoney(price_membership_month*3)}</label>
        <span>¡Próximamente!</span>
      </div>
    </div>
    <div className={styles.WhiteItem__labelText}>
      <p>{description}</p>
    </div>
    <div className={styles.WhiteItem__value}>
      <div>
        <span>{formatMoney(price_membership_month)}/mes</span>
      </div>
      <label>+impuestos (16%)</label>
    </div>
    <div className={styles.WhiteItem__items}>
      <div>
        <InfoItem boldText={`${tokens} Noktos`} normalText="(Tokens)/mes" />
        <InfoItem boldText={`${nights} Centauros`} normalText="gratis/mes" />
        <InfoItem
          boldText={`Descuento del ${discount}%`}
          normalText="en compras directas"
        />
      </div>
    </div>
    <div className={styles.WhiteItem__buyButton}>
      <Button disableElevation variant="contained" style={buttonStyle}>
        Próximamente
      </Button>
      <label>(Costo por Nokto $280.00)</label>
    </div>
  </div>
);

export default WhiteItem;
