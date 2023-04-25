import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  booksArray: [
    {
      id: 1,
      bookName: 'The Sealed Nectar',
      author: 'Safiur Rahman Mubarakpuri',
    },

    {
      id: 2,
      bookName: 'World Order',
      author: 'Henry Kissinger',
    },

    {
      id: 3,
      bookName: 'The Lean Startup',
      author: 'Eric Ries',
    },
  ],
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

export default booksSlice;
