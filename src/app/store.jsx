import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice"
import chatsReducer from "../features/chatSlice"



export const store = configureStore({
    reducer: { productsReducer, chatsReducer},
  });