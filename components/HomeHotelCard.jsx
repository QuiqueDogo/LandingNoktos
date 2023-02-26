import Rating from "react-rating";
import React from "react";

const HomeHotelCard = ({hotel}) =>{


    let sectionStyle = {
        backgroundImage: `url(${hotel.imagen})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return(
        <div className="homeHotelCard__container">
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
                        <p className="homeHotelCard__description">{hotel.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHotelCard