import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import toastReducer from "./toastReducer";
import loadingReducer from "./loadingReducer";
import authReducer from './authReducer'
import eventReducer from "./eventReducer";
// import memberReducer from "./memberReducer";

export default combineReducers({
    modal:modalReducer,
    toast: toastReducer,
    loading: loadingReducer,
    auth: authReducer,
    event: eventReducer,
    // member:memberReducer
})