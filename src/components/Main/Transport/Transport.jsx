import styles from "./Transport.module.css"

const Transport = () => {
    return <div className={styles.transport}>
        <div className={styles.main}>
            <div className={styles.left}>
            <p className={styles.mainText} >Транспорт для перевозки материалов</p>
            <p className={styles.textTop}>Доставку материалов мы производим 25, 30 и 40 тонными самосвалами марок Камаз, SCANIA, HOWO, DAF, MAN — 7.000 тонн ежемесячно.</p>
            <p className={styles.textTop}>Подбор автомобиля при доставке с помощью нашего сервиса поможет сэкономить вам до 100% стоимости на 1 тонне!</p>
            <input type="button" className={styles.but} value="Рассчитать заказ" onClick={() => {
                window.scrollBy({
                    top: -12000,
                    behavior: "smooth"
                })
            }}/>
            </div>
            
        </div>
    </div>
}

export default Transport