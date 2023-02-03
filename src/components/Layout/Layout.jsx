  import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Chat from "../Chat/Chat";


const Layout = () => {
  return (
    <div className={styles.body}>
      <Header/>
      <main className={styles.main}>
        <Outlet />
      <Chat/>
        
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Layout;
