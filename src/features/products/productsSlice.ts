import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id : number,
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
            state.products.push({id,category,size,price,description})
        }
    }
})

export const { setProduct } = productsSlice.actions

export default productsSlice.reducer