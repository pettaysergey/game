import { ActionType } from "../../../core/types";
import * as constants from "./constants";
import { createAction } from "redux-actions";
import { User } from "./types";

export const actions = {
  toggleMusic: createAction(constants.TOGGLE_MUSIC),
};

const initialUserState = {
  userName: "",
  difficult: "normal",
  music: true,
};

export const userReducer = (
  state = initialUserState,
  action: ActionType
): User => {
  switch (action.type) {
    case constants.TOGGLE_MUSIC:
      return { ...state, music: action.payload };
    default:
      return state;
  }
};
