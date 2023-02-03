import styles from "./More.module.css";
import kamaz from "./kamaz.png"
import { useState } from "react";

const More = () => {
    const [coord, setCoord] = useState([0, 0])
    document.body.addEventListener("mousemove", (e) => {
        document.body.style.cssText = `--coordX: ${e.clientX}px; --coordY: ${e.clientY}px`
    })

  return (
    <div className={styles.more}onMouseMove={(e) => {
        
    }}>
      <div className={styles.more_in}>
        <div className={styles.left}>
          <div className={styles.left_top}>
            <p>Подробнее о нашей компании</p>
          </div>
          <div className={styles.left_middle}>
            <p className={styles.blockOfText}>
              1. Гарантируем доставку в течение 24 часов после заказа.
              <p className={styles.orText}>
                <b>Иначе компенсируем 20% стоимости заказа. </b>
              </p>
            </p>
            <p className={styles.blockOfText}>
              2. Гарантируем доставку с точностью до 2 часов.
              <p className={styles.orText}>
                <b>Иначе компенсируем 30% от стоимости заказа.</b>
              </p>{" "}
            </p>
            <p className={styles.blockOfText}>
              3. Четко соответствуем ГОСТ и техническим сертификатам на
              материал. Обеспечиваем возврат и замену материала при
              несоответствии.
            </p>
          </div>
          <div className={styles.left_down}>
            <input type="button" onClick={() => {
                window.scrollBy({
                    top: -11200,
                    behavior: "smooth"
                })

            }} className={styles.button} value="Рассчитать стоимость"/>
          </div>
        </div>
        <div className={styles.right}>
            <div className={styles.img_div}>

            </div>
        </div>
      </div>
    </div>
  );
};

export default More;
