import {
    LAPTOP_LIST_REQUEST,
    LAPTOP_LIST_SUCCESS,
    LAPTOP_LIST_FAIL,

    CREATE_LAPTOP_REQUEST,
    CREATE_LAPTOP_SUCCESS,
    CREATE_LAPTOP_FAIL,
    CREATE_LAPTOP_RESET,

    DELETE_LAPTOP_FAIL,
    DELETE_LAPTOP_REQUEST,
    DELETE_LAPTOP_SUCCESS,
    DELETE_LAPTOP_RESET,

    LAPTOP_DETAILS_REQUEST,
    LAPTOP_DETAILS_SUCCESS,
    LAPTOP_DETAILS_FAIL,

    UPDATE_LAPTOP_REQUEST,
    UPDATE_LAPTOP_SUCCESS,
    UPDATE_LAPTOP_FAIL,
    UPDATE_LAPTOP_RESET,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,
    CHANGE_DELIVERY_STATUS_RESET,

} from "../constants/index"

// laptop list
export const laptopListReducer =( state ={ laptop: [] }, action) => {
    switch (action.type) {
        case LAPTOP_LIST_REQUEST:
            return {
                ...state,
                loading:true,
                laptop: [],  //always pass the object during the request
                error: ""
            }
            case LAPTOP_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                laptop: action.payload,
                error: ""
            }
        case LAPTOP_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// laptop details
export const laptopDetailReducer =( state ={ laptop: {} }, action) => {
    switch (action.type) {
        case LAPTOP_DETAILS_REQUEST:
            return {
                ...state,
                loading:true,
                laptop: {},  //always pass the object during the request
                error: ""
            }
            case LAPTOP_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                laptop: action.payload,
                error: ""
            }
        case LAPTOP_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Create laptop reducer
export const createlaptopReducer =( state ={ laptop: {} }, action) => {
    switch (action.type) {
        case CREATE_LAPTOP_REQUEST:
            return {
                ...state,
                loading:true,
                laptop: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case CREATE_LAPTOP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                laptop: action.payload,
                error: ""
            }
        case CREATE_LAPTOP_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                laptop: {},
                error: action.payload
            }
        case CREATE_LAPTOP_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                laptop: {},
                error: ""
            }
        default:
            return state
    }
}

// update laptop reducer
export const updatelaptopReducer =( state ={ laptop: {} }, action) => {
    switch (action.type) {
        case UPDATE_LAPTOP_REQUEST:
            return {
                ...state,
                loading:true,
                laptop: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case UPDATE_LAPTOP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                laptop: action.payload,
                error: ""
            }
        case UPDATE_LAPTOP_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                laptop: {},
                error: action.payload
            }
        case UPDATE_LAPTOP_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                laptop: {},
                error: ""
            }
        default:
            return state
    }
}

// delete laptop reducer
export const deleteLaptopReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_LAPTOP_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: ""
            }
        case DELETE_LAPTOP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: ""
            }
        case DELETE_LAPTOP_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case DELETE_LAPTOP_RESET:
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