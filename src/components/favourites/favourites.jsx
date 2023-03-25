import React from 'react';
import { useSelector } from 'react-redux';
import styles from './favourites.module.css';
import { HotelCardMini } from '../hotel-card-mini/hotel-card-mini';
import select_down_active from '../../images/select_down_active.svg'
import select from '../../images/select.svg'

export function Favourites() {

    let favourites = useSelector(state => state.favourites.favourites);

    return (
        <section className={styles.favourites} >
            <h2 className={styles.favourites__title}>Избранное</h2>
            <div className={styles.buttons}>
                <button className={styles.button}>
                    Рейтинг
                    <img src={select_down_active} className={styles.select} alt="" />
                </button>
                <button className={styles.button}>
                    Цена
                    <img src={select} className={styles.select} alt="" />
                </button>
            </div>
            <div className={styles.hotels}>
                {favourites
                    .map((hotel) => (
                        <HotelCardMini
                            key={hotel.hotelId}
                            hotel={hotel}
                        />
                    ))}
            </div>
        </section>
    )
}
