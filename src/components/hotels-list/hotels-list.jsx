import React from 'react';
import styles from './hotels-list.module.css';
import { useSelector } from 'react-redux';
import { HotelCard } from '../hotel-card/hotel-card';

export function HotelsList() {

    const hotels = useSelector(state => state.hotels.hotels);

    return (
        <section className={styles.hotels__list}>
            <p className={styles.hotels__subtitle}>Добавлено в Избранное:</p>
            {hotels
                .map((hotel) => (
                    <HotelCard
                        key={hotel.hotelId}
                        hotel={hotel}
                    />
                ))}
        </section >
    )
}

