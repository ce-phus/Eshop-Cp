import {
    GRAPHICSCARD_LIST_REQUEST,
    GRAPHICSCARD_LIST_SUCCESS,
    GRAPHICSCARD_LIST_FAIL,

    CREATE_GRAPHICSCARD_REQUEST,
    CREATE_GRAPHICSCARD_SUCCESS,
    CREATE_GRAPHICSCARD_FAIL,
    CREATE_GRAPHICSCARD_RESET,

    DELETE_GRAPHICSCARD_REQUEST,
    DELETE_GRAPHICSCARD_SUCCESS,
    DELETE_GRAPHICSCARD_FAIL,
    DELETE_GRAPHICSCARD_RESET,

    GRAPHICSCARD_DETAILS_REQUEST,
    GRAPHICSCARD_DETAILS_SUCCESS,
    GRAPHICSCARD_DETAILS_FAIL,

    UPDATE_GRAPHICSCARD_REQUEST,
    UPDATE_GRAPHICSCARD_SUCCESS,
    UPDATE_GRAPHICSCARD_FAIL,
    UPDATE_GRAPHICSCARD_RESET,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,
    CHANGE_DELIVERY_STATUS_RESET,
} from "../constants/index"

// graphicscard list
export const graphicscardListReducer =( state ={ graphicscard: [] }, action) => {
    switch (action.type) {
        case GRAPHICSCARD_LIST_REQUEST:
            return {
                ...state,
                loading:true,
                graphicscard: [],  //always pass the object during the request
                error: ""
            }
            case GRAPHICSCARD_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                graphicscard: action.payload,
                error: ""
            }
        case GRAPHICSCARD_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// graphicscard details
export const graphicscardDetailReducer =( state ={ graphicscard: {} }, action) => {
    switch (action.type) {
        case GRAPHICSCARD_DETAILS_REQUEST:
            return {
                ...state,
                loading:true,
                graphicscard: {},  //always pass the object during the request
                error: ""
            }
            case GRAPHICSCARD_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                graphicscard: action.payload,
                error: ""
            }
        case GRAPHICSCARD_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Create graphicscard reducer
export const creategraphicscardReducer =( state ={ graphicscard: {} }, action) => {
    switch (action.type) {
        case CREATE_GRAPHICSCARD_REQUEST:
            return {
                ...state,
                loading:true,
                graphicscard: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case CREATE_GRAPHICSCARD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                graphicscard: action.payload,
                error: ""
            }
        case CREATE_GRAPHICSCARD_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                graphicscard: {},
                error: action.payload
            }
        case CREATE_GRAPHICSCARD_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                graphicscard: {},
                error: ""
            }
        default:
            return state
    }
}

// update graphicscard reducer
export const updategraphicscardReducer =( state ={ graphicscard: {} }, action) => {
    switch (action.type) {
        case UPDATE_GRAPHICSCARD_REQUEST:
            return {
                ...state,
                loading:true,
                graphicscard: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case UPDATE_GRAPHICSCARD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                graphicscard: action.payload,
                error: ""
            }
        case UPDATE_GRAPHICSCARD_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                graphicscard: {},
                error: action.payload
            }
        case UPDATE_GRAPHICSCARD_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                graphicscard: {},
                error: ""
            }
        default:
            return state
    }
}

// delete graphicscard reducer
export const deleteGraphicscardReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_GRAPHICSCARD_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: ""
            }
        case DELETE_GRAPHICSCARD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: ""
            }
        case DELETE_GRAPHICSCARD_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case DELETE_GRAPHICSCARD_RESET:
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