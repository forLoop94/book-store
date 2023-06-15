import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookList: [],
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4uqVzDBtgCwDsFUR5aRa/books';

export const fetchBook = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (error) {
    return error;
  }
});

export const createBook = createAsyncThunk('books/createBook', async (book, thunkAPI) => {
  const res = JSON.stringify(book);
  try {
    await axios.post(url, res, { headers: { 'Content-Type': 'application/json' } });
    const response = thunkAPI.dispatch(fetchBook());
    return response;
  } catch (error) {
    return error;
  }
});

export const removesBook = createAsyncThunk('books/removesBook', async (id, thunk) => {
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6PniCavOBYZV6AbPZ91l/books/${id}`);
    const response = thunk.dispatch(fetchBook());
    return response;
  } catch (error) {
    return error;
  }
});

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
  extraReducers(builder) {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.bookList = [];
      Object.keys(action.payload).forEach((item) => {
        const book = action.payload[item][0];
        state.bookList.push({
          id: item, title: book.title, author: book.author, category: book.category,
        });
      });
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
