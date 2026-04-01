import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import coffee from './coffee/slice'

export const store = configureStore({
  reducer: { coffee }
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();