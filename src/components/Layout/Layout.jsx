import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Chat from "../Chat/Chat";
import Footer from "../Footer/Footer";


const Layout = () => {
  return (
    <div className={styles.body}>
      <Header/>
      <main className={styles.main}>
        <Outlet />
      <Chat/>
        
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
