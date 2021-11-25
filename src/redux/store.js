import {applyMiddleware, combineReducers, createStore} from "redux";
import employeeReducer from "./reducers/employee";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    employee: employeeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));