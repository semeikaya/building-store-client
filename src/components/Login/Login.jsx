import styles from "../Login/Login.module.css";
import vk from "../Login/img/Vk.png";
import fb from "../Login/img/Fb.png";
import google from "../Login/img/Google.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSingIn } from "../../features/authSlice";
import { useEffect } from "react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const error = useSelector((state) => state.authReducer.error)
  const token = useSelector((state) => state.authReducer.token)

  useEffect(() => {
    if(token){
        navigate('/')
    }
  }, [dispatch, navigate, token])

  const handleloginValue = (e) => {
    setLogin(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value)
  };
    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(authSingIn({login, password}))
        setLogin('')
        setPassword('')
    }

    
  return (
    <div className={styles.bod}>
    <div className={styles.loginBody}>
      <div className={styles.basicText}>Вход</div>

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

      <div className={styles.textDiv}>
        <div className={styles.text1}>
          С помощью аккаунта <span className={styles.text3}>Союз логистик</span>
        </div>
        <Link to="/auth" className={styles.text2}>
          Создать аккаунт
        </Link>
      </div>

      <div className={styles.inputsDiv}>
        <input
          value={login}
          onChange={handleloginValue}
          placeholder="Номер телефона или email"
          className={styles.inputLogin}
          type="text"
        />
        <input
          value={password}
          onChange={handlePasswordValue}
          placeholder="Введите пароль"
          className={styles.inputPassword}
          type="text"
        />
         {error === true && <div className={styles.error}>Неверный логин или пароль</div>}
      </div>
     

      <div className={styles.buttons}>
        <div>
          <button 
         
          onClick={handleAdd} className={styles.button}>Войти</button>
        </div>
        <div>
          <Link className={styles.helpPassword}>Забыли пароль?</Link>{" "}
        </div>
      </div>
      
     
      
    </div>
    </div>
    
  );
};
export default Login;
