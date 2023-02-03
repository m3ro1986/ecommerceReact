import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isloading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        getProducts: ( state, action ) => {
            const products = action.payload;
            return products;
        }
    }
})

export const getProductsThunk = () => dispatch => {
    dispatch( setIsLoading(true) )
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then( res => dispatch( getProducts(res.data)))
        .finally(() => dispatch( setIsLoading( false )))
}

export const getProductsCategoryThunk = (id) => dispatch => {
    dispatch( setIsLoading(true) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then( res => dispatch( getProducts(res.data)))
        .finally(() => dispatch( setIsLoading( false )))
}

export const getProductsBySearch = (title) => dispatch => {
    dispatch( setIsLoading(true) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${title}`)
        .then( res => dispatch( getProducts(res.data)))
        .finally(() => dispatch( setIsLoading( false )))
}



export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
