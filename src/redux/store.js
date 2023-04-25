import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';

const store = configureStore({
  reducer: booksSlice.reducer,
});

export default store;
