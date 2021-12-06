import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct {
    id : string,
    category : string,
    size : string,
    price : number,
    description : string,
    amount? : number
}

interface CartState {
    products : CartProduct[]
}

const initialState : CartState = {
    products : []
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addItem : (state,action : PayloadAction<CartProduct>) => {
            const {id, category,size,price,description, amount} = action.payload
            const productInCart = state.products.find(item => item.id === id)

            if(productInCart?.amount){
                productInCart.amount += amount || 0
            }else{
                state.products.push({id, category,size,price,description, amount})
            }

        },

        removeItem : (state, action : PayloadAction<CartProduct>) => {
            state.products = state.products.filter(item => {
                return item.id !== action.payload.id
            })

        }

            
    },
}) 

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
