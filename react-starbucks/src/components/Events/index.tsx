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

            </div>
            <div className={styles.block__down}>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events;