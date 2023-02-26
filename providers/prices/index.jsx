import Support from "components/Support/Support";
import MainPage from "./components/MainPage/MainPage";
import OurPlans from "./components/OurPlans/OurPlans";
import TableInfo from "./components/TableInfo/TableInfo";
import PricesInfo from "./components/PricesInfo/PricesInfo";
import LandingPageLayout from "components/layouts/LandingPageLayout/LandingPageLayout";
import {useEffect, useState} from "react";
import {hideLoader, showLoader} from "../../redux/actions/application";
import axios from "axios";
import {apiRoutes} from "../../utils/apiRoutes";
import {setBasicConfigurationRequest, setConfigurationRequest} from "../../utils/requests";
import Swal from "sweetalert2";
import {setSelectedMembership} from "../../redux/actions/membershipAction";
import {useDispatch} from "react-redux";
import {getBenefitsCatalog, getCataloOfMembership} from "../../services/membershipService";
import AllBenefits from "./components/AllBenefits/AllBenefits";
import useIsDesktop from "../../customHooks/useIsDesktop";

const Prices = () => {
    const [benefits, setBenefits] = useState([])
    const [memberships, setMemberships] = useState([])
    const [isDesktop] = useIsDesktop();
    const dispatch = useDispatch()

    useEffect(() => {
        getMembershipCatalog()
        getBenefits()
    }, [])

    const getMembershipCatalog = () => {
        dispatch(showLoader())
        getCataloOfMembership()
            .then(response => {
                dispatch(hideLoader())
                let allMemberships = []
                for (let membership of response.data.suscripciones_membresias) {
                    if(membership.catalogo_membresia.length>0) {
                        let value = {
                            "name_membership": membership.nombre,
                            "discount": membership.descuento,
                            "price_membership": membership.catalogo_membresia[0].costo_anual,
                            "price_membership_month": membership.catalogo_membresia[0].costo_mensual ,
                            "id_membership": membership.id,
                            "tokens": membership.catalogo_membresia[0].numero_tokens,
                            "nights": membership.catalogo_membresia[0].noches_gratis,
                            "id_package": membership.catalogo_membresia[0].id,
                            "description": setDescription(membership),
                            "description_extra": ""
                        }
                        if (membership.id < 4) {
                            allMemberships.push(value)
                        } else {
                            //annualMemberships.push(value)
                        }
                        //allMemberships.push(value)
                    }
                }
                const freePlan = {
                    "name_membership": "GRATUITA",
                    "discount": "",
                    "price_membership": "0",
                    "price_membership_month": "",
                    "id_membership": "free",
                    "tokens": "",
                    "nights": "",
                    "id_package": "free",
                    "description": "Inscríbete al ecosistema y disfruta de los beneficios.",
                    "description_extra": "Perfecto para que utilices nuestra plataforma Noktos y descubras lo que tenemos para ofrecerte con nuestros servicios."

                }
                allMemberships.push(freePlan)
                console.log("allMemberships")
                console.log(allMemberships)
                setMemberships(allMemberships)
            }).catch(error => {
            dispatch(hideLoader())
            console.log("error")
            console.log(error)
        })
    }

    const getBenefits = () => {
        dispatch(showLoader())
        getBenefitsCatalog()
            .then(response => {
                dispatch(hideLoader())
                response.data.rubro_beneficios.map(typeOfBenefits => (
                    typeOfBenefits.beneficios.map(benefits => (
                        benefits.suscripciones.map(suscription => {
                            if(suscription.id === 1){
                                let basic = {...benefits.suscripciones[0]}
                                basic.id = "free"
                                basic.nombre = "GRATUITA"
                                return benefits.suscripciones = [...benefits.suscripciones, basic]
                            }else{
                                return benefits.suscripciones
                            }
                        })
                    ))
                ))
                setBenefits(response.data.rubro_beneficios)
            }).catch(error => {
            dispatch(hideLoader())
            console.log(error)
        })
    }

    const setDescription = (membership) => {
        switch (membership.id) {
            case 1:
                return "Para negocios con viajes esporádicos o poco frecuentes"
            case 2:
                return "Para empresas con viajes de negocios poco frecuentes"
            case 3:
                return "Para alta demanda de viajes de negocios"
            case 4:
                return "Para negocios con viajes esporádicoso poco frecuentes"
            case 5:
                return "Para empresas con viajes de negocios poco frecuentes"
            case 6:
                return "Para alta demanda de viajes de negocios"

        }
    }

    return <LandingPageLayout title="Precios">
        <MainPage/>
        <OurPlans/>
        <PricesInfo
            memberships={memberships}
            fromScreen={1}/>
        {
            !isDesktop&&
            <TableInfo
                benefits={benefits}/>
        }

        {
            isDesktop&&
            <AllBenefits
                benefits={benefits}/>
        }
        <Support/>
    </LandingPageLayout>
}

export default Prices;
