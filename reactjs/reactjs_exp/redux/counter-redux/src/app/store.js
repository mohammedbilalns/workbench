import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counterSlice";
const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
