import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  booksArray: [
    {
      id: 1,
      bookName: 'The Sealed Nectar',
      author: 'Safiur Rahman Mubarakpuri',
      category: 'Biography',
    },
    {
      id: 2,
      bookName: 'World Order',
      author: 'Henry Kissinger',
      category: 'World Politics',
    },
    {
      id: 3,
      bookName: 'The Lean Startup',
      author: 'Eric Ries',
      category: 'Business',
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
          booksArray: [...state.booksArray, action.payload],
        }
      ),

      removeBook: (state, action) => (
        {
          ...state,
          // eslint-disable-next-line max-len
          booksArray: state.booksArray.filter((bookToRemove) => bookToRemove.id !== action.payload),
        }
      ),
    },
  },
);

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice;
