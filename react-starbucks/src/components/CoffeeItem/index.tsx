import React from "react";
import styles from "./CoffeeItem.module.scss";
import { useDispatch } from "react-redux";
import {  addItem, removeItem, minusItem  } from "../../redux/cart/slice";
import type { CartItem } from "../../redux/cart/type";

type CartItemProps = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: string;
  price: number;
  count: number;
}

const CoffeeItem: React.FC<CartItemProps> = ({ id, imageUrl, title, sizes, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({id} as CartItem));
  }
  const onClickMinus = () => {
    dispatch(minusItem(id));
  }
  const onClickRemove = () => {
    dispatch(removeItem(id));
  }

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={imageUrl} alt="Coffee"  className={styles.item__img}/> 
      </div>
      <div className={styles.item__info}>
        <h2 className={styles.item__title}>{title}, </h2>
        <p className={styles.item__size}>{sizes} ml</p>
      </div>
      <div className={styles.item__blockCount}>
        <button disabled = {count === 1} onClick={onClickMinus} className={styles.item__btn}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#237249"/>
          </svg>  
        </button>
        <b className={styles.item__count}>{count}</b>
        <button onClick={onClickPlus} className={styles.item__btn}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#237249"/>
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#237249"/>
          </svg>
        </button>
      </div>
      <div className={styles.item__blockPrice}>
        <b className={styles.item__price}>${(price * count).toFixed(2)} $</b>
      </div>
      <div className={styles.item__remove}>
        <button onClick={onClickRemove} className={styles.item__btn}>
          <svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fill="#237249"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CoffeeItem;