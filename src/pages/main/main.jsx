import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getHotels } from '../../services/actions/hotels';
import styles from './main.module.css';
import { Header } from '../../components/header/header';
import { SearchForm } from '../../components/search-form/search-form';
import { HotelsList } from '../../components/hotels-list/hotels-list';
import { Favourites } from '../../components/favourites/favourites';

export function Main() {

    const authorization = JSON.parse(localStorage.getItem('authorization'));
    const dispatch = useDispatch();
    let favouritesHotels = [];

    let localStorageData = localStorage.getItem('favourites');
    if (localStorageData === null) {
        favouritesHotels = [];
    } else {
        favouritesHotels = JSON.parse(localStorageData);
    };

    console.log (favouritesHotels)


    React.useEffect(() => {
        const today = new Date();
        const checkOutDate = new Date();
        checkOutDate.setDate(today.getDate() + 1);
        const checkIn = today.toISOString().slice(0, 10);
        const checkOut = checkOutDate.toISOString().slice(0, 10);
        const location = 'Москва';
        dispatch(getHotels(location, checkIn, checkOut))
    }, [dispatch])

    if (!authorization) {
        return (
            <Navigate to={'/'} />
        )
    }

    return (
        <>
            <Header />
            <div className={styles.default}>
                <div className={styles.left}>
                    <SearchForm />
                    <Favourites  />
                </div>
                <div className={styles.right}>
                    <HotelsList favouritesHotels={favouritesHotels}/>
                </div>
            </div>
        </>

    )
}