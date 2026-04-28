import React from "react";
import styles from './Events.module.scss';

const Events: React.FC = () => {
  return(
    <section className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.info}>
            <p className={styles.subtitle}>
              Only in 2021 we have made more than 100,000 
              orders for you, your loved ones, all 
              of you, and in 2022 we are ready to destroy the market
            </p>
            <h2 className={styles.title}>
              Our New <span>Events</span>
            </h2>
          </div>
          <div className={styles.block}>
            <div className={styles.block__up}>
              <div className={`${styles.item__up} ${styles.item__up_one}`}>
                <div className={styles.title_item}>
                  TWO COFFEE FOR 1 PRICE
                </div>
                <a href="#" className={styles.btn_item}>More</a>
              </div>
              <div className={`${styles.item__up} ${styles.item__up_two}`}>
                <div className={styles.title_item}>
                  KITCHEN TOUR
                </div>
                <a href="#" className={styles.btn_item}>More</a>
              </div>
            </div>
            <div className={styles.block__down}>
              <div className={`${styles.item__down} ${styles.item__down_one}`}>
                <div className={styles.title_item}>
                  FREE COFFEE FOR 3 COFFEE
                </div>
                <a href="#" className={styles.btn_item}>More</a>
              </div>
              <div className={`${styles.item__down} ${styles.item__down_two}`}>
                <div className={styles.title_item}>
                  OUR INSTAGRAM
                </div>
                <a href="#" className={styles.btn_item}>More</a>
              </div>
              <div className={`${styles.item__down} ${styles.item__down_three}`}>
                <div className={`${styles.title_item} ${styles.title_item_big}`}>
                  WHERE ARE YOU CHOOSE US?
                </div>
                <a href="#" className={styles.btn_item}>More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events;