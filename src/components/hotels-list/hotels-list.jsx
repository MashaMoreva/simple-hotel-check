import React from 'react';
import styles from './hotels-list.module.css';
import { useSelector } from 'react-redux';
import { HotelCard } from '../hotel-card/hotel-card';
// import { filterObjectArray } from '../../utils/utils';
import { createRightEnding } from '../../utils/utils';

export function HotelsList({ favouritesHotels }) {

    // const [isFavourites, setIsFavourites] = React.useState(false)

    const hotels = useSelector(state => state.hotels.hotels);
    // console.log(hotels)
    const favourites = useSelector(state => state.favourites.favourites);
    // console.log(favourites)

    // const favouritesInHotels = filterObjectArray(hotels, favourites)
    // console.log(favouritesInHotels)

    // React.useEffect(() => {
    //     favouritesInHotels.forEach(() => setIsFavourites(true))
    // }, [favouritesInHotels])

    return (
        <section className={styles.hotels}>
            <p className={styles.hotels__subtitle}>Добавлено в Избранное: <span className={styles.counter}>{favourites.length}</span> {createRightEnding(favourites.length)}</p>
            <div className={styles.hotels__list}>
                {hotels
                    .map((hotel) => (
                        <HotelCard
                            key={hotel.hotelId}
                            hotel={hotel}
                            // favouritesHotels={favouritesHotels}
                            // favouritesInHotels={favouritesInHotels}
                            // isFavourites={isFavourites}
                            // setIsFavourites={setIsFavourites}
                        />
                    ))}
            </div>

        </section >
    )
}
