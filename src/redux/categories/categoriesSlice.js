import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice;
