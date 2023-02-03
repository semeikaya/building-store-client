import styles from "../Contact/Contact.module.css";
import img from "../Contact/img.contact/Vector.png";
import img2 from "../Contact/img.contact/telephone.png";
import img3 from "../Contact/img.contact/fi_mail.png";

import whatsapp from "../Contact/img.contact/whatsapp 1.png";
import viber from "../Contact/img.contact/Viber.png";
import telegram from "../Contact/img.contact/telegram 1.png";
import fb from "../Contact/img.contact/facebook.png"

import Feedback from "../../components/Feedback/Feedback";

const Contact = () => {
  return (
    <> <div className={styles.mainContacts}>
    <div className={styles.left}>
      <div className={styles.textContact}>Контакты</div>
      <div className={styles.body}>
        <div className={styles.info}>
          <div className={styles.address}>
            <div className={styles.address_img}>
              <img className={styles.address_img2} src={img} alt="" />
            </div>
            <div className={styles.address_text}>
              ул. Князя Владимира Великого, 14, оф. 407 г. Грозный, Чеченская
              Республика
            </div>
          </div>
          <div className={styles.phone_number}>
            <div className={styles.telephone_img}>
              <img className={styles.telephone_img2} src={img2} alt="" />
            </div>
            <div className={styles.telephone_text}>+7938-020-16-96</div>
          </div>
          <div className={styles.email}>
            <div className={styles.email_img_div}>
              <img className={styles.email_img} src={img3} alt="" />
            </div>
            <div className={styles.email_text}>gadaevduk@gmai.com</div>
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.mes}>Мессенджеры</div>
          <div className={styles.icons}>
            <a href=" https://api.whatsapp.com/send? phone=79380201696">
              <img className={styles.wh_img} src={whatsapp} alt="" />
            </a>
            <a href="dss">
              <img className={styles.vb_img} src={viber} alt="" />
            </a>
            <a href="https://t.me/bersyak">
              <img className={styles.tg_img} src={telegram} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.social_network}>
          <div className={styles.socset_text}>Мы в соцсетях</div>
          <div>
            <a href="dfdsf"><img className={styles.facebook} src={fb} alt="" /></a>
          </div>
        </div>
        
      </div>
      </div>
      <Feedback />
      </div>
    </>
  );
};
export default Contact;
