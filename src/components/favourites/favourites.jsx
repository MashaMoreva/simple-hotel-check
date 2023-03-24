import React from 'react';
import { useSelector } from 'react-redux';
import styles from './favourites.module.css';
import { HotelCardMini } from '../hotel-card-mini/hotel-card-mini';

export function Favourites() {

    let favourites = useSelector(state => state.favourites.favourites);

    return (
        <section className={styles.favourites} >
            <h2 className={styles.favourites__title}>Избранное</h2>
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
