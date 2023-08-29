import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // array of multiple products present in the cart
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            // check if the product added is already present in the cart. By checking if the id of the product coming from the action payload of dispatch method matches with id of the product present in the array of products
            const addProductExists = state.products.find((product) => product.id === action.payload.id)

            if (addProductExists) {
                addProductExists.quantity += parseInt(action.payload.quantity)
            } else {
                state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)})
            }

            state.productsNumber = state.productsNumber + parseInt(action.payload.quantity)
        }, 

        removeFromCart: (state, action) => {

        },

        // emptyCart: 
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer