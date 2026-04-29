import React from "react";
import styles from './Contacts.module.scss';
import cover from "@/assets/img/contacts.png";

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
            <a href="#" className={`${styles.link} ${styles.link_inst}`}>@supercoffee</a>
            <a href="tel:+79999999999" className={`${styles.link} ${styles.link_tel}` }>+7-999-999-99-99</a>
          </div>
          <div className={styles.cover}>
            <img src={cover} alt="cover" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts;