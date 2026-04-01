import {type Coffee} from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoffee =  createAsyncThunk<Coffee[]>('coffee/fetchCoffeeStatus', async () => {
  const {data} = await axios.get<Coffee[]>('https://69cca578ddc3cabb7bd15cb8.mockapi.io/items');
  return data;
});