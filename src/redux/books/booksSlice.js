import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.bookList.push(payload.book);
    },
    removeBook: (state, { payload }) => {
      state.bookList = state.bookList.filter((book) => book.id !== payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
