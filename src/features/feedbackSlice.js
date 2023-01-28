import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedback: [],
};

export const fetchFeedback = createAsyncThunk(
  "feedback/fetch",
  async (data, thunkAPI) => {
    try {
      const info = {
        name: data.name,
        number: data.phone,
        email: data.email,
        text: data.text,
      };
      console.log(info)
      const res = await fetch("http://localhost:4040/products/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
      });
      return await res.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const feedbackSlice = createSlice({
  name: "Feedback",
  initialState,
  reducers : {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeedback.fulfilled, (state, action) => {
        state.feedback = action.payload
    })
  },
});

export default feedbackSlice.reducer;