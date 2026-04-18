import React from "react";
import styles from "./Footer.module.scss"
import icon from "@/assets/img/instagram.png"
import iconUp from "@/assets/img/up.png"
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const up = () => {
    window.scrollTo(0, 0);
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className={styles.body}>
          <div className={styles.block}>
            <Link to="/" className={styles.logo}>StarBucks</Link>
            <nav className={styles.menu}>
              <ul className={styles.group}>
                <li className={styles.name}>
                  Main
                  <ul className={styles.items}>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Buy
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        More
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className={styles.group}>
                <li className={styles.name}>
                  We Make
                  <ul className={styles.items}>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Buy
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className={styles.group}>
                <li className={styles.name}>
                  Products
                  <ul className={styles.items}>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Cappuccino
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Fast
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Fast
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className={styles.group}>
                <li className={styles.name}>
                  Events
                  <ul className={styles.items}>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Drinks
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Eat
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className={styles.group}>
                <li className={styles.name}>
                  Contacts
                  <ul className={styles.items}>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Instagram
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.link}>
                        Number
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <button className={styles.up}><img src={iconUp} alt="Up" className={styles.iconup} onClick={up} /></button>
          </div>
          <div className={styles.extra}>
            <a href="tel:+7-999-999-99-99" className={styles.tel}>
              +7-999-999-99-99
            </a>
            <a href="#" className={styles.instagram}>
              <img src={icon} alt="instagram" className={styles.icon}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;