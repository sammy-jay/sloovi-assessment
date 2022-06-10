import { LOGIN, GET_USERS, ERROR } from "../constants/actionTypes";

const initialState = {
    user: null,
    allUsers: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            
            break;
        case GET_USERS:
            
            break;
    
        default:
            return state;
    }
}

export default authReducer