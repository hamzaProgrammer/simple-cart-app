import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_DETAILS_REQUEST,
    GET_PRODUCTS_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL,
    GET_PRODUCTS_DETAILS_RESET
} from '../constants/prodConstants';
import axios from 'axios';

const URL = "http://localhost:5000";


export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCTS_REQUEST
        });
        
        const {data} = await axios.get(URL);
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCTS_DETAILS_REQUEST  
        });

         const {data} = await axios.get(`${URL}/products/${id}`);
        dispatch({
            type: GET_PRODUCTS_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: GET_PRODUCTS_DETAILS_RESET
    })
}