import { ADD_TASK, GET_ALL_TASKS, GET_SINGLE_TASK, UPDATE_TASK, DELETE_TASK, ERROR } from "../constants/actionTypes";
import * as api from "../api"

export const addTask = (newTask) => async (dispatch) => {
    try {
        const {data} = await api.addTask(newTask)
        dispatch({type: ADD_TASK, payload: data})
    } catch (error) {
        dispatch({type: ERROR, error})
    }
}
export const getAllTasks = () => async (dispatch) => {
    try {
        const {data} = await api.getAllTasks()
        dispatch({type: GET_ALL_TASKS, payload: data})
    } catch (error) {
        dispatch({type: ERROR, error})
    }
}
export const getSingleTask = (taskId) => async (dispatch) => {
    try {
        const {data} = await api.getSingleTask(taskId)
        dispatch({type: GET_SINGLE_TASK, payload: data})
    } catch (error) {
        dispatch({type: ERROR, error})
    }
}
export const updateTask = (taskId, updatedTask) => async (dispatch) => {
    try {
        const {data} = await api.updateTask(taskId, updatedTask)
        dispatch({type: UPDATE_TASK, payload: data})
    } catch (error) {
        dispatch({type: ERROR, error})
    }
}
export const deleteTask = (taskId) => async (dispatch) => {
    try {
        await api.deleteTask(taskId)
        dispatch({type: DELETE_TASK, payload: taskId})
    } catch (error) {
        dispatch({type: ERROR, error})
    }
}