import {
  ADD_TASK,
  GET_ALL_TASKS,
  GET_SINGLE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  ERROR,
  IS_EDITABLE,
} from "../constants/actionTypes";

const initialState = {
  tasks: [],
  task: null,
  loading: true,
  error: null,
  isEditable: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case GET_ALL_TASKS:
      return { ...state, tasks: action.payload, loading: false };
    case GET_SINGLE_TASK:
      return { ...state, task: action.payload };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case IS_EDITABLE:
      return {
        ...state,
        isEditable: !state.isEditable,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case ERROR:
      console.log("Error: ", action.payload);
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default taskReducer;
