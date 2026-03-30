import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const iconClick = () => {
    document.body.classList.toggle('_lock');
    setActive(!active);
  }
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <Link to="/" className={styles.logo}>
            StarBucks
          </Link>
          <div className={`${styles.nav} ${active ? styles.active: ''}`} >
            <div className={styles.menu}>
              <Link to="/" className={styles.item}>Home</Link>
              <a href="#" className={styles.item}>Select</a>
              <a href="#" className={styles.item}>Shop</a>
            </div>
          </div>
          <div className={`${styles.icon} ${active ? styles.active : ''}`} onClick={iconClick}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;