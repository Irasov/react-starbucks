import React from "react";
import styles from "./Delicius.module.scss";
import interior from "@/assets/img/interior.png";
import coocking from "@/assets/img/coocking.png";

const Delicius: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.interior}>
            <div className="interior__image">
               <img src={interior} alt="interior" className={styles.interior__img} />
            </div>
            <div className={styles.interior__star}>
              <p>WE HAVE</p>
            </div>
          </div>
          <div className={styles.coocking}>
            <h2 className={styles.coocking__title}>
              We make <span>delicious</span>
            </h2>
            <p className={styles.coocking__subtitle}>
              Only in 2021 we have made more than 100,000 orders for you, your 
              loved ones, all of you, and in 2022 we are ready to destroy the market
            </p>
            <div className={styles.coocking__video}>
              <div className={styles.coocking__image}>
                <img src={coocking} alt="coocking" className={styles.coocking__img} />
                <button className={styles.coocking__btn}>
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.889465 13.3246L0.889465 1.56775L10.7205 7.44568L0.889465 13.3246Z" stroke="white" stroke-width="1.77899" stroke-miterlimit="1.55572" />
                  </svg> Cooking Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delicius;