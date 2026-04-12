export const SortProperty = {
  PRICE: 'price',
  SIZE: 'sizes',
  CATEGORY: 'category',
} as const;

export type SortPropertyValue = typeof SortProperty[keyof typeof SortProperty];

export const SortAscDesc = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export type SortAscDescValue = typeof SortAscDesc[keyof typeof SortAscDesc];

export type SortType = {
  name: string;
  sortProperty: SortPropertyValue;
}

export interface FilterSliceState {
  searchValue: string;
  currentPage: number;
  sort: SortType;
  order: SortAscDescValue;
}