import React from "react";
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              Our <span>Contacts</span>
            </h2>
            <p className={styles.subtitle}>
              Have time to buy the most harmonious drinks in the new 
              Starbucks coffee and don't forget about the discount!
            </p>
            <a href="#" className="{styles.instagram}">@supercoffee</a>
            <a href="tel:+79999999999" className="{styles.instagram}">+7-999-999-99-99</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts;