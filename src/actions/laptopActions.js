import axios from "axios"
import {
    LAPTOP_LIST_REQUEST,
    LAPTOP_LIST_SUCCESS,
    LAPTOP_LIST_FAIL,

    CREATE_LAPTOP_REQUEST,
    CREATE_LAPTOP_SUCCESS,
    CREATE_LAPTOP_FAIL,

    DELETE_LAPTOP_FAIL,
    DELETE_LAPTOP_REQUEST,
    DELETE_LAPTOP_SUCCESS,

    LAPTOP_DETAILS_REQUEST,
    LAPTOP_DETAILS_SUCCESS,
    LAPTOP_DETAILS_FAIL,

    UPDATE_LAPTOP_REQUEST,
    UPDATE_LAPTOP_SUCCESS,
    UPDATE_LAPTOP_FAIL,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,

} from "../constants/index"

// LAPTOP list
export const getLaptopList = () => async (dispatch) => {
    try {
        dispatch({
            type: LAPTOP_LIST_REQUEST
        })

        // call api
        const { data } = await axios.get("http://102.212.245.33/api/laptop/", {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-type': 'application/json'
            }
        })
        dispatch({
            type: LAPTOP_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LAPTOP_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getLaptopDetails = (id) => async (dispatch) =>{
    try {
        dispatch ({
            type: LAPTOP_DETAILS_REQUEST
        })

        // call api
        const { data } = await axios.get(`http://102.212.245.33/api/laptop/${id}/`)
        dispatch({
            type: LAPTOP_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LAPTOP_DETAILS_FAIL,
            payload: error.message
        })
    }
}

export const createlaptop = (laptop) => async (dispatch, getState) => {
    try {
        dispatch({
            type:CREATE_LAPTOP_REQUEST,
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
            "http://102.212.245.33/api/laptop-create/",
            laptop,
            config
        )

        dispatch({
            type: CREATE_LAPTOP_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_LAPTOP_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// delete laptop
export const deletelaptop = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:DELETE_LAPTOP_REQUEST,
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
            `http://102.212.245.33/api/laptop-delete/${id}/`,
            config
        )

        dispatch({
            type: DELETE_LAPTOP_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_LAPTOP_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// update Laptop
export const updatelaptop = (id, laptop) => async (dispatch, getState) => {
    try {
        dispatch({
            type:UPDATE_LAPTOP_REQUEST,
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
            `http://102.212.245.33/api/laptop-update/${id}/`,
            laptop,
            config
        )

        dispatch({
            type: UPDATE_LAPTOP_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_LAPTOP_FAIL,
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