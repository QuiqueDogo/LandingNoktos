import Content from "./Content";
import { getUserWallet } from "services/usersService";
import { useDispatch, useSelector } from "react-redux";
import { setUserWallet } from "redux/actions/userAction";
import { useEffect, useCallback, memo, useState } from "react";

const HeaderLogin = () => {
  const dispatch = useDispatch();
  const [canBuyTokens, setCanBuyTokens] = useState(false);
  const { company } = useSelector(({ company }) => company);
  const userState = useSelector(({ user }) => user);

  const { user, rol, userWallet, reloadUserWallet } = userState;

  const getWallet = useCallback(async () => {
    try {
      const companyId = company?.id;
      const { data } = await getUserWallet(companyId);
      const { saldoMembresia } = data;
      const { saldo_token, saldo_noches_gratis } = saldoMembresia;
      const wallet = {
        noktos: saldo_token,
        centauros: saldo_noches_gratis,
      };
      dispatch(setUserWallet(wallet));
    } catch (err) {
      console.log(err);
    }
  }, [company, reloadUserWallet]);

  const checkPermits = useCallback(() => {
    const moduleShoppings = rol?.modulos?.filter(({ id }) => id === 7);
    if (!moduleShoppings) setCanBuyTokens(false);
    else {
      if (!moduleShoppings.length) setCanBuyTokens(false);
      else {
        const sectionBuyNoktos = moduleShoppings[0].secciones.filter(
          ({ id }) => id === 30
        );
        if (!sectionBuyNoktos.length) setCanBuyTokens(false);
        else {
          const buyAction = sectionBuyNoktos[0].acciones.filter(
            ({ id }) => id === 32
          );
          if (buyAction.length > 0) setCanBuyTokens(true);
        }
      }
    }
  }, [rol]);

  useEffect(() => {
    checkPermits();
  }, [checkPermits]);

  useEffect(() => {
    getWallet();
  }, [getWallet]);

  return (
    <Content user={user} wallet={userWallet} canBuyTokens={canBuyTokens} />
  );
};

export default memo(HeaderLogin);
