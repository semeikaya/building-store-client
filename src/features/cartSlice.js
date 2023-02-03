import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  cart: [],
  error: false,
  loading: false,
  removeLoader: false,
};

export const addCart = createAsyncThunk(
  "cart/add",
  async ({ product, count }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const res = await fetch("http://localhost:4040/users/addcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.cartReducer.token}`,
        },
        body: JSON.stringify({ product, count }),
      });
      const products = await res.json();
      if (products.error) {
        return thunkAPI.rejectWithValue(products.error);
      }
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "cart/remove",
  async (productId, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      const res = await fetch(
        "http://localhost:4040/users/removeproductincart",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.cartReducer.token}`,
          },
          body: JSON.stringify({ productId }),
        }
      );
      const products = await res.json();
      if (products.error) {
        return thunkAPI.rejectWithValue(products.error);
      }
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCart = createAsyncThunk("cart/get", async (local, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    const res = await fetch("http://localhost:4040/users/getcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.cartReducer.token}`,
      },
      body: JSON.stringify({ local: local }),
    });

    const products = await res.json();

    if (products.error) {
      return thunkAPI.rejectWithValue(products.error);
    }
    return products;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCart.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(removeProduct.pending, (state) => {
        state.error = false;
        state.removeLoader = true;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.error = false;
        state.removeLoader = false;
        state.cart = action.payload;
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCart.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.cart = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartReducer.reducer;
