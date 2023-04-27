import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const rootReducer = combineReducers({
  booksReducer: booksSlice.reducer,
  categoriesReducer: categoriesSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
