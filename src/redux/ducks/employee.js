import { call, put, takeEvery } from 'redux-saga/effects';
import {http} from "../../api/httpRequest";

const SET_EMPLOYEE_NAME = 'app/employee/SET_EMPLOYEE_NAME';
const SET_DATA = 'app/employee/SET_DATA';
const ASYNC_SET_DATA = 'app/employee/ASYNC_SET_DATA';
const SET_EMPLOYEE_DATA = 'app/employee/SET_EMPLOYEE_DATA';
const ASYNC_SET_EMPLOYEE_DATA = 'app/employee/ASYNC_SET_EMPLOYEE_DATA';
const SET_ERROR = 'app/employee/SET_ERROR';

const initialState = {
    employeeName: '',
    data: [],
    employeeData: [],
    isError: false
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEE_NAME:
            return {
                ...state,
                employeeName: action.payload
            }
        case SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case SET_EMPLOYEE_DATA:
            return {
                ...state,
                employeeData: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state;
    }
};

export default employeeReducer;

export const setEmployeeName = (payload) => ({type: SET_EMPLOYEE_NAME, payload})

export const setData = (payload) => ({type: SET_DATA, payload})
export const asyncSetData = (payload) => ({type: ASYNC_SET_DATA, payload})

export const setEmployeeData = (payload) => ({type: SET_EMPLOYEE_DATA, payload})
export const asyncSetEmployeeData = (payload) => ({type: ASYNC_SET_EMPLOYEE_DATA, payload})

export const setError = (payload) => ({type: SET_ERROR, payload})


export function* workerFetchData() {
    const data = yield call(() => http())
    yield put(setData(data))
}

export function* workerFetchEmployee(action) {
    const name = action.payload;
    const data = yield call(() => http(name));
    yield put(setEmployeeData(data))
}

export function* watcherFetchData() {
    yield takeEvery(ASYNC_SET_DATA, workerFetchData)
}

export function* watcherFetchEmployee() {
    yield takeEvery(ASYNC_SET_EMPLOYEE_DATA, workerFetchEmployee)
}
