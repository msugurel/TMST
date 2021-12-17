import { combineReducers } from "redux";
import materialReducer from "./materialReducer";
import userReducer from "./userReducer";
import warehouseReducer from "./warehouseReducer";

export default combineReducers({
    materialReducer,userReducer,warehouseReducer
})