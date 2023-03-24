import React from 'react';
import styles from './authorization.module.css';
import { Navigate, useNavigate} from 'react-router-dom';

export function Authorization() {
    const navigate = useNavigate();
    const authorization = JSON.parse(localStorage.getItem('authorization'));

    const [value, setValue] = React.useState({
        email: '',
        password: ''
    })

    const handleAuthorization = (evt) => {
        evt.preventDefault();
        const user = {
            email: value.email,
            password: value.password
        };
        localStorage.setItem('authorization', JSON.stringify(user));
        navigate('/hotels');
    }

    if (authorization) {
        return (
            <Navigate to={'/hotels'} />
        )
    }

    return (
        <section className={styles.authorization}>
            <div className={styles.authorization__background}></div>
            <form className={styles.form} onSubmit={handleAuthorization}>
                <h2 className={styles.form__title}>Simple Hotel Check</h2>
                <fieldset className={styles.form__fieldset}>
                    <label htmlFor="login" className={styles.form__label}> Логин
                        <input required
                            className={styles.form__input}
                            type="email"
                            onChange={(evt) => setValue({ ...value, email: evt.target.value })}
                            id="login"
                            placeholder="example@example.ru"
                            value={value.email} />
                        <span className={styles.form__error} id="login-error"></span>
                    </label>
                    <label htmlFor="password" className={styles.form__label}> Пароль
                        <input required
                            className={styles.form__input}
                            type="password"
                            onChange={(evt) => setValue({ ...value, password: evt.target.value })}
                            id="password"
                            placeholder="Минимум 8 символов, латиница"
                            value={value.password} />
                        <span className={styles.form__error} id="password-error"></span>
                    </label>
                </fieldset>
                <button className={styles.form__button} type="submit" >Войти</button>
            </form>
        </section>
    )
}