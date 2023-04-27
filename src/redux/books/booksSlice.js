import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  booksArray: [],
};

const booksSlice = createSlice(
  {
    name: 'book',
    initialState: initialBooks,
    reducers: {
      addBook: (state, action) => (
        {
          ...state,
          booksArray: [state.booksArray, action.payload],
        }
      ),

      removeBook: (state, action) => (
        {
          ...state,
          booksArray: [state.booksArray.filter((bookToRemove) => bookToRemove !== action.payload)],
        }
      ),
    },
  },
);

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice;
