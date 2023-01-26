import styles from "./Main.module.css"

const Main = () => {
    return <>
        <div className={styles.calculation_window}>
                <div className={styles.calc_center}>
                <div className={styles.main_info}>
                    <p>Быстрый расчет стоимости 
                    стройматериалов и доставки по всей России <p className={styles.orange_text}>с использованием искусственного интеллекта</p></p>
                </div>
                <div className={styles.calc_info}>
                    <div className={styles.material_block}>
                        <p>Материал</p>
                        <input type="text" className={styles.material_input} placeholder="Выберите материал"/>
                    </div>
                    <div className={styles.address_block}>
                        <p>Адрес доставки</p>
                        <input type="text" className={styles.address_input} placeholder="Адрес доставки"/>
                    </div>
                    <div className={styles.volume_block}>
                        <p>Объем, тонн</p>
                        <input type="text" className={styles.volume_input} placeholder="Объем, тонн"/>
                    </div>
                    <div className={styles.button_block}>
                        
                        <input type="button" value="РАССЧИТАТЬ" className={styles.calc_input} placeholder="Выберите материал"/>
                    </div>
                </div>




                </div>
                <div className={styles.back}>
                </div>
                <div className={styles.square_orange}></div>
                <div className={styles.square_orange1}></div>

                
        </div>
    </>
}

export default Main