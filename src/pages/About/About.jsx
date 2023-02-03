import styles from "../About/About.module.css";
import Kamaz from "../About/img/Kamaz.png";
import img1 from "../About/img/img1.png";
import img2 from "../About/img/img2.png";
import img3 from "../About/img/img3.png";
import img4 from "../About/img/img4.png";
import img5 from "../About/img/img5.png";
import img6 from "../About/img/img6.png";
import img7 from "../About/img/img7.png";
import img8 from "../About/img/img8.png";
import bigImg from "../About/img/bigimg.png";
const About = () => {
  return (
    <>
      {/* Первый див */}
      <div className={styles.main}>
        <div className={styles.textDiv}>
          <div className={styles.text1}>Подробнее о нашей компании</div>
          <div className={styles.text2}>
            1. Гарантируем доставку в течение 24 часов после заказа.{" "}
            <div>
              <b>Иначе компенсируем 20% стоимости заказа.</b>{" "}
            </div>
          </div>
          <div className={styles.text3}>
            2. Гарантируем доставку с точностью до 2 часов
            <div className="div">
              <b> Иначе компенсируем 30% от стоимости заказа.</b>
            </div>
          </div>
          <div className={styles.text4}>
            3. Четко соответствуем ГОСТ и техническим сертификатам на материал.
            Обеспечиваем возврат и замену материала при несоответствии.
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.button}>Рассчитать стоимость</button>
          </div>
        </div>

        <div className={styles.imgDiv}>
          <img className={styles.kamazImg} src={Kamaz} alt="" />
        </div>
      </div>
      {/* Второй див */}
      <div className={styles.suppliersDiv}>
        <div className={styles.bigText}>ПОСТАВЩИКИ СТРОЙМАТЕРИАЛОВ</div>
        <div className={styles.bigText2}>
          {" "}
          Список партнеров: карьеров и производителей стройматериалов
        </div>
        <div className={styles.list}>
          <div className={styles.fig}>
            <img className={styles.img} src={img1} alt="" />
          </div>
          <img className={styles.img1} src={img2} alt="" />
          <img className={styles.img1} src={img3} alt="" />
          <img className={styles.img1} src={img4} alt="" />
          <img className={styles.img1} src={img5} alt="" />
          <img className={styles.img1} src={img6} alt="" />
          <img className={styles.img1} src={img7} alt="" />
          <div className={styles.fig2}>
            <img className={styles.img0} src={img8} alt="" />
          </div>
        </div>
        <div className={styles.bigDiv}>
          <div className={styles.bigDiv}>
            <img className={styles.bigImg} src={bigImg} alt="" />
          </div>
          <div className={styles.footer}>
            <div className={styles.footerText}>ТРАНСПОРТ ДЛЯ ПЕРЕВОЗКИ МАТЕРИАЛОВ</div>
            <div className={styles.footerText1}>
              Доставку материалов мы производим 25, 30 и 40 тонными самосвалами
              марок Камаз, SCANIA, HOWO, DAF, MAN — 7.000 тонн ежемесячно.
            </div>
            <div className={styles.footerText2}>
              Подбор автомобиля при доставке с помощью нашего сервиса поможет
              сэкономить вам до 100% стоимости на 1 тонне!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
