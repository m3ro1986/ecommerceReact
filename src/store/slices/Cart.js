import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isloading.slice';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: ( state, action) => {
            const cart = action.payload;
            return cart;
        }
    }
})

export const getCartThunk = () => dispatch => {
    dispatch( setIsLoading(true) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, getConfig())
        .then( res => dispatch( setCart(res.data)))
        .finally(() => dispatch( setIsLoading( false )))
}

export const delPurchasesThunk = (id) => dispatch => {
    dispatch( setIsLoading(true) )
    axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, getConfig())
        .then( res => dispatch( getCartThunk()))
        .catch( error => alert('hubo un error'))
        .finally(() => dispatch( setIsLoading( false )))
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;