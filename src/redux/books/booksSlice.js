import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookList: [
    {
      id: crypto.randomUUID(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: crypto.randomUUID(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: crypto.randomUUID(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6PniCavOBYZV6AbPZ91l/books';

export const fetchBook = createAsyncThunk('books/fetchBooks', () => {
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (error) {
    return error;
  }
});

export const createBook = createAsyncThunk('books/createBook', async (book, thunk) => {
  const res = JSON.stringify(book);
  try {
    await axios.post(url, res, { header: { 'Content-Type': 'application/json' }});
    const response = thunk.dispatch(fetchBook());
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
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
