import { IGlobalState } from "core/reducer/types";
import { createSelector } from "reselect";

export const userSelector = (state: IGlobalState) => state.userReducer;
export const getMusic = createSelector(userSelector, ({ music }) => music);
export const getDifficult = createSelector(
  userSelector,
  ({ difficult }) => difficult
);
