import styles from "../Feedback/Feedback.module.css";
const Feedback = () => {
  return (
    <form className={styles.feedback_body}>
      <div className={styles.text}>Напишите нам</div>
      <div className={styles.body_input_name}>
        <div>Имя</div>
        <input className={styles.input_name} placeholder="Ваше имя" type="text" />
      </div>
      <div className={styles.body_input_phone}>
        <div>Телефон</div>
        <input className={styles.input_phone} placeholder="+7" type="text" name="" id="" />
      </div>
      <div className={styles.body_input_email}>
        <div>Email</div>
        <input className={styles.input_email} placeholder="Email для отправки документов" type="text" />
      </div>
      <div className={styles.body_input_text}>
        <div style={{fontsize: '16px'}}>Сообщение</div>
        <input className={styles.input_text} placeholder='Текст сообщения' type="text" name="" id="" />
      </div>
    </form>
  );
};
export default Feedback;
