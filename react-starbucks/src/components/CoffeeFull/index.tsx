import React from "react";
import styles from "./CoffeeFull.module.scss"
import { Link } from "react-router-dom";

type coffeeProps = {
  imageUrl:string;
  title: string;
  sizes: string;
  price: number;
  text: string;
}

const CoffeeFull: React.FC<coffeeProps> = ({imageUrl, title, sizes, price, text}) => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.image}>
            <img src={imageUrl} alt="coffee" className={styles.img} />
          </div>
          <h1 className={styles.title}>
            {title}
          </h1>
          <div className={styles.info}>
            {`${sizes}ml, ${price}$`}
          </div>
          <p className={styles.text}>
            {text}
          </p>
        </div>
        <div className={styles.button}>
          <Link to="/shop" className={styles.btn}>go Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default CoffeeFull;