import type { CartItem } from "../redux/cart/type";
import { caclTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem('coffee');
  const items: CartItem[] = data ? JSON.parse(data) : [];
  const totalPrice = caclTotalPrice(items);
    return {
      items: items,
      totalPrice
    }
}