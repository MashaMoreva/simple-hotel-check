import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getHotels } from '../../services/actions/hotels';
import styles from './main.module.css';



export function Main() {

    const authorization = JSON.parse(localStorage.getItem('authorization'));
    const dispatch = useDispatch();

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

        <main className={styles.content}>
            <p>Masha</p>
        </main>

    )
}