import {type Coffee, type SearchCoffeeParams} from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const LIMIT = 4; // Лимит на кол-во отображения карточек на странице 
export const fetchCoffee =  createAsyncThunk<Coffee[], SearchCoffeeParams>('coffee/fetchCoffeeStatus', async (params) => {
  const {currentPage} = params;
  const {data} = await axios.get<Coffee[]>(`https://69cca578ddc3cabb7bd15cb8.mockapi.io/items?page=${currentPage}&limit=${LIMIT}`);
  return data;
});