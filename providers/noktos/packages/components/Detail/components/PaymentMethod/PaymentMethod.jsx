import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setPackagePaymentMethod } from "redux/actions/packagesAction";

const MethodItem = ({ isActive, idItem, text }) => {
  const dispatch = useDispatch();

  const activeStyles = {
    color: `${isActive ? "#00c2ff" : "#161616"}`,
    backgroundColor: `${isActive ? "#fff" : "transparent"}`,
  };

  const handleClick = () => dispatch(setPackagePaymentMethod(idItem));

  return (
    <div
      style={activeStyles}
      onClick={handleClick}
      className={`animate__animated ${
        isActive ? "animate__fadeIn animate__faster" : null
      }`}
    >
      <span>{text}</span>
    </div>
  );
};

const PaymentMethod = () => {
  const { paymentMethod } = useSelector(({ noktosPackages }) => noktosPackages);

  return (
    <div className={styles.PaymentMethod}>
      <label>Elige tu método de pago:</label>
      <div>
        <MethodItem
          idItem={1}
          isActive={paymentMethod === 1}
          text="Tarjeta Débito / Crédito"
        />
        <MethodItem
          idItem={2}
          text="Transferencia"
          isActive={paymentMethod === 2}
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
