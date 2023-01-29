import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { autocompleteProducts, getProducts } from "../../features/productsSlice"
import Card from "./Card"
import styles from "./Main.module.css"


const Main = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer.products)
    const [value,setValue ] = useState("")
    const [cards,showCards ] = useState("")
    const [bol , setBol] = useState("false")
    const [metres3 , setMetres] = useState("")
    const [selectedMaterial , changeSelect] = useState("false")
    const [address , setAddress] = useState("")
    const [error , setError] = useState("")




    const handleMetres = (e) => {
        setMetres(e.target.value)
    }
    
    if(bol === "true"){
      document.body.className = "none"
    }else{
      document.body.className = "scroll"

    }
    
    const handleError = () => {
      if(selectedMaterial !== "true"){
        setError("material")
      }else if(address.length === 0){
        setError("address")
      }else if(metres3.length === 0){
        setError("volume")
      }
      let time = setTimeout(() => {
        setError("")
      }, 2000)
      
    }

    useEffect(() => {
        dispatch(autocompleteProducts(value));
      }, [dispatch, value]);


      const findArr = (e) => {
          if(e.target.value != ""){
            showCards("show")
          }else{
            showCards("")

          }
          setValue(e.target.value)
          changeSelect("false")
      }
      const handleAddress = (e) => {
        setAddress(e.target.value)
      }

      const handleSel = (name) => {
        setValue(name)
        showCards("")
        changeSelect("true")

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
                        <input type="text" onChange={findArr} className={`${styles.material_input} ${error === "material" ? styles.error : null}`} value={value} placeholder="Выберите материал"/>
                        <div className={`${styles.material_find} ${cards === "show" ? styles.show : null}`}>{
                    products.length > 0 ? products.map(item => {
            return <button onClick={() => handleSel(item.productName)} className={styles.product_names}>{item.productName}</button>
            
          }) : null}</div>
                    </div>
                    <div className={styles.address_block}>
                        <p>Адрес доставки</p>
                        <input type="text" value={address} onChange={handleAddress} className={`${styles.address_input} ${error === "address" ? styles.error : null}`} placeholder="Адрес доставки"/>
                    </div>
                    <div className={styles.volume_block}>
                        <p>Количество, м3</p>
                        <input type="text" className={`${styles.volume_input} ${error === "volume" ? styles.error : null}`} onChange={handleMetres} value={metres3} placeholder="Количество, м3"/>
                    </div>
                    <div className={styles.button_block}>
                        
                        <input type="button" value="РАССЧИТАТЬ" onClick={() => address.length > 0 && metres3.length > 0 && selectedMaterial === "true" ? setBol("true") : error === "" ? handleError() : null} className={styles.calc_input} placeholder="Выберите материал"/>
                    </div>
                </div>




                </div>
                <div className={styles.back}>
                </div>
                <div className={styles.square_orange}></div>
                <div className={styles.square_orange1}></div>

               
                
        </div>
        <div className={`${bol === "true" ? styles.modal_window : null} `}>
                  <Card products={products} count={Number(metres3)} />

                  </div>
        <button onClick={() => setBol("false")} style={{position: "fixed"}} className={`${bol === "true" ? styles.podlozhka : null} `}>


            </button>

    </>
}

export default Main