import React from 'react';
import { useSelector } from 'react-redux';
import styles from './favourites.module.css';
import { HotelCardMini } from '../hotel-card-mini/hotel-card-mini';
import direction_default from '../../images/direction_default.svg';
import direction_down from '../../images/direction_down.svg';
import direction_up from '../../images/direction_up.svg';

export function Favourites() {

    const favourites = useSelector(state => state.favourites.favourites);

    const [method, setMethod] = React.useState('rating')
    const [direction, setDirection] = React.useState('down');

    // console.log(method, direction)

    const sortHotels = React.useMemo(() => {
        const sorted = [...favourites].sort((a, b) => {
          if (method === 'rating') {
            return direction === 'down' ? b.stars - a.stars : a.stars - b.stars;
          } else if (method === 'price') {
            return direction === 'down' ? b.priceAvg - a.priceAvg : a.priceAvg - b.priceAvg;
          }
          return 0;
        });
        return sorted;
      }, [favourites, method, direction]);

    const defaultSortStyles = favourites.length < 1;
    const addActiveMethodStyles = defaultSortStyles ? '' : styles.active_method;

    const changeDirection = (value) => {
        if (value === method) {
            setDirection(direction === 'down' ? 'up' : 'down');
        } else {
            setMethod(value);
            setDirection('down');
        }
    };

    return (
        <section className={styles.favourites} >
            <h2 className={styles.favourites__title}>Избранное</h2>
            <div className={styles.buttons}>
                <button onClick={() => changeDirection('rating')}
                    className={`${styles.button}
                    ${method === 'rating' ? addActiveMethodStyles : ''} 
                    `}
                >
                    Рейтинг
                    <img className={styles.direction} alt="Иконка направления сортировки"
                        src={`${defaultSortStyles || method === 'price' ? direction_default
                            : method === 'rating' && direction === 'up' ? direction_up
                                : method === 'rating' && direction === 'down' ? direction_down
                                    : direction_down}
                            `}
                    />
                </button>
                <button onClick={() => changeDirection('price')}
                    className={`${styles.button}
                    ${method === 'price' ? addActiveMethodStyles : ''} 
                    `}
                >
                    Цена
                    <img className={styles.direction} alt="Иконка направления сортировки"
                        src={`${defaultSortStyles || method === 'reting' ? direction_default
                            : method === 'price' && direction === 'up' ? direction_up
                                : method === 'price' && direction === 'down' ? direction_down
                                    : direction_default}
                            `}
                    />
                </button>
            </div>
            <div className={styles.hotels}>
                {sortHotels
                    .map((hotel) => (
                        <HotelCardMini
                            key={hotel.hotelId}
                            hotel={hotel}
                        />
                    ))}
            </div>
        </section>
    )
}
