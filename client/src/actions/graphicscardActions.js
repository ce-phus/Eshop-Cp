import axios from 'axios'

import {
    GRAPHICSCARD_LIST_REQUEST,
    GRAPHICSCARD_LIST_SUCCESS,
    GRAPHICSCARD_LIST_FAIL,

    CREATE_GRAPHICSCARD_REQUEST,
    CREATE_GRAPHICSCARD_SUCCESS,
    CREATE_GRAPHICSCARD_FAIL,

    DELETE_GRAPHICSCARD_REQUEST,
    DELETE_GRAPHICSCARD_SUCCESS,
    DELETE_GRAPHICSCARD_FAIL,

    GRAPHICSCARD_DETAILS_REQUEST,
    GRAPHICSCARD_DETAILS_SUCCESS,
    GRAPHICSCARD_DETAILS_FAIL,

    UPDATE_GRAPHICSCARD_REQUEST,
    UPDATE_GRAPHICSCARD_SUCCESS,
    UPDATE_GRAPHICSCARD_FAIL,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,
} from "../constants/index"

// graphics card list
export const getGraphicsCardList = () => async (dispatch) => {
    try {
        dispatch({
            type: GRAPHICSCARD_LIST_REQUEST
        })

        // call api
        const { data } = await axios.get("http://127.0.0.1:8000/api/graphicscard/", {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-type': 'application/json'
            }
        })
        dispatch({
            type: GRAPHICSCARD_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GRAPHICSCARD_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getGraphicsCardDetails = (id) => async (dispatch) =>{
    try {
        dispatch ({
            type: GRAPHICSCARD_DETAILS_REQUEST
        })

        // call api
        const { data } = await axios.get(`http://127.0.0.1:8000/api/graphicscard/${id}/`)
        dispatch({
            type: GRAPHICSCARD_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GRAPHICSCARD_DETAILS_FAIL,
            payload: error.message
        })
    }
}

export const creategraphicscard = (graphicscard) => async (dispatch, getState) => {
    try {
        dispatch({
            type:CREATE_GRAPHICSCARD_REQUEST,
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
            "http://127.0.0.1:8000/api/graphicscard-create/",
            graphicscard,
            config
        )

        dispatch({
            type: CREATE_GRAPHICSCARD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_GRAPHICSCARD_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// delete graphics card
export const deletegraphicscard = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:DELETE_GRAPHICSCARD_REQUEST,
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
            `http://127.0.0.1:8000/api/graphicscard-delete/${id}/`,
            config
        )

        dispatch({
            type: DELETE_GRAPHICSCARD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_GRAPHICSCARD_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// update Graphics card
export const updategraphicscard = (id, graphicscard) => async (dispatch, getState) => {
    try {
        dispatch({
            type:UPDATE_GRAPHICSCARD_REQUEST,
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
            `http://127.0.0.1:8000/api/graphicscard-update/${id}/`,
            graphicscard,
            config
        )

        dispatch({
            type: UPDATE_GRAPHICSCARD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_GRAPHICSCARD_FAIL,
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
            `http://127.0.0.1:8000/account/change-order-status/${id}/`,
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