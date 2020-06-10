import { combineReducers } from "redux";
import { userReducer } from "../../containers/Main/store/duck";

export const rootReducer = combineReducers({
  userReducer,
});
