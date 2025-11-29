import { configureStore } from "@reduxjs/toolkit";
import count from "../features/logSlice";

const logger = (store) => (next) => (action) => {
  console.log("Dispatching: ", action);
  next(action);
};
const store = configureStore({
  reducer: {
    count,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
