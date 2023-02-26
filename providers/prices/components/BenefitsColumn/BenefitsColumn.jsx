import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import styles from "../TableInfo/styles.module.scss";
import CheckIcon from "@mui/icons-material/Check";

const BenefitsColumn = ({benefits}) => {
    const { pricePackageSelected } = useSelector(
        ({ applicationReducer }) => applicationReducer
    );

    return (
        <section className={styles.InfoItem}>
            <div className="membershipBenefits__inner_container">
                <div className="membershipBenefits__container">
                    {
                        benefits.length > 0 ?
                            benefits.map(typeOfBenefits => (
                                <div>
                                    {/*<div className="row">
                                        <div className="col-md-6 add-borders delete-padding ">
                                            <div className="membershipBenefits__title">
                                                <p>{typeOfBenefits.nombre}</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 delete-padding">
                                            <div
                                                className="membershipBenefits__name_suscription">
                                                <p>{pricePackageSelected.name_membership}</p>
                                            </div>
                                        </div>
                                    </div>*/}
                                    {
                                        typeOfBenefits.beneficios.map(benefits => (
                                            <div className="row">
                                                <div
                                                    className="col-md-6 add-borders delete-padding">
                                                    <div className="membershipBenefits__benefit">
                                                        <p>
                                                            {benefits.nombre}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 add-borders">
                                                    <div className="membershipBenefits__check">
                                                        {
                                                            benefits.suscripciones.map(subscription => {
                                                                if(pricePackageSelected.id_membership !== "free")
                                                                    return (subscription.id === pricePackageSelected.id_membership) ?
                                                                        <CheckIcon sx={{ color: "#00C2FF" }} /> : ""
                                                                else
                                                                    return benefits.nombre === "Facturación unificada" && subscription.id === "free"?
                                                                        "":
                                                                        (subscription.id === "free") ?
                                                                            <CheckIcon sx={{ color: "#00C2FF" }} /> : ""
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            ))
                            : ""
                    }
                </div>
            </div>
        </section>
    )
}

export default BenefitsColumn