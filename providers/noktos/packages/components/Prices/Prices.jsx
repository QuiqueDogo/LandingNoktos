import {memo} from "react";
import styles from "./styles.module.scss";
import AddIcon from "@material-ui/icons/Add";
import Carousel from "react-elastic-carousel";
import {formatMoney} from "utils/formatMoney";
import useIsTablet from "customHooks/useIsTablet";
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedPackages} from "redux/actions/packagesAction";

const PriceItem = ({isActive, packageInfo}) => {
    const dispatch = useDispatch();
    const [isTablet] = useIsTablet();

    const {id, numero_tokens, selectedPackages} = packageInfo;
    const {membership} = useSelector(({noktosPackages}) => noktosPackages);
    const {valor_token} = membership;

    const animationClass = "animate__animated animate__fadeIn animate__fast";

    const shadowStyle = (isActive) => {
        if (!isTablet) return 0;
        if (isActive) return "8px 8px 16px 0px rgba(0,0,0,0.16)";
        return "0 1.1px 5.6px 0 #c4c4c4";
    };

    return (
        <div className={` ${isActive ? animationClass : ""}`}>
            <div
                className={styles.Prices__item}
                style={{
                    color: `${isActive ? "#fff" : "#000"}`,
                    backgroundColor: `${isActive ? "#00c2ff" : "#fff"}`,
                    boxShadow: shadowStyle(isActive),
                    border: !isTablet ? "1px solid rgba(0,0,0,0.16)" : 0,
                }}>
                <h4>{`Paquete ${id}`}</h4>
                <div style={{
                    padding: `${isActive ? "0 10px" : "0 4px"}`,
                    border: `${
                        isActive ? "1px solid rgba(5, 174, 227, 0.65)" : "1px solid #fff"
                    }`,
                }}
                >
                      <span style={{color: `${isActive ? "#fff" : "#00c2ff"}`,}}>
                          {formatMoney(valor_token * numero_tokens)} mxn
                      </span>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className={styles.container_noktos}>
                            <span>Número de Noktos</span>
                            <div>
                                <span>{numero_tokens}</span>
                            </div>
                        </div>
                        <div className={styles.container_taxes}
                             style={{
                                 color: `${isActive ? "#fff" : "#C4C4C4"}`,
                             }}
                        >
                            <div
                                style={{
                                    borderColor: `${isActive ? "#fff" : "#C4C4C4"}`,
                                }}
                            >
                                <AddIcon
                                    style={{
                                        fontSize: 15,
                                    }}
                                />
                            </div>
                            <span>impuestos (16%)</span>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column justify-content-end">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <button className={`btn ${styles.plus_button}`}
                                    onClick={() => dispatch(updateSelectedPackages(id, "subtract"))}>-
                            </button>
                            <p className="m-0" style={{
                                color: "#00c2ff",
                            }}>{selectedPackages}</p>
                            <button className={`btn ${styles.plus_button}`}
                                    onClick={() => dispatch(updateSelectedPackages(id, "add"))}>+
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: `${isActive ? "#fff" : "#00c2ff"}`,
                    }}
                >
          <span
              style={{
                  color: `${isActive ? "#00c2ff" : "#fff"}`,
              }}
          >
            {id}
          </span>
                </div>
            </div>
        </div>
    );
};

const Prices = () => {
  const [isTablet] = useIsTablet();
  const noktosPackages = useSelector(({ noktosPackages }) => noktosPackages);

  const { packages, selectedPackage } = noktosPackages;
  const { id } = selectedPackage;

  return (
      <div className={styles.Prices}>
          {isTablet ? (
              <div className={styles.Prices__container}>
                  {packages?.map((packageInfo) => (
                      <PriceItem
                          key={packageInfo?.id}
                          packageInfo={packageInfo}
                          isActive={false}
                      />
                  ))}
              </div>
          ) : (
              <Carousel itemsToShow={1} itemsToScroll={1} pagination={false}>
                  {packages?.map((packageInfo) => (
                      <PriceItem
                          key={packageInfo?.id}
                          packageInfo={packageInfo}
                          //isActive={id === packageInfo?.id}
                          isActive={false}
                      />
                  ))}
              </Carousel>
          )}
      </div>
  );
};

export default memo(Prices);
