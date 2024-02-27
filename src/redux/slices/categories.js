import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.selected.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.selected = state.selected.filter(
        (category) => category !== action.payload
      );
    },
  },
});

export const { addCategory, removeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
