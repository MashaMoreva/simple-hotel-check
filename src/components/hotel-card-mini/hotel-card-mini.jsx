import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StarRatings from 'react-star-ratings';
import styles from './hotel-card-mini.module.css';
import { deleteHotel } from '../../services/actions/favourites';
import { searchDeleteItem } from '../../utils/utils';

export function HotelCardMini({ hotel }) {

    const dispatch = useDispatch();

    const checkIn = useSelector(state => state.search.checkIn);
    const days = useSelector(state => state.search.days);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateFormat = new Date(checkIn).toLocaleString('ru', options).replace(/ г\./, '');

    const handleFavouritesClick = () => {
        dispatch(deleteHotel(hotel))
        const favourites = JSON.parse(localStorage.getItem('favourites'));
        let newFavourites = searchDeleteItem(favourites, hotel);
        localStorage.removeItem('favourites');
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
    }



    return (
        <article className={styles.item} >
            <div className={styles.first_row}>
                <h2 className={styles.title}>{hotel.hotelName}</h2>
                <button className={styles.like} onClick={handleFavouritesClick}></button>
            </div>
            <p className={styles.date}>{dateFormat} - {days} день</p>
            <div className={styles.last_row}>
                <StarRatings
                    rating={hotel.stars}
                    starRatedColor='rgba(205, 188, 30, 1)'
                    starEmptyColor='rgba(108, 104, 69, 0.6)'
                    starDimension='17px'
                    starSpacing='2px'
                />
                <div className={styles.price}>
                    <p className={styles.price_text}>Price:</p>
                    <p className={styles.price_digit}>{Math.round(hotel.priceAvg).toLocaleString()} ₽</p>
                </div>
            </div>
        </article>
    )
}
