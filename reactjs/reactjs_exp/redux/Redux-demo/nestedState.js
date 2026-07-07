const {createStore} = require('redux')
const {produce} = require('immer')
const initalState = {
  name: "bilal",
  address: {
    street: "fsdfdsfd",
  },
};

const STREET_UPDATE = "STREET_UPDATE";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      return produce(state, (draft)=>{
        draft.address.street = action.payload
      })
    default: {
      return state;
    }
  }
};


const userStore = createStore(reducer)
console.log('Initial State', userStore.getState())
const unsubscribe = userStore.subscribe(()=>{
    console.log('Updated state', userStore.getState())
})

userStore.dispatch(updateStreet('fsdfdsfdf'))
unsubscribe