import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import basket from "./basket.png";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.substrate}></div>
        <div className={styles.main_of_header}>
          <div className={styles.logotype}>
            <h1 className={styles.textOfLogotype}>Союз Логистик</h1>
          </div>
          <div className={styles.whole_info}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              О компании
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Отзывы
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Контакты
            </NavLink>
            <NavLink to="/cart">
              <img className={styles.basket} src={basket} alt="basket" />
            </NavLink>
           
          </div>
          
        </div>
        {
          <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.regist : styles.notActiveRegist
              }
            >
              Регистрация/Вход
            </NavLink>

        }
        
      </div>
    </>
  );
};

export default Header;
