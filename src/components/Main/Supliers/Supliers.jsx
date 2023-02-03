import styles from "./Supliers.module.css"
import gazprom from "./gazprom.png"
import msu from "./msu.png"
import samolet from "./samolet.png"
import lsp from "./lsp.png"
import slavbeton from "./slavbeton.png"
import worldlogistic from "./worldlogistic.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Supliers = () => {
    

    return <div className={styles.supliers_main}>
        <div className={styles.text}>
            <p className={styles.supl_mater}><b>Поставщики стройматериалов</b></p>
            <p>Список партнеров: карьеров и производителей стройматериалов</p>
        </div>
<div className={styles.swiper}>
            <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={4}
      navigation

    >
    
      <SwiperSlide><img src={gazprom} alt="" /></SwiperSlide>
      <SwiperSlide><img src={msu} alt="" /></SwiperSlide>
      <SwiperSlide><img src={samolet} alt="" /></SwiperSlide>
      <SwiperSlide><img src={lsp} alt="" /></SwiperSlide>
      <SwiperSlide><img src={worldlogistic} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slavbeton} alt="" /></SwiperSlide>
      
    </Swiper>
</div>

        </div>

}

export default Supliers