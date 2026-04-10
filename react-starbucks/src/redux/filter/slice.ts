import {createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type FilterSliceState } from './types';

const initialState: FilterSliceState = { 
  searchValue: '',
  currentPage: 1,
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
    setFilter(state, action: PayloadAction<FilterSliceState>) {
      if(Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.searchValue = action.payload.searchValue;
      } else {
        state.currentPage = 1;
      }
    }
  }
});

export const {setCurrentPage, setSearchValue, setFilter} = filterSlice.actions;

export default filterSlice.reducer;