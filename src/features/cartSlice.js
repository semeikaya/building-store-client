import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
};

export const addCart = createAsyncThunk(
  "cart/add",
  async (productId, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/users/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const products = await res.json();
      if (products.error) {
        return thunkAPI.rejectWithValue(products.error);
      }
      localStorage.setItem("token", products);
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addCart.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.signUp = true;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.error = null;
        state.signUp = false;
        state.token = action.payload;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.signUp = false;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartReducer.reducer;
