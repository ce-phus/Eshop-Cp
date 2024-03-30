import axios from "axios";
import {
    COMPUTERPARTS_LIST_REQUEST,
    COMPUTERPARTS_LIST_SUCCESS,
    COMPUTERPARTS_LIST_FAIL,

    CREATE_COMPUTERPARTS_REQUEST,
    CREATE_COMPUTERPARTS_FAIL,
    CREATE_COMPUTERPARTS_SUCCESS,

    DELETE_COMPUTERPARTS_REQUEST,
    DELETE_COMPUTERPARTS_SUCCESS,
    DELETE_COMPUTERPARTS_FAIL,

    COMPUTERPARTS_DETAILS_REQUEST,
    COMPUTERPARTS_DETAILS_SUCCESS,
    COMPUTERPARTS_DETAILS_FAIL,

    UPDATE_COMPUTERPARTS_REQUEST,
    UPDATE_COMPUTERPARTS_FAIL,
    UPDATE_COMPUTERPARTS_SUCCESS,

    CHANGE_DELIVERY_STATUS_FAIL,
    CHANGE_DELIVERY_STATUS_REQUEST,
    CHANGE_DELIVERY_STATUS_SUCCESS,

} from "../constants/index"

//COMPUTERPARTS LIST
export const getComputerPartsList = () => async (dispatch) => {
    try {
        dispatch({
            type: COMPUTERPARTS_LIST_REQUEST
        })

        // call api
        const { data } = await axios.get("http://127.0.0.1:8000/api/computerparts/", {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-type': 'application/json'
            }
        })
        dispatch({
            type: COMPUTERPARTS_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COMPUTERPARTS_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getComputerPartsDetails = (id) => async (dispatch) =>{
    try {
        dispatch ({
            type: COMPUTERPARTS_DETAILS_REQUEST
        })

        // call api
        const { data } = await axios.get(`http://127.0.0.1:8000/api/computerparts/${id}/`)
        dispatch({
            type: COMPUTERPARTS_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COMPUTERPARTS_DETAILS_FAIL,
            payload: error.message
        })
    }
}

export const createcomputerparts = (parts) => async (dispatch, getState) => {
    try {
        dispatch({
            type:CREATE_COMPUTERPARTS_REQUEST,
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
            "http://127.0.0.1:8000/api/computerparts-create/",
            parts,
            config
        )

        dispatch({
            type: CREATE_COMPUTERPARTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_COMPUTERPARTS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// delete computer parts
export const deletecomputerparts = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type:DELETE_COMPUTERPARTS_REQUEST,
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
            `http://127.0.0.1:8000/api/computerparts-delete/${id}/`,
            config
        )

        dispatch({
            type: DELETE_COMPUTERPARTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_COMPUTERPARTS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// update Computer parts
export const updatecomputerparts = (id, parts) => async (dispatch, getState) => {
    try {
        dispatch({
            type:UPDATE_COMPUTERPARTS_REQUEST,
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
            `http://127.0.0.1:8000/api/computerparts-update/${id}/`,
            parts,
            config
        )

        dispatch({
            type: UPDATE_COMPUTERPARTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PARTS_FAIL,
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