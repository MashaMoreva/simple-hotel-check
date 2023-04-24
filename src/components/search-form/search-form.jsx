import React from 'react';
import { useDispatch } from 'react-redux';
import { getHotels } from '../../services/actions/hotels';
import { setSearchParameters } from '../../services/actions/search';
import styles from './search-form.module.css';

export function SearchForm() {

    const dispatch = useDispatch();

    let today = new Date().toISOString().slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`);

    const [value, setValue] = React.useState({
        location: '',
        checkIn: today,
        days: ''
    })

    
    const handleSearch = (evt) => {
        evt.preventDefault();
        const search = {
            location: value.location,
            checkIn: value.checkIn,
            days: value.days
        };
        const checkOutDate = new Date(search.checkIn);
        checkOutDate.setDate(checkOutDate.getDate() + Number(search.days));
        const checkOut = checkOutDate.toISOString().slice(0, 10)
        dispatch(getHotels(value.location, value.checkIn, checkOut));
        dispatch(setSearchParameters(search));
        setValue({
            location: '',
            checkIn: '',
            days: ''
        });
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSearch}>
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
                            data-placeholder={value.checkIn}
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

// http://engine.hotellook.com/api/v2/cache.json?location=Москва&currency=rub&checkIn=2023-03-26&checkOut=2023-03-27&limit=10
// http://engine.hotellook.com/api/v2/cache.json?location=Волгоград&currency=rub&checkIn=2023-11-11&checkOut=2023-11-17&limit=10
// http://engine.hotellook.com/api/v2/cache.json?location=Сочи&currency=rub&checkIn=2023-11-11&checkOut=2&limit=10