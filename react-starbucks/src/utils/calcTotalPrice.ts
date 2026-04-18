import type { CartItem } from "../redux/cart/type";

export const caclTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, item) => item.price * item.count + sum, 0);
}