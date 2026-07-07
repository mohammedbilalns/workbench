const { createStore, bindActionCreators, combineReducers, applyMiddleware } = require("redux");

const {logger} = require('redux-logger')
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// action creater to manage cakes
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

// action creators to mange ice cream
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}
function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// declare the initial state
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 10,
// };

const initalCakeState = {
  numberOfCakes: 10,
};

const initalIceCreamState = {
  numberOfIceCreams: 10,
};

// reducer function for cake
const cakeReducer = (state = initalCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

// reducer function for ice cream

const iceCreamReducer = (state = initalIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// combining reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCrem: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

// subscribe to the store
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(10))

// bind the actions creatores to dispatch
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.restockCake(5);
actions.orderIceCream();
actions.restockIceCream(4);

unsubscribe();
