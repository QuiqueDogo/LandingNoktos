import React from "react";
import Rating from "react-rating";
import {setSearchInfo} from "../redux/actions/searchHotelAction";
import {connect} from "react-redux";
import {useRouter} from "next/router";

const HotelCard = ({hotel, dispatch}) => {
    const router = useRouter()

    let sectionStyle = {
        backgroundImage: `url(${hotel.imagen})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    function formatMoney(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    }

    function selectHotel(idHotel) {
        dispatch(setSearchInfo({field: 'idHotel', value: idHotel}))

        router.push({
            pathname: '/portal/detail-hotel'
        })
    }

    return (
        <div className="hotelcard__container">
            <div className="hotelcard__container_image" style={sectionStyle}>
                <div className="hotelcard__container_description">
                    <p className="hotelcard__hotel_name">{hotel.nombre}</p>
                    <Rating
                        readonly={true}
                        initialRating={hotel.calificacion}
                        emptySymbol="far fa-star  empty"
                        fullSymbol="fas fa-star  full"
                    />
                    <div className="hotelcard__hotel_price_container">

                        <div className="search_results__card_hotel_price">
                            <p className="search_results__card_hotel_market_price">
                                <span>
                                    <img src="/icons/luna.png" alt=""/>
                                </span> {formatMoney(hotel.Precio / hotel.Noches)}/noche
                            </p>
                            <p className="search_results__card_hotel_total">Total: {formatMoney(hotel.Precio)}</p>
                        </div>

                        <div className="search_results__card_hotel_price">
                            <p className="search_results__card_hotel_token">
                                <span>
                                    <img src="/icons/token.png" alt=""/>
                                </span> {hotel.total_token / hotel.Noches} tokens/noche
                            </p>
                            <p className="search_results__card_hotel_total">Total
                                tokens: {hotel.total_token}</p>
                        </div>
                    </div>
                    <div className="hotelcard__button_container">
                        <button type="button" className="btn btn-primary hotelcard__button_select_membership" onClick={()=> selectHotel(hotel.host_id)}>Ver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(HotelCard);
