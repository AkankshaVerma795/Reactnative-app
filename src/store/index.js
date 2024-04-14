import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../reducers/BudgetReducer';

const store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});

export default store;
