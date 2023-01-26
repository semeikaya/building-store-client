import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = [

]


export const getProducts = createAsyncThunk("get/product", async (_, thunkAPI) => {
try {
    const res = await fetch("http://localhost:4040/products")
    return res.json()
} catch (error) {
    return thunkAPI.rejectWithValue(error);
}
})


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: async (build) => {
        build.addCase(getProducts.fulfilled, (state, action) => {
            state = action.payload
        })
    }
})

export default productsSlice.reducer