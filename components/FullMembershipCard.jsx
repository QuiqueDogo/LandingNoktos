import {connect} from "react-redux";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {setSelectedMembership} from "../redux/actions/membershipAction";
import {formatMoney} from "../utils/formatMoney";

const FullMembershipCard = ({membership, from, callback, dispatch, company, isFree, omitMembershipBuy}) => {
    const router = useRouter()

    useEffect(() => {
    }, [])

    function selectFlow() {
        if (from === 0) {
            router.push({
                pathname: "/basic-register",
                query: {
                    id_membership: membership.id_membership,
                    id_package: membership.id_package
                },
            })
        }else{
            if(isFree === true){
                omitMembershipBuy()
            }else{
                dispatch(setSelectedMembership(membership))
                callback(membership);
            }
        }
    }
    return (
        <div className={(from !== 3) ? "prices__membership_card" :"prices__membership_card_full"}>
            <div className="prices__membership_card_inner_container">
                <div className="d-flex justify-content-end align-items-end w-100">
                    {
                        (isFree === true)&&
                            <div className="prices__memberships_top_popular_text">
                                <p>Más Popular</p>
                            </div>
                    }
                </div>
                <p className="prices__membership_card_inner_container_name">Membresía <span>{membership.name_membership}</span></p>
                <p className="prices__membership_card_inner_container_description">{membership.description}</p>
                {
                    !isFree &&
                        <React.Fragment>
                            <p className={(membership.id_membership === 2 || membership.id_membership === 5) ? "prices__price_popular" : "prices__price_normal"}> {formatMoney(membership.price_membership)}
                                <span>/{(membership.id_membership < 4) ? "mes" : "año"}</span></p>
                            <p className="prices__taxes_info">+ impuestos (16%)</p>

                            <p className={(membership.id_membership === 2 || membership.id_membership === 5) ? "prices__text_tokens_popular" : "prices__text_tokens_normal"}>  {membership.tokens} Noktos <span>(Tokens)/mes</span>
                            </p>

                            <p className={(membership.id_membership === 2 || membership.id_membership === 5) ? "prices__text_centauros_popular" : "prices__text_centauros_normal"}> + {membership.nights} Centauros
                                <span> gratis/mes</span></p>

                            <p className={(membership.id_membership === 2 || membership.id_membership === 5) ? "prices__text_discount_popular" : "prices__text_discount_normal"}> Descuento
                                de {membership.discount}% <br/> <span> en Compras Directas</span></p>
                        </React.Fragment>
                }


                {
                    (from !== 3) ?
                        <button
                            className={(membership.id_membership === 2 || membership.id_membership === 5) ? "prices__button_popular btn" : "prices__button_normal btn"}
                            onClick={() => selectFlow()}
                            disabled={(from === 2 && company.id_catalogo_suscripcion === membership.id_membership)}> {(from === 1 || from === 2) ? "Regístrate" : "Regístrate"} {membership.name_membership.toLowerCase()}</button>
                        : ""
                }

                {
                    isFree?
                        <p className="prices__text_tokens_popular">
                            <span>(Costo por Nokto</span> {formatMoney(membership.price_nokto)}<span>)</span>
                        </p>
                        :
                    <p className="prices__text_tokens_popular">
                        <span>(Costo por Nokto</span> {formatMoney(membership.price_membership / (membership.tokens + membership.nights))}<span>)</span>
                    </p>

                }

            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        company: state.company.company,
    };
}

export default connect(mapStateToProps)(FullMembershipCard);
