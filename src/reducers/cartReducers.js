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

const initialState = {
    cartItems: [],
    totalPrice: 0, // Ensure totalPrice is initialized as a number
    loading: false,
    error: null
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
        case REMOVE_FROM_CART_REQUEST:
        case GET_TOTAL_PRICE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                loading: false,
                error: null
            };

        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
                loading: false,
                error: null
            };

        case GET_TOTAL_PRICE_SUCCESS:
            return {
                ...state,
                totalPrice: state.totalPrice + parseFloat(action.payload), // Ensure totalPrice is parsed as a float
                loading: false,
                error: null
            };

        case ADD_TO_CART_FAIL:
        case REMOVE_FROM_CART_FAIL:
        case GET_TOTAL_PRICE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
