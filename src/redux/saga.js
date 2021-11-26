import createMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects'
import {watcherFetchData, watcherFetchEmployee} from "./ducks/employee";

export function* rootWatcher() {
    yield all([
        watcherFetchData(),
        watcherFetchEmployee()
    ])
}

export const sagaMiddleware = createMiddleware();
