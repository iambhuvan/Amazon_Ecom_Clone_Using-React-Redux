import {createSlice} from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer;