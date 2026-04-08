import {createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = { 
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
  }
});

export const {setCurrentPage, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;