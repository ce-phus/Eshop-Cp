import {
    COMPUTERPARTS_LIST_REQUEST,
    COMPUTERPARTS_LIST_SUCCESS,
    COMPUTERPARTS_LIST_FAIL,

    CREATE_COMPUTERPARTS_REQUEST,
    CREATE_COMPUTERPARTS_FAIL,
    CREATE_COMPUTERPARTS_SUCCESS,
    CREATE_COMPUTERPARTS_RESET,

    DELETE_COMPUTERPARTS_REQUEST,
    DELETE_COMPUTERPARTS_SUCCESS,
    DELETE_COMPUTERPARTS_FAIL,
    DELETE_COMPUTERPARTS_RESET,

    COMPUTERPARTS_DETAILS_REQUEST,
    COMPUTERPARTS_DETAILS_SUCCESS,
    COMPUTERPARTS_DETAILS_FAIL,

    UPDATE_COMPUTERPARTS_REQUEST,
    UPDATE_COMPUTERPARTS_FAIL,
    UPDATE_COMPUTERPARTS_SUCCESS,
    UPDATE_COMPUTERPARTS_RESET,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,
    CHANGE_DELIVERY_STATUS_RESET,

} from "../constants/index"

// computerparts list
export const computerpartsListReducer =( state ={ computerparts: [] }, action) => {
    switch (action.type) {
        case COMPUTERPARTS_LIST_REQUEST:
            return {
                ...state,
                loading:true,
                computerparts: [],  //always pass the object during the request
                error: ""
            }
            case COMPUTERPARTS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                computerparts: action.payload,
                error: ""
            }
        case COMPUTERPARTS_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// computerparts details
export const computerpartsDetailReducer =( state ={ computerparts: {} }, action) => {
    switch (action.type) {
        case COMPUTERPARTS_DETAILS_REQUEST:
            return {
                ...state,
                loading:true,
                computerparts: {},  //always pass the object during the request
                error: ""
            }
            case COMPUTERPARTS_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                computerparts: action.payload,
                error: ""
            }
        case COMPUTERPARTS_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// Create computerparts reducer
export const createcomputerpartsReducer =( state ={ computerparts: {} }, action) => {
    switch (action.type) {
        case CREATE_COMPUTERPARTS_REQUEST:
            return {
                ...state,
                loading:true,
                computerparts: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case CREATE_COMPUTERPARTS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                computerparts: action.payload,
                error: ""
            }
        case CREATE_COMPUTERPARTS_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                computerparts: {},
                error: action.payload
            }
        case CREATE_COMPUTERPARTS_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                computerparts: {},
                error: ""
            }
        default:
            return state
    }
}

// update computerparts reducer
export const updatecomputerpartsReducer =( state ={ computerparts: {} }, action) => {
    switch (action.type) {
        case UPDATE_COMPUTERPARTS_REQUEST:
            return {
                ...state,
                loading:true,
                computerparts: {},  //always pass the object during the request
                success: false,
                error: ""
            }
            case UPDATE_COMPUTERPARTS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                computerparts: action.payload,
                error: ""
            }
        case UPDATE_COMPUTERPARTS_FAIL:
            return {
                ...state,
                loading: false,
                success:false,
                computerparts: {},
                error: action.payload
            }
        case UPDATE_COMPUTERPARTS_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                computerparts: {},
                error: ""
            }
        default:
            return state
    }
}

// delete computerparts reducer
export const deleteComputerPartsReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_COMPUTERPARTS_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: ""
            }
        case DELETE_COMPUTERPARTS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: ""
            }
        case DELETE_COMPUTERPARTS_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case DELETE_COMPUTERPARTS_RESET:
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