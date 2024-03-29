import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from '../constants/cartConstants';

import axios from'axios';
const URL = "http://localhost:5000"

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`${URL}/products/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty: qty
        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => async(dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}
