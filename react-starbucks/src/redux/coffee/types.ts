export type Coffee = {
  id: string;
  imageUrl: string;
  title: string;
  sizes: number;
  price: number;
  category: number;
  text: string;
}

export const Status = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type StatusValue = typeof Status[keyof typeof Status];

export interface CoffeeSliceStatee {
  items: Coffee[];
  status: StatusValue;
}

