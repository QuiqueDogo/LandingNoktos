import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setSelectedMembershipPackage} from "../redux/actions/membershipAction";

const SubscriptionCard = ({membershipCatalog, selectedMembershipPackage, selectedMembership, dispatch, from}) => {
    const[canSelect, setCanSelect] = useState(false)

    useEffect(()=>{
        for(const catalog of selectedMembership.catalogo_membresia ){
            setCanSelect(false)
        }

        for(const catalog of selectedMembership.catalogo_membresia ){
            console.log(`${catalog.id} === ${membershipCatalog.id}`)
            if (catalog.id === membershipCatalog.id){
                setCanSelect(true)
            }
        }
    }, [selectedMembership])

    function selectSubscription() {
        dispatch(setSelectedMembershipPackage(membershipCatalog))
    }

    function formatMoney(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    }

    return (
        <div className={(canSelect === false) ? "suscriptioncard suscriptioncard__opacity" : "suscriptioncard suscriptioncard__pointer_cursor"}
             onClick={(canSelect === false || from === 1) ? null : () => selectSubscription()}>
            <div
                className={`suscriptioncard__header ${(selectedMembershipPackage.id === membershipCatalog.id) ? (selectedMembership.id === 1 || selectedMembership.id === 2) ? "suscriptioncard__header_selected" : (selectedMembership.id === 3) ? "suscriptioncard__header_selected_gold" : "suscriptioncard__header_selected_silver" : ""}`}>
                <p className={`suscriptioncard__name ${(selectedMembershipPackage.id === membershipCatalog.id) ? "suscriptioncard__name_selected" : ""}`}>{membershipCatalog.nombre} {(canSelect === false) ? <i className="fas fa-times-circle suscriptioncard__check_red"/> : " "} </p>
                <div
                    className={`suscriptioncard__container_tokens ${(selectedMembershipPackage.id === membershipCatalog.id) ? "suscriptioncard__container_tokens_selected" : ""}`}>
                    <p>{membershipCatalog.numero_tokens} Tokens/<span>al mes</span></p>
                </div>
                <div
                    className={`suscriptioncard__container_price ${(selectedMembershipPackage.id === membershipCatalog.id) ? "suscriptioncard__container_price_selected" : ""}`}>
                    {
                        (membershipCatalog.id<4)?
                        <p>{formatMoney(membershipCatalog.costo_mensual)} MXN/ mensual</p>
                            :
                        <p>{formatMoney(membershipCatalog.costo_anual)} MXN/ anual</p>
                    }

                </div>
            </div>
            <div className="suscriptioncard__footer">
                {
                    (membershipCatalog.id === 1) ?
                        <React.Fragment>
                            <p><i className="fas fa-times-circle suscriptioncard__check_red"/> SIN NOCHES GRATIS</p>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <p><i
                                className="fas fa-check-circle suscriptioncard__check_green"/> {membershipCatalog.noches_gratis} NOCHES
                                GRATIS</p>
                        </React.Fragment>
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        selectedMembershipPackage: state.membership.membershipPackage,
        selectedMembership: state.membership.membership
    };
}

export default connect(mapStateToProps)(SubscriptionCard);