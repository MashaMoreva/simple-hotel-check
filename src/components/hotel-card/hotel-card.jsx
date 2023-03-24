import React from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import styles from './hotel-card.module.css';
import house from '../../images/house.svg';
import like from '../../images/like.svg';

export function HotelCard({ hotel }) {

    const checkIn = useSelector(state => state.search.checkIn);
    const days = useSelector(state => state.search.days);

    const date = new Date(checkIn);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleString('ru', options).replace(/ г\./, '');


    return (
        <article className={styles.item} >
            <div className={styles.icon}>
                <img src={house} alt="" />
            </div>
            <div className={styles.first_column}>
                <h2 className={styles.title}>{hotel.hotelName}</h2>
                <p className={styles.date}>{formattedDate} - {days} день</p>
                <StarRatings
                    rating={hotel.stars}
                    starRatedColor='rgba(205, 188, 30, 1)'
                    starEmptyColor='rgba(108, 104, 69, 0.6)'
                    starDimension='17px'
                    starSpacing='2px'
                />
            </div>
            <div className={styles.second_column}>
                <button className={styles.like}></button>
                <div className={styles.price}>
                    <p className={styles.price_text}>Price:</p>
                    <span className={styles.price_digit}>{hotel.priceAvg} ₽</span>
                </div>
            </div>
        </article>
    )
}

