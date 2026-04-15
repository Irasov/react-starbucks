import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import coffee from './coffee/slice'
import filter from './filter/slice';
import cart from './cart/slice';

export const store = configureStore({
  reducer: { coffee, filter, cart }
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();