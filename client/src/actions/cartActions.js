import axios from 'axios';
import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL,
    GET_TOTAL_PRICE_REQUEST,
    GET_TOTAL_PRICE_SUCCESS,
    GET_TOTAL_PRICE_FAIL
} from '../constants/index';



export const addToCart = (item_type, item_id, quantity) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_REQUEST });
        
        const payload = {
            action: 'add_item',
            type: item_type,
            id: item_id,
            quantity: quantity
        };

        const response = await axios.post('http://127.0.0.1:8000/api/cart/', payload);
        
        const { data } = response;

        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: data
        });

        // Extract total price from the response and dispatch it to update the state
        dispatch({
            type: GET_TOTAL_PRICE_SUCCESS,
            payload: data.total_price

        });

    } catch (error) {
        // Error handling code
        dispatch({ type: ADD_TO_CART_FAIL, payload: error.message });
    }
};



export const removeFromCart = (item_id) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART_REQUEST });

        const payload = {
            action: 'remove_item',  // Specify the action as 'remove_item'
            id: item_id           
        };

        const { data } = await axios.post('http://127.0.0.1:8000/api/cart/', payload);

        dispatch({
            type: REMOVE_FROM_CART_SUCCESS,
            payload: data
        });

        dispatch(getTotalPrice());
    } catch (error) {
        // Error handling code
        dispatch({ type: REMOVE_FROM_CART_FAIL, payload: error.message });
    }
};




export const getTotalPrice = () => async (dispatch, getState) => {
    const { cartReducer } = getState();
    if (cartReducer.totalPrice === 0) {
        // Fetch the total price only if it's not already set in the state
        try {
            dispatch({ type: GET_TOTAL_PRICE_REQUEST });

            const { data } = await axios.get('http://127.0.0.1:8000/api/cart/');

            // Parse the total price as a number before dispatching the action
            const totalPrice = parseFloat(data.total_price);
            // console.log("Total Price: ", totalPrice)

            dispatch({
                type: GET_TOTAL_PRICE_SUCCESS,
                payload: totalPrice
            });
        } catch (error) {
            console.error("Error fetching total price:", error);
            dispatch({
                type: GET_TOTAL_PRICE_FAIL,
                payload: error.response ? error.response.data.detail || error.response.data : error.message
            });
        }
    }
};

