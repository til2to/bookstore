import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: () => 'Under construction',
  },
});

export const { status } = categoriesSlice.actions;
export default categoriesSlice.reducer;
