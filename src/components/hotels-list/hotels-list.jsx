import React from 'react';
import styles from './hotels-list.module.css';
import { useSelector } from 'react-redux';
import { HotelCard } from '../hotel-card/hotel-card';

export function HotelsList({favouritesHotels}) {

    const hotels = useSelector(state => state.hotels.hotels);
    console.log(hotels)
    const favourites = useSelector(state => state.favourites.favourites);
    console.log(favourites)

    const filterObjectArray = (arr, filterArr) => (
        arr.filter( el =>
            filterArr.some( f =>
                f.hotelId === el.hotelId
            )
        )
    );
    
    const favouritesInHotels = filterObjectArray(hotels, favourites)
    console.log(favouritesInHotels)

    return (
        <section className={styles.hotels}>
            <p className={styles.hotels__subtitle}>Добавлено в Избранное: <span className={styles.counter}>{favourites.length}</span> отелей</p>
            <div className={styles.hotels__list}>
            {hotels
                .map((hotel) => (
                    <HotelCard
                        key={hotel.hotelId}
                        hotel={hotel}
                        favouritesHotels={favouritesHotels}
                    />
                ))}
            </div>
            
        </section >
    )
}

// const result = obj.filter(e => arrName.includes(e.list.name));

