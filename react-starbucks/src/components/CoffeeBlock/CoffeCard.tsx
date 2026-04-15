import React from "react";
import styles from './CoffeCard.module.scss'
import { type CartItem } from "../../redux/cart/type";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/slice";
import { selectCartById } from "../../redux/cart/selectors";

type CoffeeBlockProps = {
  id: string,
  imageUrl: string,
  title: string,
  sizes: string,
  price: number,
  category: number,
  text: string,
}

const CoffeCard: React.FC<CoffeeBlockProps> = ({id, imageUrl, title, sizes, price, text }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartById(id));
  const addedCount = cartItem ? cartItem.count : 0;

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
      <button className={styles.btn} onClick={onClickAdd}>
        <span>Buy Product </span>
        {addedCount > 0 && <i>{addedCount}</i>}
      </button>
    </div>
  )
}

export default CoffeCard;