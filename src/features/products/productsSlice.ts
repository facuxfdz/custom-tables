import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id : string,
    category : string,
    size : string,
    price : number,
    description : string,
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
            const {id,category,size,price,description} = action.payload
            const productInCart = state.products.find(prod => prod.id === id)
            if(!productInCart){
                state.products.push({id,category,size,price,description})
            }
        }
    }
})

export const { setProduct } = productsSlice.actions

export default productsSlice.reducer