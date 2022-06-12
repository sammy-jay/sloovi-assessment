import { LOGIN, GET_USERS, ERROR } from "../constants/actionTypes";

const initialState = {
  user: null,
  allUsers: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const user = {
        token: action?.payload?.token,
        company_id: action?.payload?.company_id,
        user_id: action?.payload?.user_id,
        name: action?.payload?.name,
        email: action?.payload?.email,
        icon: action?.payload?.icon,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        user: user,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action?.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
