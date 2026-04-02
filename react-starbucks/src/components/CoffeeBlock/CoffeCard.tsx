import React from "react";
import styles from './CoffeCard.module.scss'

type CoffeeBlockProps = {
  id: string,
  imageUrl: string,
  title: string,
  sizes: number,
  price: number,
  category: number,
  text: string,
}

const CoffeCard: React.FC<CoffeeBlockProps> = ({id, imageUrl, title, sizes, price, category, text }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={imageUrl} alt="Coffee" className={styles.img} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.info}>
        <span className={styles.price}>{price}$</span>
        <span className={styles.size}>{sizes} ml</span>
      </div>
      <button className={styles.btn}>Buy Product</button>
    </div>
  )
}

export default CoffeCard;