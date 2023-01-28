import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("products"),
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
      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      localStorage.setItem("products", json);
      return json;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createUser.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.signUp = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.error = null;
        state.signUp = false;
        state.token = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.signUp = false;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
