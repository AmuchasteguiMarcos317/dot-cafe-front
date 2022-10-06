import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartArray : [],

    },
    reducers: {
        addItem: (state, action) => {
            state.cartArray.push(action.payload)

        },
        removeItem: (state, action) => {
            state.cartArray.shift(action.payload)
        },
        emptyCart: (state, action) => {
            
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer