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
            // find the (whole) product to be removed (using find() method)
            const productToRemove = state.products.find((product) => product.id === action.payload)

            // substract the quantity from the products number
            state.productsNumber = state.productsNumber - productToRemove.quantity

            // find the index/id of the product to be removed (using findIndex() method)
            const index = state.products.findIndex((product) => product.id === action.payload)

            // remove the product from array using the index/id obtained
            state.products.splice(index, 1)
        },

        incrementProduct: (state, action) => {
            const itemInc = state.products.find((item) => item.id === action.payload);
            if (itemInc.quantity >= 1) {
                itemInc.quantity = itemInc.quantity + 1;
            }
            state.productsNumber = state.productsNumber + 1;
        },

        decrementProduct: (state, action) => {
            const itemDec = state.products.find((item) => item.id === action.payload);
            if (itemDec.quantity === 1) {
                const index = state.products.findIndex((item) => item.id === action.payload);
                state.products.splice(index, 1);
            } else {
                itemDec.quantity--;
            }
            state.productsNumber = state.productsNumber - 1;
        }
    }
})

export const { addToCart, removeFromCart, incrementProduct, decrementProduct } = cartSlice.actions
export default cartSlice.reducer