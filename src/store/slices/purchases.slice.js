import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isloading.slice';


export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: ( state, action) => {
            const purchases = action.payload;
            return purchases;
        }
    }
})

export const getPurchasesThunk = () => dispatch => {
    dispatch( setIsLoading(true) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfig())
        .then( res => dispatch( setPurchases(res.data)))
        .finally(() => dispatch( setIsLoading( false )))
}

export const addPurchasesThunk = (purchase) => dispatch => {
    dispatch( setIsLoading(true) )
    axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, purchase, getConfig())
        .then( res => dispatch( getPurchasesThunk(res.data)))
        .catch( error => alert('hubo un error'))
        .finally(() => dispatch( setIsLoading( false )))
}



export const purchasesCartThunk = () => dispatch => {
    dispatch( setIsLoading(true) )
    axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, {}, getConfig())
        .then( res => dispatch( setPurchases([]) ))
        .catch( error => alert('hubo un error'))
        .finally(() => dispatch( setIsLoading( false )))
}



export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;