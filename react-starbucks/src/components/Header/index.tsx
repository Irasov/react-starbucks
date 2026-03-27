import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <a href="#" className={styles.logo}>
            StarBucks
          </a>
          <div className={styles.icon}>
            <span></span>
          </div>
          <div className={styles.nav}>
            <div className={styles.menu}>
              <a href="#" className={styles.item}>Home</a>
              <a href="#" className={styles.item}>Select</a>
              <a href="#" className={styles.item}>Shop</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;