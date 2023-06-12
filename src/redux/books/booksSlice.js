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
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
