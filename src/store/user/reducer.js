import { SET_USER_INFOR } from "./actions";
import { SET_USER_INFOR_REMOVE } from "./actions";

const initState = {
  currentUser: getUserFromLocal() || {},
};

function getUserFromLocal() {
  const userApp = localStorage.getItem("USER_INFO");
  const parseUserApp = JSON.parse(userApp);
  return parseUserApp;
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_INFOR:
      return {
        ...state,
        currentUser: action.payload.user.data.user,
      };
    case SET_USER_INFOR_REMOVE:
      return {
        ...state,
        currentUser: {},
      };

    default:
      return state;
  }
}
