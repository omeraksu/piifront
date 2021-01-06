import React from "react";

import styles from "../styles/Home.module.css";
import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Powered by piiPerson</footer>
    </>
  );
}

export default Layout;
