const { configureStore } = require("@reduxjs/toolkit");
const cakeReduceer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const userReducer = require('../features/user/userSlice')
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReduceer,
    icecream: iceCreamReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
