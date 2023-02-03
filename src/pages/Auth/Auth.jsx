import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authSingUp } from "../../features/authSlice";
import styles from "../Auth/Auth.module.css";
import fb from '../../components/Login/img/Fb.png'
import vk from  '../../components/Login/img/Vk.png';
import google from '../../components/Login/img/Google.png'
import { useEffect } from "react";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  const dispath = useDispatch();

  const handleSend = (e) => {
    e.preventDefault();
    dispath(authSingUp({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };
  const token = useSelector((state) => state.authReducer.token)
  const navigate = useNavigate()

  useEffect(() => {
    if(token){
        navigate('/')
    }
  }, [dispath, navigate, token])


  const handleIfError = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setError("name");
    } else if (email.length === 0) {
      setError("email");
    } else if (password.length === 0) {
      setError("password");
    } else if (password2.length === 0) {
      setError("password2");
    } else if (password !== password2) {
      setError("password3");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link to="/auth" className={styles.singUpText}>
          Регистрация
        </Link>
      </div>
      <div className={styles.textSocset}>
        <b>Через соцсети</b>{" "}
        <span className={styles.textSocset2}>
          (рекомендуем для новых покупаетелей)
        </span>
      </div>
      <div className={styles.icons}>
        <div className={styles.vkDiv}>
          <div>
            <img className={styles.vkImg} src={vk} alt="" />
          </div>
          <div className={styles.vkText}>ВKонтакте</div>
        </div>

        <div className={styles.fbDiv}>
          <div>
            {" "}
            <img className={styles.fbImg} src={fb} alt="" />
          </div>
          <div className={styles.fbText}>Facebook</div>
        </div>

        <div className={styles.googleDiv}>
          <div>
            <img className={styles.googleImg} src={google} alt="" />
          </div>
          <div className={styles.googleText}>Google</div>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          name.length > 0 &&
          email.length > 0 &&
          password.length > 0 &&
          password2.length > 0 &&
          password === password2
            ? handleSend(e)
            : handleIfError(e);
        }}
        className={styles.form}
      >
        <div>Имя</div>
        <input
          onChange={handleName}
          value={name}
          className={`${styles.name} ${
            error === "name" ? styles.error : null
          } `}
          type="text"
          name=""
          id=""
        />
        {error === "name" && (
          <div className={styles.errorName}>
            Поле "Имя" должно быть заполнено
          </div>
        )}
        <div className={styles.emailText}>Номер телефона или email</div>
        <input
          onChange={handleEmail}
          value={email}
          className={error === "email" ? styles.error : styles.email}
          type="text"
          name=""
          id=""
        />
        {error === "email" && (
          <div className={styles.errorEmail}>
            Поле "Email" должно быть заполнено
          </div>
        )}
        <div className={styles.passwordText}>Пароль</div>
        <input
          onChange={handlePassword}
          value={password}
          className={error === "password" ? styles.error : styles.password}
          type="text"
          name=""
          id=""
        />
        {error === "password" && (
          <div className={styles.errorPassword}>
            Поле "Пароль" должно быть заполнено
          </div>
        )}
        <div className={styles.passwordText2}>Повторите пароль</div>
        <input
          onChange={handlePassword2}
          value={password2}
          className={error === "password2" ? styles.error : styles.password2}
          type="text"
          name=""
          id=""
        />
        {error === "password2" && (
          <div className={styles.errorPassword2}>Повторите пароль</div>
        )}
        {error === "password3" && (
          <div className={styles.errorPassword3}>Пароли должны совпадать</div>
        )}

        <button className={styles.button}>РЕГИСТРАЦИЯ</button>
        <div className={styles.end}>Уже есть аккаунт? <Link className={styles.end2} to='/login'><b>Войти</b></Link></div> 
      </form>
    </div>
  );
};
export default Auth;
