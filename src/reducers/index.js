import selection from "./reducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selection: selection,
});

export default rootReducer;
