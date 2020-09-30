import { combineReducers } from "redux";
import userReducer from "../store/requests/requestsReducer";
import pagesReducer from "../store/pages/pagesReducer";

const appReducer = combineReducers({ userReducer, pagesReducer });

export default appReducer;
