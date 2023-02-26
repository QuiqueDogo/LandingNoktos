import Content from "./page";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback, useRef } from "react";
import { setPromotion } from "redux/actions/promotionAction";
import { showSavedCards } from "redux/actions/packagesAction";
import { getStripeUserRequest } from "services/stripeService";
import { getCardsOfUserRequest } from "services/stripeService";
import { setSelectedCard } from "redux/actions/packagesAction";
import { hideSelectedCard } from "redux/actions/packagesAction";
import { setNoktosPackages } from "redux/actions/packagesAction";
import { setUserMembership } from "redux/actions/packagesAction";
import { setStripeCardsInfo } from "redux/actions/packagesAction";
import { hideStripeFormCard } from "redux/actions/packagesAction";
import { getCatalogOfTokensRequest } from "services/noktosService";
import { showLoader, hideLoader } from "redux/actions/application";
import { getMembershipOfCompanyRequest } from "services/membershipService";

const NoktosPackages = () => {
  let isMounted = useRef(true);
  const dispatch = useDispatch();
  const { company } = useSelector(({ company }) => company);
  const { flagReloadUserCards } = useSelector(
    ({ noktosPackages }) => noktosPackages
  );

  // NUNCA HABRA UNA TARJETA SELECCIONADA
  // AL INICIAR SIEMPRE SE MUESTRAN LAS TARJETAS GUARDADAS
  useEffect(() => {
    dispatch(setSelectedCard(null));
    dispatch(hideSelectedCard());
    dispatch(hideStripeFormCard());
    dispatch(showSavedCards());
    dispatch(setPromotion(null));
  }, []);

  // ===========================================================
  // BRING ALL THE INFORMATION OF THE PACKAGES

  const getAllPackages = useCallback(async () => {
    try {
      dispatch(showLoader());
      const { data: resp } = await getCatalogOfTokensRequest();
      const { res, data } = resp;
      if (isMounted && res) dispatch(setNoktosPackages(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(hideLoader());
    }
  }, []);

  useEffect(() => {
    getAllPackages();
    return () => {
      isMounted = false;
    };
  }, [getAllPackages]);

  // ===========================================================
  // BRING THE INFORMATION OF THE MEMBERSHIP

  const getMembership = useCallback(async () => {
    try {
      dispatch(showLoader());
      const body = {
        compania_id: company?.id,
      };
      const { data } = await getMembershipOfCompanyRequest(body);
      if (isMounted) dispatch(setUserMembership(data?.membresia));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(hideLoader());
    }
  }, []);

  useEffect(() => {
    getMembership();
  }, [getMembership]);

  // ===========================================================
  // BRING ALL THE INFORMATION OF THE STRIPE CARDS

  const getStripeCards = useCallback(async () => {
    try {
      dispatch(showLoader());
      const { data } = await getCardsOfUserRequest();
      const { res, cards } = data;
      if (isMounted && res) dispatch(setStripeCardsInfo(cards?.data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(hideLoader());
    }
  }, []);

  const getStripeUser = useCallback(async () => {
    try {
      dispatch(showLoader());
      await getStripeUserRequest();
      await getStripeCards();
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(hideLoader());
    }
  }, []);

  useEffect(() => {
    getStripeUser();
  }, [getStripeUser, flagReloadUserCards]);

  return <Content />;
};

export default NoktosPackages;
