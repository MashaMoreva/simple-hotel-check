import React from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import logout from "../../images/logout.svg";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authorization");
    navigate("/");
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Simple Hotel Check</h1>
        <button onClick={handleLogout} className={styles.header__button}>
          Выйти
          <img src={logout} alt="Иконка выхода" />
        </button>
      </header>
    </>
  );
}
