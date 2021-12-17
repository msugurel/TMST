import { combineReducers } from "redux";
import materialReducer from "./materialReducer";
import userReducer from "./userReducer";
import warehouseReducer from "./warehouseReducer";
import stockprocessReducer from "./stockprocessReducer";

export default combineReducers({
    materialReducer,userReducer,warehouseReducer,stockprocessReducer
})