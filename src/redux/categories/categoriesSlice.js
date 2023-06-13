import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => initialState,
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice;
