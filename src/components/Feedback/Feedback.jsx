import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFeedback } from "../../features/feedbackSlice";
import styles from "../Feedback/Feedback.module.css";
import setIMG from "../Feedback/Vector.png";
const Feedback = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sent, setSent] = useState(false);

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleValueName = (e) => {
    setName(e.target.value);
  };
  const handleValuePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleValueEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleValueText = (e) => {
    setText(e.target.value);
  };

  const handleOnclick = (e) => {
    dispatch(fetchFeedback({ name, phone, email, text }));
    setName("");
    setPhone("");
    setEmail("");
    setText("");
    setSent(true);
  };

  const handleClick = (e) => {
    if (name.length === 0) {
      setError("name");
    } else if (
      phone.length === 0 ||
      phone.split("")[0] !== "+" ||
      phone.length < 12
    ) {
      setError("phone");
    } else if (
      email.length === 0 ||
      email.split("@") !== 2 ||
      email.split("@")[1] !== "gmail.com"
    ) {
      setError("email");
    } else if (text.length === 0) {
      setError("text");
    }
  };

  return (
    <>
      {sent ? (
        <div className={styles.send}>
          <div className={styles.sendText}>Ваше сообщение принято.</div>
          <div>
            <img className={styles.sendImage} src={setIMG} alt="" />
          </div>
        </div>
      ) : (
        <div className={styles.feedback_body}>
          <div className={styles.text}>Напишите нам</div>
          <div className={styles.body_input_name}>
            <div>Имя</div>
            <input
              value={name}
              className={`${styles.input_name} ${
                error === "name" ? styles.error : null
              } `}
              onChange={handleValueName}
              placeholder="Ваше имя"
              type="text"
            />
          </div>
          <div className={styles.body_input_phone}>
            <div>Телефон</div>
            <input
              value={phone}
              onChange={handleValuePhone}
              className={`${styles.input_phone} ${
                error === "phone" ? styles.error : null
              } `}
              placeholder="+7"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className={styles.body_input_email}>
            <div>Email</div>
            <input
              onChange={handleValueEmail}
              value={email}
              className={`${styles.input_email} ${
                error === "email" ? styles.error : null
              } `}
              placeholder="Email для отправки документов"
              type="text"
            />
          </div>
          <div className={styles.body_input_text}>
            <div className={styles.sms}>Сообщение</div>
            <textarea
              onChange={handleValueText}
              value={text}
              className={`${styles.input_text} ${
                error === "text" ? styles.error : null
              } `}
              placeholder="Текст сообщения"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className={styles.addButton}>
            <button
              onClick={() =>
                (name.length > 0 &&
                  phone.length > 0 &&
                  email.length > 0 &&
                  text.length > 0 &&
                  email.split("@").length === 2 &&
                  email.split("@")[1] === "gmail.com" &&
                  phone.split("")[0] === "+" &&
                  phone.length > 12)
                  ? handleOnclick()
                  : handleClick()
              }
              className={styles.button}
            >
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Feedback;
