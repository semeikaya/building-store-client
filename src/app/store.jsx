import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice"
import feedbackReducer from '../features/feedbackSlice'

export const store = configureStore({
    reducer: { productsReducer , feedbackReducer},
  });