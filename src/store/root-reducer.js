import { combineReducers } from "redux";

import userReducer from "./user/reducer";

const memeApp = combineReducers({
  user: userReducer,
});

export default memeApp;
