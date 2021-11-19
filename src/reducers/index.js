import { combineReducers } from "redux";
import articleReducer from "./article";

const allReducers = combineReducers({
   articleReducer,
})
export default allReducers;