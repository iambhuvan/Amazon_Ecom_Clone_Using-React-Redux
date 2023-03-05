import {configureStore} from '@reduxjs/toolkit';
import wishreducer from './slices/Wish'
import pricereducer from './slices/Price'
import cartreducer from './slices/Cart'
export const store= configureStore({
    reducer:{
        wish:wishreducer,
        cart:cartreducer,
        price:pricereducer
    }
})