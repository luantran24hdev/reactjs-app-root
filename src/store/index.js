import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./root-reducer";

const Store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default Store;
