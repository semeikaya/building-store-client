import { useSelector } from "react-redux"
import styles from "./Main.module.css"

const Card = (props) => {
    const products = props.products

    return <>{products.length > 0 ? products.map(item => {
        return <div className={styles.block_of_searched}>
            <div className={styles.up_block}>
                <div className={styles.picture_block}>
                    <img className={styles.image_material} src={`${item.productPicture}`} alt="" />
                </div>
                <div className={styles.info_block}>
                    <div className={styles.name_block}>
                    <p className={styles.name_product}>{item.productName}</p>
                    </div>
                    <div className={styles.in_up}>
                        <div className={styles.text_of_postav}>
                            <div className={styles.tochki}>
                            <p className={styles.gray_text}>Поставщик:</p> 
                            <div className={styles.line}></div>
                            <p>{item.supplier} </p>

                            </div>
                            <div className={styles.tochki}>
                            <p className={styles.gray_text}>Цена:  </p> 
                            <div className={styles.line}></div>
                            <p>{item.price} </p>
                            </div>
                            <div className={styles.tochki}>
                            <p className={styles.gray_text}>Цена за доставку: </p> 
                            <div className={styles.line}></div>
                            <p>1000 руб</p>
                            </div>
                            
                            

                        </div>
                        <div className={styles.whole_price_div}>
                        <p className={styles.whole_price}>Цена всего: <p className={styles.whole_price_num}>{Number(item.price.split(" ")[0]) * props.count + 1000}</p></p>
                        </div>
                    </div>
                    
                    

                </div>
                
            </div>
            <div>

            </div>
            <div className={styles.in_down}>
                        <div className={styles.inputs_of_card}>
                            <input type="button" value="ДОБАВИТЬ К ЗАКАЗУ"/>
                            <input type="button" value="ЗАКАЗАТЬ"/>

                        </div>
                    </div>
    
            </div>
      }) : null}
      </>
      
}

export default Card