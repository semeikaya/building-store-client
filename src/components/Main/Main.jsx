import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../features/productsSlice"
import styles from "./Main.module.css"

const Main = () => {

    const dispatch = useDispatch()
    const arr = useSelector(state => state.productsReducer)

    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);


      const [prod, setProd] = useState(arr)
      const [cards,showCards ] = useState("")
      const [value,setValue ] = useState("")


    
      const findArr = (e) => {
          setProd(arr.filter(item => {
            return item.name.toLowerCase().trim().indexOf(e.target.value.toLowerCase().trim()) != -1 ? item : null
          }))
          if(e.target.value != ""){
            showCards("show")
          }else{
            showCards("")
          }
          setValue(e.target.value)
      }

      const handleSel = (name) => {
        setValue(name)
        showCards("")

      }

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
                        <input type="text" onChange={findArr} className={styles.material_input} value={value} placeholder="Выберите материал"/>
                        <div className={`${styles.material_find} ${cards === "show" ? styles.show : null}`}>{
                    prod.map(item => {
            return <button onClick={() => handleSel(item.name)} className={styles.product_names}>{item.name}</button>
            
          })}</div>
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