import { rootReducer } from "../reducer";
import { createStore } from "redux";

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
