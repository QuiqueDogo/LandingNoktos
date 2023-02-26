import {useEffect, useRef, useState} from "react";
import styles from "./styles.module.scss";
import {useDispatch} from "react-redux";
import Carousel from "react-elastic-carousel";
import {useAnimate} from "customHooks/useAnimate";
import useMediaQuery from "customHooks/useMediaQuery";
import BlueItem from "./components/BlueItem/BlueItem";
import WhiteItem from "./components/WhiteItem/WhiteItem";
import {setPackagePriceSelected} from "redux/actions/application";
import {useRouter} from "next/router";

const PricesInfo = ({memberships, fromScreen}) => {
  const dispatch = useDispatch();
  const [freePlan, useFreePlan] = useState(null)
  const [basicPlan, useBasicPlan] = useState(null)
  const [premiumPlan, usePremiumPlan] = useState(null)
  const [profesionalPlan, useProfesionalPlan] = useState(null)
  const [isMedia] = useMediaQuery(1200);
  const router = useRouter()
  // REFERENCES
  const items = useRef();
  const container = useRef();

  const dataRefs = [
    {
      ref: items,
      classes: ["up"],
    },
  ];

  useEffect(() => {
    if (memberships.length > 0) {
      for (const membership of memberships) {
        switch (membership.name_membership) {
          case "BÁSICA":
            useBasicPlan(membership)
            dispatch(setPackagePriceSelected(membership))
            break;
          case "PREMIUM":
            usePremiumPlan(membership)
            break;
          case "PROFESIONAL":
            useProfesionalPlan(membership)
            break;
          case "GRATUITA":
            useFreePlan(membership)
            break;
        }
      }
    }
  }, [memberships])

  useAnimate(container, dataRefs);

  const handlePackageChange = ({item}) => dispatch(setPackagePriceSelected(item));

  return (
      <section ref={container} className={styles.PricesInfo}>
        <div ref={items} className={styles.PricesInfo__container}>
          {!isMedia ? (
              <Carousel
                  itemsToShow={1}
                  itemsToScroll={1}
                  pagination={false}
                  onChange={handlePackageChange}
                  isRTL={false}>
                <WhiteItem {...basicPlan} />
                <BlueItem {...freePlan} fromScreen={fromScreen} />
                <WhiteItem {...premiumPlan} />
                <WhiteItem {...profesionalPlan} />
              </Carousel>
          ) : (
              <>
                <BlueItem {...freePlan} fromScreen={fromScreen} />
                <WhiteItem {...basicPlan} />
                <WhiteItem {...premiumPlan} />
                <WhiteItem {...profesionalPlan} />
              </>
          )}
        </div>
      </section>
  );
};

export default PricesInfo;
