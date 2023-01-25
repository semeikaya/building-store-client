import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import basket from "./basket.png"
import { useState } from "react"

const Header = () => {
    const [select, addSelect] = useState("main")


    return <>
        <div className={styles.header}>
        <div className={styles.main_of_header}>
            <div className={styles.logotype}>
                <h1 className={styles.textOfLogotype}>Союз Логистик</h1>
            </div>
            <div className={styles.whole_info}>
                <Link to="/" className={`${styles.link} ${select === "main" ? styles.selected : null}`} onClick={() => {addSelect("main")}}>Главная</Link>
                <Link to="/about" className={`${styles.link} ${select === "about" ? styles.selected : null}`} onClick={() => {addSelect("about")}}>О компании</Link>
                <Link to="/reviews" className={`${styles.link} ${select === "reviews" ? styles.selected : null}`} onClick={() => {addSelect("reviews")}}>Отзывы</Link>
                <Link to="/contacts" className={`${styles.link} ${select === "contacts" ? styles.selected : null}`} onClick={() => {addSelect("contacts")}}>Контакты</Link>
                <img src={basket} alt="basket" />

            </div>
            </div>
        </div>
    </>
}

export default Header