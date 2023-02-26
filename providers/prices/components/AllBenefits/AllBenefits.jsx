import React, {useEffect} from "react";
import CheckIcon from "@mui/icons-material/Check";

const AllBenefits = ({benefits}) => {

    return (
        <section className="container">
            <div className="membershipBenefits__container">
                {
                    benefits.length > 0 ?
                        benefits.map(typeOfBenefits => (
                            <div>
                                {/*<div className="row">
                                    <div className="col-md-4 delete-padding ">
                                        <div className="membershipBenefits__title">
                                            <p>{typeOfBenefits.nombre}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 delete-padding">
                                        <div className="membershipBenefits__name_suscription">
                                            <p>GRATUITA</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 delete-padding">
                                        <div className="membershipBenefits__name_suscription">
                                            <p>BÁSICA</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 delete-padding">
                                        <div className="membershipBenefits__name_suscription">
                                            <p>PREMIUM</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 delete-padding">
                                        <div className="membershipBenefits__name_suscription">
                                            <p>PROFESIONAL</p>
                                        </div>
                                    </div>
                                </div>*/}
                                {
                                    typeOfBenefits.beneficios.map(benefits => (
                                        <div className="row">
                                            <div className="col-md-4 add-borders delete-padding">
                                                <div className="membershipBenefits__benefit">
                                                    <p>
                                                        {benefits.nombre}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 add-borders">
                                                <div className="membershipBenefits__check">
                                                    {
                                                        benefits.suscripciones.map(suscription => (
                                                            benefits.nombre === "Facturación unificada" && suscription.id === "free"?
                                                                "":
                                                            (suscription.id === "free") ?
                                                                <CheckIcon sx={{ color: "#00C2FF" }} /> : ""
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-2 add-borders">
                                                <div className="membershipBenefits__check">
                                                    {
                                                        benefits.suscripciones.map(suscription => (
                                                            (suscription.id === 1) ?
                                                                    <CheckIcon sx={{ color: "#00C2FF" }} /> : ""
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-2 add-borders delete-padding">
                                                <div
                                                    className="membershipBenefits__check ">
                                                    {
                                                        benefits.suscripciones.map(suscription => (
                                                            (suscription.id === 2) ?
                                                                <CheckIcon sx={{ color: "#00C2FF" }} /> : ""
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-md-2 add-borders">
                                                <div className="membershipBenefits__check">
                                                    {
                                                        benefits.suscripciones.map(suscription => (
                                                            (suscription.id === 3) ?
                                                                <CheckIcon sx={{ color: "#00C2FF" }} /> : ""
                                                        ))
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
        </section>
    )
}

export default AllBenefits