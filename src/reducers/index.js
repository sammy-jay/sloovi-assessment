import { combineReducers } from "redux";
import auth from "./authReducer";
import tasks from "./taskReducer";

export default combineReducers({
  auth,
  tasks,
});
