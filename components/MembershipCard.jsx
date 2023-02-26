import React, {useEffect} from "react";
import {setSelectedMembership} from "../redux/actions/membershipAction";
import {useRouter} from "next/router";
import {connect} from "react-redux";


const MembershipCard = ({membership, company, from, callback, dispatch, selectedMembership}) => {
    const router = useRouter()

    useEffect(() => {
        console.log(selectedMembership)
    }, [])

    function selectMembership(membership) {
        dispatch(setSelectedMembership(membership))
    }

    function formatMoney(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    }

    function goToRegister(membership) {
        if(from === 0) {
            router.push({
                pathname: "/basic-register",
                query: {
                    id_membership: membership.id_membership,
                    id_package: membership.id_package
                },
            })
        }else{
            selectMembership(membership)
            callback(membership);
        }
    }

    return (
        <div
            className={`membershipcard ${(membership.id_membership === 1|| membership.id_membership === 2) ? 'membershipcard__active' : (membership.id_membership === 3) ? 'membershipcard__active_gold' : 'membershipcard__active_silver'}`}
            onClick={() => selectMembership(membership)}>
            {
                /*
                <div>
                    {
                        (company.id_catalogo_suscripcion === membership.id_membership) ?
                            <p>dd</p>
                            : ""
                    }
                </div>
                */

            }
            <div className="membershipcard__header">
                <div
                    className={`membershipcard__header_moon_container ${(membership.id_membership === 1 || membership.id_membership === 2) ? 'membershipcard__header_moon_blue' : (membership.id_membership === 3) ? 'membershipcard__header_moon_gold' : 'membershipcard__header_moon_silver'}`}>
                    <i className="fas fa-moon"/>
                </div>
                <p className="membershipcard__title">MEMBRESÍA <br/> {membership.name_membership}</p>

                {
                    (membership.id_membership === 1 || membership.id_membership === 2) ?
                        <React.Fragment>
                            <div className="membershipcard__container_price">
                                <p>SIN PAGO</p>
                                <p>ANUAL</p>
                            </div>
                            <hr/>
                            {
                                /*
                                <div className="membershipcard__container_button">
                                    <button className="btn generic__button_blue" onClick={() => goToRegister()}> INICIAR
                                        AHORA
                                    </button>
                                </div>
                                */
                            }
                            <div className="membershipcard__container_benefits">
                                <p className="membershipcard__discount_membership"><i
                                    className="fas fa-times-circle suscriptioncard__check_red"/> SIN DESCUENTO</p>
                                <p className="membershipcard__discount_membership"><i
                                    className={membership.id_membership === 2? "fas fa-check-circle suscriptioncard__check_green": "fas fa-times-circle suscriptioncard__check_red" } /> {membership.tokens} TOKENS
                                    AL MES</p>
                                <p className="membershipcard__discount_membership"><i
                                    className={membership.id_membership === 2? "fas fa-check-circle suscriptioncard__check_green": "fas fa-times-circle suscriptioncard__check_red" } /> {membership.nights} NOCHE(S)
                                    GRATIS AL MES </p>
                            </div>

                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="membershipcard__container_price">
                                <p> UN PAGO ANUAL DE {formatMoney(membership.price_membership)} MXN </p>
                            </div>
                            <hr/>
                            <div className="membershipcard__container_benefits">
                                <p className="membershipcard__discount_membership"><i
                                    className="fas fa-check-circle suscriptioncard__check_green"/> -{membership.discount}%
                                    EN EL MARKET PLACE</p>
                                <p className="membershipcard__discount_membership"><i
                                    className="fas fa-check-circle suscriptioncard__check_green"/> {membership.tokens} TOKENS
                                    AL MES</p>
                                <p className="membershipcard__discount_membership"><i
                                    className="fas fa-check-circle suscriptioncard__check_green"/> {membership.nights} NOCHE(S)
                                    GRATIS AL MES </p>
                            </div>
                        </React.Fragment>
                }
                <hr/>
                <div>
                    <div
                        className="suscriptioncard__container_price">
                        <p> Pago mensual de {formatMoney(membership.price_package)} MXN</p>
                    </div>
                </div>
            </div>

            <div className="">
                {

                    <div
                        className={ `membershipcard__footer ${ (membership.id_membership === 1 || membership.id_membership === 2) ? "membershipcard__footer_text" : (membership.id_membership === 3) ? "membershipcard__footer_text_gold" : "membershipcard__footer_text_silver" }`}>

                        {
                            (from !== 3)?
                            <div className="membershipcard__container_button">
                                <button className="btn generic__button_primary"  onClick={() => goToRegister(membership)}> SELECCIONAR</button>
                            </div>
                                :""

                        }

                    </div>
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        selectedMembership: state.membership.membership,
        company: state.company.company
    };
}

export default connect(mapStateToProps)(MembershipCard);
