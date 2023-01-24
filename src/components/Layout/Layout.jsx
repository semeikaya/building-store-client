import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Search from "../../components/Search/Search";

const Layout = () => {
  return (
    <div className={styles.body}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Layout;
