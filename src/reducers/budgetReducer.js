import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    entries: [],
  },
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action.payload);
    },
  },
});

export const { addEntry } = budgetSlice.actions;

export default budgetSlice.reducer;
