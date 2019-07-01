import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";

const rootReducer = combineReducers({
  test: testReducer //short name
})

export default rootReducer;