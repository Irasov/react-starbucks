import React from "react";
import styles from "./CoffeeFull.module.scss"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartById } from "../../redux/cart/selectors";
import type { CartItem } from "../../redux/cart/type";
import { addItem } from "../../redux/cart/slice";

type coffeeProps = {
  id: string;
  imageUrl:string;
  title: string;
  sizes: string;
  price: number;
  text: string;
}

const CoffeeFull: React.FC<coffeeProps> = ({id, imageUrl, title, sizes, price, text}) => {
  const cartItem = useSelector(selectCartById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      imageUrl,
      title,
      sizes,
      price,
      count: 0,
    }
    dispatch(addItem(item));
  }
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
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Link to="/shop" className={styles.btn}>go Shop</Link>
          </div>
          <button className={styles.buy} onClick={onClickAdd}>
            Buy Product <span>{addedCount}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeFull;