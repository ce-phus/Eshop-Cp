import axios from "axios";

import {
    ACCESSORIES_LIST_REQUEST,
    ACCESSORIES_LIST_SUCCESS,
    ACCESSORIES_LIST_FAIL,

    CREATE_ACCESSORIES_REQUEST,
    CREATE_ACCESSORIES_SUCCESS,
    CREATE_ACCESSORIES_FAIL,

    DELETE_ACCESSORIES_REQUEST,
    DELETE_ACCESSORIES_SUCCESS,
    DELETE_ACCESSORIES_FAIL,

    ACCESORIES_DETAIL_REQUEST,
    ACCESORIES_DETAIL_SUCCESS,
    ACCESORIES_DETAIL_FAIL,

    UPDATE_ACCESSORIES_REQUEST,
    UPDATE_ACCESSORIES_SUCCESS,
    UPDATE_ACCESSORIES_FAIL,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,
    
} from "../constants/index"

// accessories list
export const getAccessoriesList = () => async (dispatch) => {
    try {
        dispatch({
            type: ACCESSORIES_LIST_REQUEST
        })

        // call api
        const { data } = await axios.get("http://102.212.245.33/api/accessories/", {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-type': 'application/json'
            }
        })
        dispatch({
            type: ACCESSORIES_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ACCESSORIES_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getAccessoriesDetails = (id) => async (dispatch) =>{
    try {
        dispatch ({
            type: ACCESORIES_DETAIL_REQUEST
        })

        // call api
        const { data } = await axios.get(`http://102.212.245.33/api/accessories/${id}/`)
        dispatch({
            type: ACCESORIES_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ACCESORIES_DETAIL_FAIL,
            payload: error.message
        })
    }
}

export const createaccessories = (accessories) => async (dispatch, getState) => {
    try {
        dispatch({
            type:CREATE_ACCESSORIES_REQUEST,
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

        const { data } = await axios.post(
            "http://102.212.245.33/api/accessories-create/",
            accessories,
            config
        )

        dispatch({
            type: CREATE_ACCESSORIES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_ACCESSORIES_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// delete accessories
export const deleteaccessories = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:DELETE_ACCESSORIES_REQUEST,
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
            `http://102.212.245.33/api/accessories-delete/${id}/`,
            config
        )

        dispatch({
            type: DELETE_ACCESSORIES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_ACCESSORIES_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// update Breakfast
export const updateaccessories = (id, accessories) => async (dispatch, getState) => {
    try {
        dispatch({
            type:UPDATE_ACCESSORIES_REQUEST,
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
            `http://102.212.245.33/api/accessories-update/${id}/`,
            accessories,
            config
        )

        dispatch({
            type: UPDATE_ACCESSORIES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_ACCESSORIES_FAIL,
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