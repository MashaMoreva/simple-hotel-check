import React from 'react';
import styles from './hotels-list.module.css';
import { useSelector } from 'react-redux';
import { HotelCard } from '../hotel-card/hotel-card';

export function HotelsList({favouritesHotels}) {

    const hotels = useSelector(state => state.hotels.hotels);
    const favourites = useSelector(state => state.favourites.favourites);

    return (
        <section className={styles.hotels__list}>
            <p className={styles.hotels__subtitle}>Добавлено в Избранное: <span className={styles.counter}>{favourites.length}</span> отелей</p>
            {hotels
                .map((hotel) => (
                    <HotelCard
                        key={hotel.hotelId}
                        hotel={hotel}
                        favouritesHotels={favouritesHotels}
                    />
                ))}
        </section >
    )
}

