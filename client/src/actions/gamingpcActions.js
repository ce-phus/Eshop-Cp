import axios from "axios";

import {
    GAMINGPC_LIST_REQUEST,
    GAMINGPC_LIST_SUCCESS,
    GAMINGPC_LIST_FAIL,

    CREATE_GAMINGPC_REQUEST,
    CREATE_GAMINGPC_FAIL,
    CREATE_GAMINGPC_SUCCESS,

    DELETE_GAMINGPC_REQUEST,
    DELETE_GAMINGPC_SUCCESS,
    DELETE_GAMINGPC_FAIL,

    GAMINGPC_DETAILS_REQUEST,
    GAMINGPC_DETAILS_SUCCESS,
    GAMINGPC_DETAILS_FAIL,

    UPDATE_GAMINGPC_REQUEST,
    UPDATE_GAMINGPC_SUCCESS,
    UPDATE_GAMINGPC_FAIL,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,

} from "../constants/index"

// gamingpc list
export const getGamingpcList = () => async (dispatch) => {
    try {
        dispatch({
            type: GAMINGPC_LIST_REQUEST
        })

        // call api
        const { data } = await axios.get("http://127.0.0.1:8000/api/pc/", {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-type': 'application/json'
            }
        })
        dispatch({
            type: GAMINGPC_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GAMINGPC_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getGamingPcDetails = (id) => async (dispatch) =>{
    try {
        dispatch ({
            type: GAMINGPC_DETAILS_REQUEST
        })

        // call api
        const { data } = await axios.get(`http://127.0.0.1:8000/api/pc/${id}/`)
        dispatch({
            type: GAMINGPC_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GAMINGPC_DETAILS_FAIL,
            payload: error.message
        })
    }
}

export const creategamingpc = (pc) => async (dispatch, getState) => {
    try {
        dispatch({
            type:CREATE_GAMINGPC_REQUEST,
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
            "http://127.0.0.1:8000/api/pc-create/",
            breakfast,
            config
        )

        dispatch({
            type: CREATE_GAMINGPC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_GAMINGPC_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// delete GAMING PC
export const deletegamingpc = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:DELETE_GAMINGPC_REQUEST,
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
            `http://127.0.0.1:8000/api/pc-delete/${id}/`,
            config
        )

        dispatch({
            type: DELETE_GAMINGPC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_GAMINGPC_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// update Gaming Pc
export const updategamingpc = (id, pc) => async (dispatch, getState) => {
    try {
        dispatch({
            type:UPDATE_GAMINGPC_REQUEST,
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
            `http://127.0.0.1:8000/api/pc-update/${id}/`,
            pc,
            config
        )

        dispatch({
            type: UPDATE_GAMINGPC_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_GAMINGPC_FAIL,
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