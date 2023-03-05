import {createSlice} from '@reduxjs/toolkit'

export const WishSlice = createSlice({
    name:'wish',
    initialState:[],
    reducers: {
        addToWishList:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToWishList} = WishSlice.actions;

export default WishSlice.reducer;