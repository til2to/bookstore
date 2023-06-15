import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ho6KmndVtYojIQt18Er7/books';

// fetch books from the books API
const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue('something went wrong');
  }
});
// add new book
const addNewBook = createAsyncThunk('books/addNewBook', async (bookData, { rejectWithValue }) => {
  try {
    await axios.post(url, bookData);
    return bookData;
  } catch (error) {
    return rejectWithValue('Failed to add book');
  }
});
// remove book
const removeBook = createAsyncThunk('books/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    await axios.delete(`${url}/${itemId}`);
    return itemId;
  } catch (error) {
    return rejectWithValue('Failed to remove book');
  }
});

export { fetchBooks, addNewBook, removeBook };
