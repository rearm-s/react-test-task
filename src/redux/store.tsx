import { applyMiddleware, createStore, combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import createMiddleware from 'redux-saga';

import employee, { EmployeeState } from './ducks/employee';
import { watcherFetchData, watcherFetchEmployee } from './ducks/employee';

const rootReducer = combineReducers({
    employee
});

export type RootState = {
    employee: EmployeeState;
}

const sagaMiddleware = createMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export function* rootWatcher() {
    yield all([
        watcherFetchData(),
        watcherFetchEmployee()
    ]);
}

sagaMiddleware.run(rootWatcher);

export default store;
