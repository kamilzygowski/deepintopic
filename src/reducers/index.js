import { combineReducers } from "redux";
import articleReducer from "./article";
import dictionaryReducer from "./dictionary";

const allReducers = combineReducers({
   articleReducer,
   dictionaryReducer,
})
export default allReducers;