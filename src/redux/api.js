import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const API_KEY = 'NmerLOYOolwhXAVjaTow';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

export const displayBooksFromApi = createAsyncThunk('book/diplayBooksFromApi', async () => {
  try {
    const response = await axios.get(API_URL);
    const booksArray = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key][0],
    }));
    return booksArray;
  } catch (err) {
    return err.message;
  }
});

export const removeBookFromApi = createAsyncThunk('book/removeBookFromApi', async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (err) {
    return err.message;
  }
});

export const addBookToApi = createAsyncThunk('book/addBookToApi', async (newBook) => {
  try {
    await axios.post(API_URL, newBook);
    return newBook;
  } catch (err) {
    return err.message;
  }
});
