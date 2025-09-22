import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numOfCake: 10 
}
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers: {
        ordered:(state)=>{
            state.numOfCake-- 
        }, 
        restocked: (state, action)=>{
            state.numOfCake += action.payload
        }
    }

})
// automatically creates action creators and reducer 


export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions