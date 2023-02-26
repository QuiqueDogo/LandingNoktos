import moment from "moment";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import HotelIcon from "@material-ui/icons/Hotel";
import useMediaQuery from "customHooks/useMediaQuery";
import { getReservations } from "services/reserveService";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useState, useEffect, useCallback, memo } from "react";

const ItemWallet = ({ title, quantity, Icon, buttonLabel, rotateIcon }) => {
  const [isMediaQuery] = useMediaQuery(870);
  return (
    <div
      className={styles.Wallet__item}
      style={{
        boxShadow: isMediaQuery ? "5px 5px 10px #d9d9d9" : 0,
        border: isMediaQuery
          ? "1px solid rgba(196, 196, 196, 0.38)"
          : "2px solid rgba(196, 196, 196, 0.38)",
      }}
    >
      <h3>{title}</h3>
      <div>
        <div>
          <span>{quantity}</span>
          <Icon
            fontSize="large"
            style={{
              transform: rotateIcon ? "rotate(150deg)" : null,
            }}
          />
        </div>
        {
          //TODO Cambiar el false para habilitar
          false && (
            <Button
              disableElevation
              variant="contained"
              style={{
                color: "#fff",
                fontWeight: 600,
                backgroundColor: "#1E2739",
                textTransform: "none",
                borderRadius: 10,
              }}
            >
              {buttonLabel}
            </Button>
          )
        }
      </div>
    </div>
  );
};

const Wallet = () => {
  const [isMediaQuery] = useMediaQuery(870);
  const [reservations, setReservations] = useState(0);
  const { userWallet } = useSelector(({ user }) => user);
  const { company } = useSelector(({ company }) => company);

  const getAllReservations = useCallback(async () => {
    try {
      const endDate = moment().endOf("month").format("YYYY-MM-DD");
      const startDate = moment().startOf("month").format("YYYY-MM-DD");
      const data = {
        endDate,
        startDate,
        typeFilter: 2,
        onlyReserved: 0,
        companyId: company?.id,
      };
      const { data: resp } = await getReservations(data);
      setReservations(resp?.reservaciones?.length);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getAllReservations();
  }, [getAllReservations]);

  const { noktos, centauros } = userWallet;

  return (
    <section className={styles.Wallet}>
      {!isMediaQuery ? (
        <Carousel
          itemsToShow={1}
          itemsToScroll={1}
          pagination={false}
          autoPlaySpeed={2000}
          // enableAutoPlay
          // showArrows={false}
        >
          <ItemWallet
            rotateIcon
            title="Noktos Disponibles"
            quantity={noktos ?? 0}
            Icon={Brightness2Icon}
            buttonLabel="Ver mis Noktos"
          />
          <ItemWallet
            rotateIcon
            title="Centauros Disponibles"
            quantity={centauros ?? 0}
            Icon={Brightness4Icon}
            buttonLabel="Ver mis Centauros"
          />
          <ItemWallet
            title="Reservaciones del mes"
            quantity={reservations}
            Icon={HotelIcon}
            buttonLabel="Ver mis Reservaciones"
          />
        </Carousel>
      ) : (
        <>
          <ItemWallet
            rotateIcon
            title="Noktos Disponibles"
            quantity={noktos ?? 0}
            Icon={Brightness2Icon}
            buttonLabel="Ver mis Noktos"
          />
          <ItemWallet
            rotateIcon
            title="Centauros Disponibles"
            quantity={centauros ?? 0}
            Icon={Brightness4Icon}
            buttonLabel="Ver mis Centauros"
          />
          <ItemWallet
            title="Reservaciones del mes"
            quantity={reservations}
            Icon={HotelIcon}
            buttonLabel="Ver mis Reservaciones"
          />
        </>
      )}
    </section>
  );
};

export default memo(Wallet);
