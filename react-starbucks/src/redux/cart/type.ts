export type CartItem = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: string;
  price: number;
  count: number;
}

export interface CartSliceState  {
  items: CartItem[];
  totalPrice: number;
}