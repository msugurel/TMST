import { combineReducers } from "redux";
import materialReducer from "./materialReducer";
import userReducer from "./userReducer";

export default combineReducers({
    materialReducer,userReducer
})