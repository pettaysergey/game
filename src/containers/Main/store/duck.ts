import { ActionType } from "../../../core/types";
import * as constants from "./constants";
import { createAction } from "redux-actions";
import { User } from "./types";

export const actions = {
  toggleMusic: createAction(constants.TOGGLE_MUSIC),
  changeDifficult: createAction(constants.CHANGE_DIFFICULT),
};

const initialUserState = {
  userName: "",
  difficult: "normal",
  music: false,
};

export const userReducer = (
  state = initialUserState,
  action: ActionType
): User => {
  switch (action.type) {
    case constants.TOGGLE_MUSIC:
      return { ...state, music: action.payload };
    case constants.CHANGE_DIFFICULT:
      return { ...state, difficult: action.payload };
    default:
      return state;
  }
};
