import {createSlice} from '@reduxjs/toolkit'

export const PriceSlice = createSlice({
    name:'price',
    initialState:[],
    reducers: {
        addPriceToCost:(state,action)=>{
            state.push(action.payload)
    }
    }
})

export const {addPriceToCost} = PriceSlice.actions;

export default PriceSlice.reducer;