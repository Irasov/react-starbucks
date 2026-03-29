import React from "react";
import styles from "./NewCafe.module.scss"

const NewCafe: React.FC = () => {
  return (
    <div className={styles.root}>
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
            </div>
            
          
          </div>
        </div>
      </div>
    </div>

  )
}

export default NewCafe;