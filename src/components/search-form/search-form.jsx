import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchParameters } from '../../services/actions/search';
import styles from './search-form.module.css';

export function SearchForm() {

    const dispatch = useDispatch();

    const [value, setValue] = React.useState({
        location: '',
        checkIn: '',
        days: ''
    })

    let today = new Date().toISOString().slice(0, 10);
    const handleSearch = (evt) => {
        evt.preventDefault();
        const search = {
            checkIn: value.checkIn,
            days: value.days
        };
        dispatch(setSearchParameters(search))
    }

    return (
        <>
            <form className={styles.form}>
                <fieldset className={styles.form__fieldset}>
                    <label htmlFor="location" className={styles.form__label}> Локация
                        <input required
                            className={styles.form__input}
                            type="text"
                            onChange={(evt) => setValue({ ...value, location: evt.target.value })}
                            id="location"
                            placeholder="Москва"
                            value={value.location} />
                        <span className={styles.form__error} id="location-error"></span>
                    </label>
                    <label htmlFor="checkIn" className={styles.form__label}> Дата заселения
                        <input required
                            className={styles.form__input}
                            type="date"
                            onChange={(evt) => setValue({ ...value, checkIn: evt.target.value })}
                            id="checkIn"
                            placeholder="Schedule: &#46;"
                            value={value.checkIn} />
                        <span className={styles.form__error} id="checkIn-error"></span>
                    </label>
                    <label htmlFor="days" className={styles.form__label}> Количество дней
                        <input required
                            className={styles.form__input}
                            type="number"
                            onChange={(evt) => setValue({ ...value, days: evt.target.value })}
                            id="days"
                            placeholder="1"
                            value={value.days} />
                        <span className={styles.form__error} id="days-error"></span>
                    </label>
                </fieldset>
                <button className={styles.form__button} type="submit">Найти</button>
            </form>
        </>
    )
}