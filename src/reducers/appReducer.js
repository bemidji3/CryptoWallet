import { combineReducers } from "redux";

// import userReducer from "../store/requests/requestsReducer";
// import pagesReducer from "../store/pages/pagesReducer";

// const appReducer = combineReducers({ userReducer, pagesReducer });


import currentUser from "../store/users/userReducer";
import currenciesReducer from "../store/currencies/currenciesReducer";

const appReducer = combineReducers({ currentUser, currenciesReducer });

export default appReducer;
