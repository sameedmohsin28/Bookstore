import { createSlice } from '@reduxjs/toolkit';
import { addBookToApi, displayBooksFromApi, removeBookFromApi } from '../api';

const initialBooks = {
  booksArray: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice(
  {
    name: 'book',
    initialState: initialBooks,
    extraReducers(builder) {
      builder
        .addCase(displayBooksFromApi.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(displayBooksFromApi.fulfilled, (state, action) => ({
          ...state,
          isLoading: false,
          booksArray: action.payload,
        }))

        .addCase(removeBookFromApi.fulfilled, (state, action) => ({
          booksArray: state.booksArray.filter((bookToRemove) => bookToRemove.id !== action.payload),
        }))

        .addCase(addBookToApi.fulfilled, (state, action) => ({
          ...state,
          booksArray: [...state.booksArray, action.payload],
        }));
    },
  },
);

export const { extraReducers } = booksSlice.actions;
export default booksSlice;
