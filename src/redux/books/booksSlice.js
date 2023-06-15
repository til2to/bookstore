import { createSlice } from '@reduxjs/toolkit';
import { addNewBook, fetchBooks, removeBook } from '../apis';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

// create slice
const booksSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {},

  // handle states of promises
  extraReducers: (builder) => {
    builder
      // fetch books
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const result = [];
        Object.entries(payload).forEach(([item, itemsArray]) => {
          itemsArray.forEach((itemData) => {
            const newItem = {
              item_id: item,
              author: itemData.author,
              title: itemData.title,
              category: itemData.category,
            };
            result.push(newItem);
          });
        });

        state.books = result;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // add book
      .addCase(addNewBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewBook.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books.push(payload);
      })
      .addCase(addNewBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // remove book
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.item_id !== payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
