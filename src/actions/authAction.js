import { LOGIN, GET_USERS, ERROR } from "../constants/actionTypes";
import * as api from "../api"
export const login = (formData) => async (dispatch) => {
    try {
        const {data} = await api.login(formData)
        dispatch({type: LOGIN, payload: data})
    } catch (error) {
        dispatch({type: ERROR, error})
    }
}
export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await api.getUsers()
        dispatch({type: GET_USERS, payload: data})
    } catch (error) {
        dispatch({type: ERROR, error})
    }
}