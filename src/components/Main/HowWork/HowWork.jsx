import styles from "./HowWork.module.css"
import clipboard from "./clipboard.png"
import tracking from "./tracking.png"
import browser from "./browser.png"
import shopping from "./shopping.png"



import { useRef, useState } from "react"

const HowWork = () => {
    const work = useRef()

    const clipboard1 = useRef()
    const [anim, setAnim] = useState("")
    const [anim1, setAnim1] = useState("")


    document.addEventListener("scroll", () => {
        if(window.scrollY > 210){
            setAnim("clipboard")
            setTimeout(() => {
                setAnim1("img_anim")
            }, 2000)
        }else{
            setAnim("")
            setAnim1("")

        }
        

        
    })
 

    return <div ref={work} className={styles.main}>
        <div className={styles.question}>
            <p>КАК РАБОТАЕТ СЕРВИС?</p>
        </div>
        <div className={styles.answer}>
            <div  className={`${styles.first} ${anim === "clipboard" ? styles.clipboard_anim : null}`}>
                <img src={clipboard} className={anim1 === "img_anim" ? styles.img_anim : null} alt="" />
                <p>Указываете нужный материал, адрес доставки, объем</p>
            </div>
            <div ref={clipboard1} className={`${styles.first}`}>
                <img src={tracking} className={anim1 === "img_anim" ? styles.img_anim3 : null} alt="" />
                <p>Получаете несколько вариантов поставщиков и доставки</p>
            </div>
            <div ref={clipboard1} className={`${styles.first}`}>
                <img src={browser} className={anim1 === "img_anim" ? styles.img_anim1 : null} alt="" />
                <p>Добавляете подходящий вариант в корзину и формируете заказ</p>
            </div>
            <div  className={`${styles.first} ${anim === "clipboard" ? styles.shoppingCartAnim : null}`}>
                <img src={shopping} className={anim1 === "img_anim" ? styles.img_anim2 : null} alt="" />
                <p>Оформляете заказ через корзину</p>
            </div>

        </div>
    </div>
}

export default HowWork