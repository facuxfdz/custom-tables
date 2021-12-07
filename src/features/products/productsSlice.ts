import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../cart/cartSlice";

interface Product {
    id : string,
    category : string,
    size : string,
    price : number,
    description : string,
    stock : number
}

interface ProductsState {
    products : Product[]
}

const initialState : ProductsState = {
    products : []
}

const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers: {
        setProduct : (state,action : PayloadAction<Product>) => {
            const {id,category,size,price,description,stock} = action.payload
            const productInCart = state.products.find(prod => prod.id === id)
            if(!productInCart){
                state.products.push({id,category,size,price,description,stock})
            }
        },
        updateStock : (state, action : PayloadAction<CartProduct>) => {
            const {id,amount} = action.payload
            state.products.forEach(product => {
                if(product.id === id){
                    product.stock -= amount || 0
                }
            })
        }
    }
})

export const { setProduct, updateStock } = productsSlice.actions

export default productsSlice.reducer