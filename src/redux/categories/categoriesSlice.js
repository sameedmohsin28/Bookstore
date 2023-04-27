import { createSlice } from '@reduxjs/toolkit';

const initialCategories = {
  categoriesArray: [],
  categoriesStatus: 'under construction',
};

const categoriesSlice = createSlice(
  {
    name: 'category',
    initialState: initialCategories,
    reducers: {
      checkStatus: () => (initialCategories),
    },
  },
);

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice;
