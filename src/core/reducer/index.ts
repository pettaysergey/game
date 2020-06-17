import { combineReducers } from "redux";
import { userReducer } from "../../containers/Main/store/duck";
import { IGlobalState } from "./types";

export const rootReducer = combineReducers<IGlobalState>({
  userReducer,
});
