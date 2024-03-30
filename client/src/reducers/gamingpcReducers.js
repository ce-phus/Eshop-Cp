import {
    GAMINGPC_LIST_REQUEST,
    GAMINGPC_LIST_SUCCESS,
    GAMINGPC_LIST_FAIL,

    CREATE_GAMINGPC_REQUEST,
    CREATE_GAMINGPC_FAIL,
    CREATE_GAMINGPC_SUCCESS,
    CREATE_GAMINGPC_RESET,

    DELETE_GAMINGPC_REQUEST,
    DELETE_GAMINGPC_SUCCESS,
    DELETE_GAMINGPC_FAIL,
    DELETE_GAMINGPC_RESET,

    GAMINGPC_DETAILS_REQUEST,
    GAMINGPC_DETAILS_SUCCESS,
    GAMINGPC_DETAILS_FAIL,

    UPDATE_GAMINGPC_REQUEST,
    UPDATE_GAMINGPC_SUCCESS,
    UPDATE_GAMINGPC_FAIL,
    UPDATE_GAMINGPC_RESET,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,
    CHANGE_DELIVERY_STATUS_RESET,

} from "../constants/index"

// pc list
export const pcListReducer =( state ={ pc: [] }, action) => {
    switch (action.type) {
        case GAMINGPC_LIST_REQUEST:
            return {
                ...state,
                loading:true,
                pc: [],  //always pass the object during the request
                error: ""
            }
            case GAMINGPC_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                pc: action.payload,
                error: ""
            }
        case GAMINGPC_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// pc details
export const pcDetailReducer =( state ={ pc: {} }, action) => {
    switch (action.type) {
        case GAMINGPC_DETAILS_REQUEST:
            return {
                ...state,
                loading:true,
                pc: {},  //always pass the object during the request
                error: ""
            }
            case GAMINGPC_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                pc: action.payload,
                error: ""
            }
        case GAMINGPC_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Create pc reducer
export const createpcReducer =( state ={ pc: {} }, action) => {
    switch (action.type) {
        case CREATE_GAMINGPC_REQUEST:
            return {
                ...state,
                loading:true,
                pc: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case CREATE_GAMINGPC_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                pc: action.payload,
                error: ""
            }
        case CREATE_GAMINGPC_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                pc: {},
                error: action.payload
            }
        case CREATE_GAMINGPC_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                pc: {},
                error: ""
            }
        default:
            return state
    }
}

// update pc reducer
export const updatepcReducer =( state ={ pc: {} }, action) => {
    switch (action.type) {
        case UPDATE_GAMINGPC_REQUEST:
            return {
                ...state,
                loading:true,
                pc: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case UPDATE_GAMINGPC_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                pc: action.payload,
                error: ""
            }
        case UPDATE_GAMINGPC_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                pc: {},
                error: action.payload
            }
        case UPDATE_GAMINGPC_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                pc: {},
                error: ""
            }
        default:
            return state
    }
}

// delete pc reducer
export const deleteGamingpcReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_GAMINGPC_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: ""
            }
        case DELETE_GAMINGPC_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: ""
            }
        case DELETE_GAMINGPC_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case DELETE_GAMINGPC_RESET:
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