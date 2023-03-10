import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice"
import feedbackReducer from '../features/feedbackSlice'
import chatsReducer from "../features/chatSlice"
import cartReducer from "../features/cartSlice"
import authReducer from '../features/authSlice'

export const store = configureStore({
    reducer: { productsReducer , feedbackReducer, chatsReducer, cartReducer, authReducer},

  });