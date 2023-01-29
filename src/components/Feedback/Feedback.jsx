import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFeedback } from "../../features/feedbackSlice";
import styles from "../Feedback/Feedback.module.css";
import setIMG from "../Feedback/Vector.png";
const Feedback = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
    setTimeout(() => {
      setSent(false)
    }, 1000)
  };

  const handleClick = (e) => {
    if (name.length === 0) {
      setError("name");
    } else if (phone.length === 0) {
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
setTimeout(() => {
  setError("")
}, 1500)
    
  };

  return (
    <>
       (
        <div className={styles.feedback_body}>
          <div className={styles.text}>Напишите нам</div>
          <div className={styles.middle}>
          <div className={styles.leftMiddle}>
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
          </div>
          <div className={styles.body_input_text}>
            <div className={styles.sms}>Сообщение</div>
            <input
              onChange={handleValueText}
              value={text}
              className={`${styles.input_text} ${
                error === "text" ? styles.error : null
              } `}
              placeholder="Текст сообщения"
              type="text"
            />
          </div></div>
          <div className={styles.down}>
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
          
          <div className={styles.addButton}>
            <button
              onClick={() =>
                name.length > 0 &&
                phone.length > 0 &&
                email.length > 0 &&
                text.length > 0 &&
                email.split("@").length === 2 &&
                email.split("@")[1] === "gmail.com"
                  ? handleOnclick()
                  : error === "" ? handleClick() : null
              }
              className={styles.button}
            >
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
          </div>
          
      ){sent ? (
        <div className={styles.send_block}>
        <div className={styles.send}>
        <div>
            <img className={styles.sendImage} src={setIMG} alt="" />
          </div>
          <div className={styles.sendText}>Ваше сообщение принято.</div>
          
        </div>
        </div>
      ) : null}
    </>
  );
};
export default Feedback;
