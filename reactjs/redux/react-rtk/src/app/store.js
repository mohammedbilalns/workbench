import { configureStore } from "@reduxjs/toolkit";
import cakeReduceer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from '../features/user/userSlice';
import { createLogger } from "redux-logger";
const logger = createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReduceer,
    icecream: iceCreamReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
