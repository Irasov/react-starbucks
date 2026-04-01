import {createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Status, type CoffeeSliceStatee, type Coffee} from './types';
import { fetchCoffee } from './asyncAction';

const initialState: CoffeeSliceStatee = {
  items: [],
  status: Status.LOADING
}

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Coffee[]>) =>{
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffee.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchCoffee.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchCoffee.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const {setItems} = coffeeSlice.actions;

export default coffeeSlice.reducer;