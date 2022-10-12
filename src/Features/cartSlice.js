import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartArray : [],
    },
    reducers: {
        addToCart : (state, action) =>{
            const isInCart = state.cartArray.find((item)=> item._id === action.payload._id)

            if (isInCart) {
                isInCart.quantity++
            } else {
                state.cartArray.push({
                    ...action.payload, quantity: 1
                })
            }
        },

        incrementItem: (state, action) => { 
            const item = state.cartArray.find((item)=> item._id === action.payload)
            item.quantity++
           // state.cartArray.push(action.payload)
        },
        decrementItem: (state, action) => { 
            const item  = state.cartArray.find((item)=> item._id === action.payload)
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        },
        emptyItem: (state, action) => {
            const clearCart = state.cartArray.filter((item)=> item._id !== action.payload)
            state.cartArray = clearCart
        },
        emptyCart: (state, action) => {
            state.cartArray = []
        }
    }
})

export const { addToCart, incrementItem, decrementItem, emptyItem, emptyCart } = cartSlice.actions

export default cartSlice.reducer