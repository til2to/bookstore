import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      const title = action.payload;
      state.books = state.books.filter((book) => book.title !== title);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
