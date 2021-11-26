import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import {rootWatcher, sagaMiddleware} from "./saga";

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)

export default store;