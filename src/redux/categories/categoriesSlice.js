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

    },
  },
);

export default categoriesSlice;
