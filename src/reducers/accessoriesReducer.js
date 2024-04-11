import {
    ACCESSORIES_LIST_REQUEST,
    ACCESSORIES_LIST_SUCCESS,
    ACCESSORIES_LIST_FAIL,

    CREATE_ACCESSORIES_REQUEST,
    CREATE_ACCESSORIES_SUCCESS,
    CREATE_ACCESSORIES_FAIL,
    CREATE_ACCESSORIES_RESET,

    DELETE_ACCESSORIES_REQUEST,
    DELETE_ACCESSORIES_SUCCESS,
    DELETE_ACCESSORIES_FAIL,
    DELETE_ACCESSORIES_RESET,

    ACCESORIES_DETAIL_REQUEST,
    ACCESORIES_DETAIL_SUCCESS,
    ACCESORIES_DETAIL_FAIL,

    UPDATE_ACCESSORIES_REQUEST,
    UPDATE_ACCESSORIES_SUCCESS,
    UPDATE_ACCESSORIES_FAIL,
    UPDATE_ACCESSORIES_RESET,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,
    CHANGE_DELIVERY_STATUS_RESET,
    
} from "../constants/index"

// accessories list
export const accessoriesListReducer =( state ={ accessories: [] }, action) => {
    switch (action.type) {
        case ACCESSORIES_LIST_REQUEST:
            return {
                ...state,
                loading:true,
                accessories: [],  //always pass the object during the request
                error: ""
            }
            case ACCESSORIES_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                accessories: action.payload,
                error: ""
            }
        case ACCESSORIES_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// accessories details
export const accessoriesDetailReducer =( state ={ accessories: {} }, action) => {
    switch (action.type) {
        case ACCESORIES_DETAIL_REQUEST:
            return {
                ...state,
                loading:true,
                accessories: {},  //always pass the object during the request
                error: ""
            }
            case ACCESORIES_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                accessories: action.payload,
                error: ""
            }
        case ACCESORIES_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Create accessories reducer
export const createaccessoriesReducer =( state ={ accessories: {} }, action) => {
    switch (action.type) {
        case CREATE_ACCESSORIES_REQUEST:
            return {
                ...state,
                loading:true,
                accessories: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case CREATE_ACCESSORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                accessories: action.payload,
                error: ""
            }
        case CREATE_ACCESSORIES_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                accessories: {},
                error: action.payload
            }
        case CREATE_ACCESSORIES_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                accessories: {},
                error: ""
            }
        default:
            return state
    }
}

// update accessories reducer
export const updateaccessoriesReducer =( state ={ accessories: {} }, action) => {
    switch (action.type) {
        case UPDATE_ACCESSORIES_REQUEST:
            return {
                ...state,
                loading:true,
                accessories: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case UPDATE_ACCESSORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                accessories: action.payload,
                error: ""
            }
        case UPDATE_ACCESSORIES_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                accessories: {},
                error: action.payload
            }
        case UPDATE_ACCESSORIES_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                accessories: {},
                error: ""
            }
        default:
            return state
    }
}

// delete  accessories reducer
export const deleteAccessoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_ACCESSORIES_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: ""
            }
        case DELETE_ACCESSORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: ""
            }
        case DELETE_ACCESSORIES_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case DELETE_ACCESSORIES_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                error: ""
            }
        default:
            return state
    }
}

// change order delivery status reducer
export const changeDeliveryStatusReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_DELIVERY_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: ""
            }
        case CHANGE_DELIVERY_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: ""
            }
        case CHANGE_DELIVERY_STATUS_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case CHANGE_DELIVERY_STATUS_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                error: ""
            }
        default:
            return state
    }
}