const {createSlice} = require("@reduxjs/toolkit")
const { cakeActions } = require("../cake/cakeSlice")

const initialState = {
    numberOfIceCreams : 10 
}

const iceCreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered: (state)=>{
            state.numberOfIceCreams--
        },
        restocked: (state,actions)=>{
            state.numberOfIceCreams+= actions.payload
        }
    }, 
    extraReducers:(builder) =>{
        builder.addCase(cakeActions.ordered, (state)=>{
            state.numberOfIceCreams--
        })
    }
})

module.exports = iceCreamSlice.reducer

module.exports.iceCreamActions = iceCreamSlice.actions
