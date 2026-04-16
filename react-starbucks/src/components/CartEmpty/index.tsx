import React from "react";
import styles from "./CartEmpty.module.scss";
import cart from "@/assets/img/empty.png";
import { Link } from "react-router-dom";

const CartEmpty:React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={cart} alt="Empty Cart"  className={styles.img}/>
      </div>
      <h1 className={styles.title}>
          Unfortunately, <span>the cart is empty {':('}</span> 
      </h1>
      <div className={styles.go}>
        <Link to='/shop' className={styles.link}> Go Shop</Link>
      </div>
    </div>
  )
}

export default CartEmpty;