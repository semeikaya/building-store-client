import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  loading: false,
  token: localStorage.getItem("token"),
};

export const authSingUp = createAsyncThunk(
  "auth/singUp",
  async (data, thunkAPI) => {
    try {
      const info = {
        name: data.name,
        login: data.email,
        password: data.password,
      };

      const res = await fetch("http://localhost:4040/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSingIn = createAsyncThunk(
  "auth/singIn",
  async (data, thunkAPI) => {
    try {
      const info = {
        login: data.login,
        password: data.password,
      };

      const res = await fetch("http://localhost:4040/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSingUp.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(authSingUp.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(authSingUp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.token = action.payload;
      })
      .addCase(authSingIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(authSingIn.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(authSingIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.token = action.payload;
      });
  },
});

export default authSlice.reducer;
