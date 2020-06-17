import { IGlobalState } from "core/reducer/types";
import { createSelector } from "reselect";

export const userSelector = (state: IGlobalState) => state.userReducer;
export const musicSelector = createSelector(userSelector, ({ music }) => music);
