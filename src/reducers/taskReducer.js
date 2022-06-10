import { ADD_TASK, GET_ALL_TASKS, GET_SINGLE_TASK, UPDATE_TASK, DELETE_TASK, ERROR } from "../constants/actionTypes";

const initialState = {
    tasks: [],
    task: null
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            state.tasks.unshift(action.payload)
            return state;
        case GET_ALL_TASKS:
            return {...state, tasks: action.payload}
        case GET_SINGLE_TASK:
            return { ...state, task: action.payload };
        case UPDATE_TASK:
            return { 
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task) 
            };
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)};
        case ERROR:
            break;
    
        default:
            return state;
    }
}

export default taskReducer