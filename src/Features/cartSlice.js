import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartArray : [],

    },
    reducers: {
        addToCart: (state, action) => {
            
        },
        removeFromCart: (state, action) => {
            
        },
        emptyCart: (state, action) => {
            
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer