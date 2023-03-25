import React from 'react';
import { useSelector } from 'react-redux';
import styles from './search-info.module.css';
import right_arrow from '../../images/right_arrow.svg';
import { options } from '../../utils/utils';

export function SearchInfo() {

    const info = useSelector(state => state.search);
    console.log(info)
    const date = new Date(info.checkIn).toLocaleString('ru', options).replace(/ г\./, '');

    return (
        <section className={styles.search_info}>
            <div className={styles.location}>
                <p className={styles.text}>Отели</p>
                <img src={right_arrow} alt="" />
                <p className={styles.text}>{info.location}</p>
            </div>
            <p className={styles.date}>{date}</p>
        </section>
    )
}