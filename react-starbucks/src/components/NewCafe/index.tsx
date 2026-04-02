import React from "react";
import { Link } from "react-router-dom";
import styles from "./NewCafe.module.scss";
import coffee from "@/assets/img/coffee.png";
import lines from "@/assets/img/lines.png";
import tasty from "@/assets/img/tasty.png";
import fast from "@/assets/img/fast.png";
import available from "@/assets/img/available.png";

const NewCafe: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.upblock}>
            <div className={styles.info}>
              <h1 className={styles.title}>
                New Cafe by <span>StarBucks</span>
              </h1>
              <p className={styles.text}>
                Have time to buy the most harmonious drinks in the 
                new Starbucks coffee and don't forget about the discount!
              </p>
              <div className={styles.buttons}>
                <button className={styles.btn}>Select a Coffe</button>
                <Link to="/shop" className={styles.btnMore}>More</Link>
              </div>
              <div className={styles.properties}>         
                <div className={styles.property}>
                  <p className={styles.property__count}>
                    9K<span>+</span>
                  </p>
                  <p className={styles.property__text}>
                    Premium Users
                  </p>
                </div>
                <div className={styles.property}>
                  <p className={styles.property__count}>
                    2K<span>+</span>
                  </p>
                  <p className={styles.property__text}>
                    Happy Customer
                  </p>
                </div>
                <div className={styles.property}>
                  <p className={styles.property__count}>
                    28<span>+</span>
                  </p>
                  <p className={styles.property__text}>
                    Awards Wining
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <img src={lines} alt="Lines" className={styles.lines} />
              <img src={coffee} alt="Coffee" />
            </div>
          </div>
          <div className={styles.downBlock}>
            <div className={styles.downBlock__item}>
                <img src={tasty} alt="Tasty" className={styles.downBlock__img} />
                <h3 className={styles.downBlock__title}>Tasty</h3>
                <p className={styles.downBlock__subtitle}>
                  We have the most delicious coffee
                </p>
            </div>
            <div className={styles.downBlock__item}>
                <img src={fast} alt="Fast" className={styles.downBlock__img} />
                <h3 className={styles.downBlock__title}>Fast</h3>
                <p className={styles.downBlock__subtitle}>
                  Our cafe will serve you quickly
                </p>
            </div>
            <div className={styles.downBlock__item}>
                <img src={available} alt="Available" className={styles.downBlock__img} />
                <h3 className={styles.downBlock__title}>Available</h3>
                <p className={styles.downBlock__subtitle}>
                  Cafe will serveat the most pleasant prices
                </p>
            </div>
            <div className={styles.downBlock__star}>
              <p>WE HAVE</p>
            </div>
          </ div>
        </div>
      </div>
    </section>

  )
}

export default NewCafe;