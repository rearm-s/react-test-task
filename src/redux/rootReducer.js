import {combineReducers} from "redux";
import employee from "./ducks/employee";

const rootReducer = combineReducers({
    employee
})

export default rootReducer;