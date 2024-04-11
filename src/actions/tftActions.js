import axios from 'axios'

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

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,

} from '../constants/index'

// TFT list
export const getTftList= () => async (dispatch) => {
    try {
        dispatch({
            type: TFT_LIST_REQUEST
        })

        // call api
        const { data } = await axios.get("http://102.212.245.33/api/tft/", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        })
        dispatch({
            type: TFT_LIST_SUCCESS,
            payload: data
        }) 
    } catch (error) {
        dispatch({
            type: TFT_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getTftDetails = (id) => async (dispatch) =>{
    try {
        dispatch ({
            type: TFT_DETAILS_REQUEST
        })

        // call api
        const { data } = await axios.get(`http://102.212.245.33/api/tft/${id}`)
        dispatch({
            type: TFT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TFT_DETAILS_FAIL,
            payload: error.message
        })
    }
}

export const createtft = (tft) => async (dispatch, getState) => {
    try {
        dispatch({
            type:CREATE_TFT_REQUEST,
        })

        // login reducer
        const {
            userLoginReducer: { userInfo },
        } = getState()

        const config = {
            headers: {
                "Content-Type": "multipart/form-dat",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            "http://102.212.245.33/api/tft-create/",
            tft,
            config
        )

        dispatch({
            type: CREATE_TFT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_TFT_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// delete tft
export const deletetft = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:DELETE_TFT_REQUEST,
        })

        // login reducer
        const {
            userLoginReducer: { userInfo },
        } = getState()

        const config = {
            headers: {
                "Content-Type": "multipart/form-dat",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `http://102.212.245.33/api/tft-delete/${id}`,
            config
        )

        dispatch({
            type: DELETE_TFT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_TFT_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// update tft
export const updatetft = (id, tft) => async (dispatch, getState) => {
    try {
        dispatch({
            type:UPDATE_TFT_REQUEST,
        })

        // login reducer
        const {
            userLoginReducer: { userInfo },
        } = getState()

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `http://102.212.245.33/api/tft-update/${id}/`,
            breakfast,
            config
        )

        dispatch({
            type: UPDATE_TFT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_TFT_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}
// change ordered product delivery status
export const changeDeliveryStatus = (id, breakfast) => async (dispatch, getState) => {

    try {
        dispatch({
            type: CHANGE_DELIVERY_STATUS_REQUEST
        })

        // login reducer
        const {
            userLoginReducer: { userInfo },
        } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // api call
        const { data } = await axios.put(
            `http://102.212.245.33/account/change-order-status/${id}/`,
            breakfast,
            config
        )

        dispatch({
            type: CHANGE_DELIVERY_STATUS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHANGE_DELIVERY_STATUS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}