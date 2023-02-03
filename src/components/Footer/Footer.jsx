import { Link } from "react-router-dom"
import styles from "./Footer.module.css"
import f from "./f.png"

const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.main}>
        <div className={styles.top}>
        <div className={styles.top_left}>
            <p><b>Союз Логистик</b></p>
        </div>
        <div className={styles.top_left_middle}>
            <p className={styles.text_top} ><b>Меню</b></p>
            <Link to="/" className={styles.link}>Главное</Link>
            <Link to="/about" className={styles.link}>О компании</Link>
            <Link to="/reviews" className={styles.link}>Отзывы</Link>
            <Link to="/contacts" className={styles.link}>Контакты</Link>
            <Link to="/cart" className={styles.link}>Корзина</Link>
        </div>
        <div className={styles.top_right_middle}>
        <p className={styles.text_top}><b>Контакты</b></p>
        <p className={styles.link1}>ул. Князя Владимира Великого, 14, оф. 407
г. Днепр, Украина</p>
<p className={styles.link1}>(067) 811-89-58</p>
<p className={styles.link1}>sales@soyuzlogistic.com</p>

        </div>
        <div className={styles.top_right}>
        <p className={styles.text_top}><b>Мы в соцсетях</b></p>
        <a className={styles.link} href="https://www.google.com/?client=safari&channel=iphone_bm"><img src={f} alt=""/></a> 

        </div>
        </div>
        <div className={styles.bottom}>
            <p>© 2021 Союз логистик. Все права защищены.</p>
        </div>
        </div>

    </div>
}
export default Footer