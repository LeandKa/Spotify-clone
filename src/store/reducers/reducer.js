import { combineReducers } from "redux";
import GlobalReducer from "./GlobalReducer";

const reducer = combineReducers({
  login: GlobalReducer
});

export default reducer;
