import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [

    ]
}


export const getProducts = createAsyncThunk("get/product", async (_, thunkAPI) => {
try {
    const res = await fetch("http://localhost:4040/products")
    return res.json()
} catch (error) {
    return thunkAPI.rejectWithValue(error);
}
})

export const autocompleteProducts = createAsyncThunk("get/autocompleteProduct", async (searchProduct, thunkAPI) => {
    try {
        console.log(searchProduct)
        const res = await fetch("http://localhost:4040/products/autocomplete", {
          method: "POST",
          body: JSON.stringify({
            searchProduct
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        return res.json();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    })


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: async (build) => {
        build.addCase(autocompleteProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export default productsSlice.reducer