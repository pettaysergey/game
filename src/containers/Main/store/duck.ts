import { ActionType } from "../../../core/types";

const initialUserState = {
  userName: "",
  difficult: "normal",
  theme: "light",
};

export const userReducer = (state = initialUserState, action: ActionType) => {
  return {};
};
