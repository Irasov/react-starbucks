import React from "react";
import styles from './New.module.scss';

const New: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.info}>
            <h2 className={styles.title}>
                New our <span>Products</span> 
            </h2>
            <p className={styles.text}>
              Have time to buy the most harmonious drinks in the new 
              Starbucks coffee and don't forget about the discount! 
              Starbucks coffee and don't forget about the discount!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default New;