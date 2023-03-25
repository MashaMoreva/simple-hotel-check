import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StarRatings from 'react-star-ratings';
import styles from './hotel-card.module.css';
import { options } from '../../utils/utils';
import house from '../../images/house.svg';
import { addHotel, deleteHotel } from '../../services/actions/favourites';

export function HotelCard({ hotel, favouritesHotels }) {

    const dispatch = useDispatch();

    const [isFavourites, setIsFavourites] = React.useState(false);

    const checkIn = useSelector(state => state.search.checkIn);
    const days = useSelector(state => state.search.days);

    const dateFormat = new Date(checkIn).toLocaleString('ru', options).replace(/ г\./, '');

    const handleFavouritesClick = () => {
        // if (isFavourites) {
        dispatch(addHotel(hotel))
        favouritesHotels.push(hotel)
        localStorage.setItem('favourites', JSON.stringify(favouritesHotels))
        setIsFavourites(true);
        // } else {
        //     dispatch(deleteHotel(hotel))

        // }

    };

    return (
        <article className={styles.item} >
            <div className={styles.icon}>
                <img src={house} alt="Иконка домик" />
            </div>
            <div className={styles.first_column}>
                <h2 className={styles.title}>{hotel.hotelName}</h2>
                <p className={styles.date}>{dateFormat} - {days} день</p>
                <StarRatings
                    rating={hotel.stars}
                    starRatedColor='rgba(205, 188, 30, 1)'
                    starEmptyColor='rgba(108, 104, 69, 0.6)'
                    starDimension='17px'
                    starSpacing='2px'
                />
            </div>
            <div className={styles.second_column}>
                <button className={!isFavourites ? styles.like : styles.like_active} onClick={handleFavouritesClick}></button>
                <div className={styles.price}>
                    <p className={styles.price_text}>Price:</p>
                    <p className={styles.price_digit}>{Math.round(hotel.priceAvg).toLocaleString()} ₽</p>
                </div>
            </div>
        </article>
    )
}
