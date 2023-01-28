import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice"
import feedbackReducer from '../features/feedbackSlice'
import chatsReducer from "../features/chatSlice"

export const store = configureStore({
    reducer: { productsReducer , feedbackReducer, chatsReducer},
  });