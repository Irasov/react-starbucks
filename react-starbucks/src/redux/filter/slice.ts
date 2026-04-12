import {createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { SortAscDesc, SortProperty, type FilterSliceState, type SortAscDescValue , type SortType} from './types';

const initialState: FilterSliceState = { 
  searchValue: '',
  currentPage: 1,
  sort: {
    name: 'price',
    sortProperty: SortProperty.PRICE,
  },
  order: SortAscDesc.ASC,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue: (statem, action: PayloadAction<string>) => {
      statem.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setOrder(state, action: PayloadAction<SortAscDescValue>) {
      state.order = action.payload;
      console.log(state.order);
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterSliceState>) {
      if(Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.searchValue = action.payload.searchValue;
        state.sort = action.payload.sort;
        state.order = action.payload.order;
      } else {
        state.currentPage = 1;
        state.sort = {
          name: 'price',
          sortProperty: SortProperty.PRICE,
        };
        state.order = SortAscDesc.ASC;
      }
    }
  }
});

export const {setCurrentPage, setSearchValue, setFilter, setOrder, setSort} = filterSlice.actions;

export default filterSlice.reducer;