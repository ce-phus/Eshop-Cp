import {
    TFT_LIST_REQUEST, 
    TFT_LIST_SUCCESS,
    TFT_LIST_FAIL,

    CREATE_TFT_REQUEST,
    CREATE_TFT_SUCCESS,
    CREATE_TFT_FAIL,
    CREATE_TFT_RESET,

    DELETE_TFT_REQUEST,
    DELETE_TFT_RESET,
    DELETE_TFT_SUCCESS,
    DELETE_TFT_FAIL,

    TFT_DETAILS_REQUEST,
    TFT_DETAILS_SUCCESS,
    TFT_DETAILS_FAIL,

    UPDATE_TFT_FAIL,
    UPDATE_TFT_REQUEST,
    UPDATE_TFT_SUCCESS,
    UPDATE_TFT_RESET,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,
    CHANGE_DELIVERY_STATUS_RESET,

} from '../constants/index'

// tft list
export const tftListReducer =( state ={ tft: [] }, action) => {
    switch (action.type) {
        case TFT_LIST_REQUEST:
            return {
                ...state,
                loading:true,
                tft: [],  //always pass the object during the request
                error: ""
            }
            case TFT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                tft: action.payload,
                error: ""
            }
        case TFT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// tft details
export const tftDetailReducer =( state ={ tft: {} }, action) => {
    switch (action.type) {
        case TFT_DETAILS_REQUEST:
            return {
                ...state,
                loading:true,
                tft: {},  //always pass the object during the request
                error: ""
            }
            case TFT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                tft: action.payload,
                error: ""
            }
        case TFT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Create tft reducer
export const createtftReducer =( state ={ tft: {} }, action) => {
    switch (action.type) {
        case CREATE_TFT_REQUEST:
            return {
                ...state,
                loading:true,
                tft: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case CREATE_TFT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                tft: action.payload,
                error: ""
            }
        case CREATE_TFT_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                tft: {},
                error: action.payload
            }
        case CREATE_TFT_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                tft: {},
                error: ""
            }
        default:
            return state
    }
}

// update tft reducer
export const updatetftReducer =( state ={ tft: {} }, action) => {
    switch (action.type) {
        case UPDATE_TFT_REQUEST:
            return {
                ...state,
                loading:true,
                tft: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case UPDATE_TFT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                tft: action.payload,
                error: ""
            }
        case UPDATE_TFT_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                tft: {},
                error: action.payload
            }
        case UPDATE_TFT_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                tft: {},
                error: ""
            }
        default:
            return state
    }
}

// delete tft reducer
export const deleteTftReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_TFT_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: ""
            }
        case DELETE_TFT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: ""
            }
        case DELETE_TFT_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case DELETE_TFT_RESET:
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