import { ADD_TASK, GET_ALL_TASKS, GET_SINGLE_TASK, UPDATE_TASK, DELETE_TASK, ERROR } from "../constants/actionTypes";

const initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            
            break;
        case GET_ALL_TASKS:
            
            break;
        case GET_SINGLE_TASK:
            
            break;
        case UPDATE_TASK:
            
            break;
        case DELETE_TASK:
            
            break;
        case ERROR:
            
            break;
    
        default:
            return state;
    }
}

export default taskReducer