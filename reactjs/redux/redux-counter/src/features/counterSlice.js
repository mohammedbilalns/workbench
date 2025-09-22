import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { count: 0, status: "", data: null };

export const fetchData = createAsyncThunk("/data/fetch", async () => {
  const response = await fetch("https://api.github.com/mohammedbilalns");
  const data = await response.json();
  return data;
});



const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByCount: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => (state.data = "loading"))
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "suceeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement, reset, incrementByCount } =
  counterSlice.actions;

export default counterSlice.reducer;
