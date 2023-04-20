import { combineReducers } from "redux";
import crudReducer from "./crudReducer";

const rootReducer = combineReducers({
    crud: crudReducer,
});

export default rootReducer;
