// src/redux/categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'],
  status: "Under construction",
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(category => category !== action.payload);
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { addCategory, removeCategory, updateStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
