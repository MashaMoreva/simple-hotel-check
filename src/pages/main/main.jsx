import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getHotels } from '../../services/actions/hotels';
import styles from './main.module.css';
import { Header } from '../../components/header/header';
import { SearchForm } from '../../components/search-form/search-form';
import { Favourites } from '../../components/favourites/favourites';
import { SearchInfo } from '../../components/search-info/search-info';
import { HotelsList } from '../../components/hotels-list/hotels-list';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import one from '../../images/one.jpeg';
import two from '../../images/two.jpeg';
import three from '../../images/three.jpeg';
import four from '../../images/four.jpg';
import five from '../../images/five.jpg';
import six from '../../images/six.jpg';
import seven from '../../images/seven.jpg';
import eight from '../../images/eight.jpg';
import nine from '../../images/nine.jpg';
import ten from '../../images/ten.jpg';
import eleven from '../../images/eleven.jpg';

export function Main() {

    const authorization = JSON.parse(localStorage.getItem('authorization'));
    const dispatch = useDispatch();

    // let favouritesHotels = [];
    // let localStorageData = localStorage.getItem('favourites');
    // if (localStorageData === null) {
    //     favouritesHotels = [];
    // } else {
    //     favouritesHotels = JSON.parse(localStorageData);
    // };

    React.useEffect(() => {
        const today = new Date();
        const checkIn = today.toISOString().slice(0, 10);
        const checkOutDate = new Date();
        checkOutDate.setDate(today.getDate() + 1);
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
                    <Favourites />
                </div>
                <div className={styles.right}>
                    <SearchInfo />
                    <ScrollingCarousel>
                        <img src={one} className={styles.image} alt="" />
                        <img src={two} className={styles.image} alt="" />
                        <img src={three} className={styles.image} alt="" />
                        <img src={four} className={styles.image} alt="" />
                        <img src={five} className={styles.image} alt="" />
                        <img src={six} className={styles.image} alt="" />
                        <img src={seven} className={styles.image} alt="" />
                        <img src={eight} className={styles.image} alt="" />
                        <img src={nine} className={styles.image} alt="" />
                        <img src={ten} className={styles.image} alt="" />
                        <img src={eleven} className={styles.image} alt="" />
                    </ScrollingCarousel>
                    <HotelsList />
                </div>
            </div>
        </>

    )
}