import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const MOBILE_WIDTH = 719.98;

const Header: React.FC = () => {
  const [active, setActive] = React.useState(false);

  const iconClick = () => {
    setActive((prev)=> !prev);
  }

  React.useEffect(()=> {
    document.body.classList.toggle("_lock", active);
    return () => {
      document.body.classList.remove("_lock");
    };
  }, [active]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_WIDTH) {
        setActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className={styles.body}>
          <Link to="/" className={styles.logo}>
            StarBucks
          </Link>
          <div className={`${styles.nav} ${active ? styles.active: ''}`} >
            <div className={styles.menu}>
              <Link to="/" className={styles.item} onClick={active ? iconClick : undefined}>Home</Link>
              <a href="#" className={styles.item}>Select</a>
              <Link to="/shop" className={styles.item} onClick={active ? iconClick : undefined}>Shop</Link>
            </div>
          </div>
          <div className={`${styles.icon} ${active ? styles.active : ''}`} onClick={iconClick}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;