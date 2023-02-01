import styles from "./HowWork.module.css"
import clipboard from "./clipboard.png"
import tracking from "./tracking.png"
import browser from "./browser.png"
import shopping from "./shopping.png"



import { useRef, useState } from "react"

const HowWork = () => {
    const clipboard1 = useRef()
    const [anim, setAnim] = useState("")

    document.addEventListener("scroll", () => {
        if(window.scrollY > 210){
            setAnim("clipboard")

        }else{
            setAnim("")

        }
        
    })

    return <div className={styles.main}>
        <div className={styles.question}>
            <p>КАК РАБОТАЕТ СЕРВИС?</p>
        </div>
        <div className={styles.answer}>
            <div  className={`${styles.first} ${anim === "clipboard" ? styles.clipboard_anim : null}`}>
                <img src={clipboard} alt="" />
                <p>Указываете нужный материал, адрес доставки, объем</p>
            </div>
            <div ref={clipboard1} className={`${styles.first}`}>
                <img src={tracking} alt="" />
                <p>Получаете несколько вариантов поставщиков и доставки</p>
            </div>
            <div ref={clipboard1} className={`${styles.first}`}>
                <img src={browser} alt="" />
                <p>Добавляете подходящий вариант в корзину и формируете заказ</p>
            </div>
            <div  className={`${styles.first} ${anim === "clipboard" ? styles.shoppingCartAnim : null}`}>
                <img src={shopping} alt="" />
                <p>Оформляете заказ через корзину</p>
            </div>

        </div>
    </div>
}

export default HowWork