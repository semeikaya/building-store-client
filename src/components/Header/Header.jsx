import { Link, NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import basket from "./basket.png"
import { useState } from "react"

const Header = () => {
    return <>
        <div className={styles.header}>
        <div className={styles.substrate}></div>
        <div className={styles.main_of_header}>
            <div className={styles.logotype}>
                <h1 className={styles.textOfLogotype}>Союз Логистик</h1>
            </div>
            <div className={styles.whole_info}>

            <NavLink to="/" className={({isActive}) => isActive ? styles.active : styles.link}>Главная</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? styles.active : styles.link}>О компании</NavLink>
            <NavLink to="/reviews" className={({isActive}) => isActive ? styles.active : styles.link}>Отзывы</NavLink>
            <NavLink to="/contacts" className={({isActive}) => isActive ? styles.active : styles.link}>Контакты</NavLink>
                <img src={basket} alt="basket" />

            </div>
            </div>
        </div>
    </>
}

export default Header