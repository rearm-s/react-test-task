import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { http } from '../../api';

enum EmployeeActionTypes {
    SET_EMPLOYEE_NAME = 'app/employee/SET_EMPLOYEE_NAME',
    SET_DATA = 'app/employee/SET_DATA',
    GET_DATA = 'app/employee/ASYNC_GET_DATA',
    SET_EMPLOYEE_DATA = 'app/employee/SET_EMPLOYEE_DATA',
    GET_EMPLOYEE_DATA = 'app/employee/ASYNC_GET_EMPLOYEE_DATA',
    SET_ERROR = 'app/employee/SET_ERROR'
}

export interface setEmployeeNameAction {
    type: EmployeeActionTypes.SET_EMPLOYEE_NAME;
    payload: string;
}

export interface setDataAction {
    type: EmployeeActionTypes.SET_DATA;
    payload: string[];
}

export interface setEmployeeDataAction {
    type: EmployeeActionTypes.SET_EMPLOYEE_DATA;
    payload: EmployeeDataType[];
}

export interface setErrorAction {
    type: EmployeeActionTypes.SET_ERROR;
    payload: boolean;
}

export type EmployeeAction =
    setEmployeeNameAction |
    setDataAction |
    setEmployeeDataAction |
    setErrorAction |
    getDataAction |
    getEmployeeDataAction;

export type EmployeeDataType = (string | {'direct-subordinates': string[];});

export interface EmployeeState {
    employeeName: string;
    data: string[];
    employeeData: EmployeeDataType[];
    isError: boolean;
}

const initialState: EmployeeState = {
    employeeName: '',
    data: [],
    employeeData: [],
    isError: false
};

const employeeReducer = (state = initialState, action: EmployeeAction): EmployeeState => {
    switch (action.type) {
        case EmployeeActionTypes.SET_EMPLOYEE_NAME:
            return {
                ...state,
                employeeName: action.payload
            };
        case EmployeeActionTypes.SET_DATA:
            return {
                ...state,
                data: action.payload
            };
        case EmployeeActionTypes.SET_EMPLOYEE_DATA:
            return {
                ...state,
                employeeData: action.payload
            };
        case EmployeeActionTypes.SET_ERROR:
            return {
                ...state,
                isError: action.payload
            };
        default:
            return state;
    }
};

export default employeeReducer;

export const setEmployeeName = (payload: string): setEmployeeNameAction => ({
    type: EmployeeActionTypes.SET_EMPLOYEE_NAME,
    payload
});

export const setData = (payload: string[]): setDataAction => ({type: EmployeeActionTypes.SET_DATA, payload});

export interface getDataAction {
    type: EmployeeActionTypes.GET_DATA;
}

export const getData = (): getDataAction => ({type: EmployeeActionTypes.GET_DATA});

export const setEmployeeData = (payload: EmployeeDataType[]): setEmployeeDataAction => ({
    type: EmployeeActionTypes.SET_EMPLOYEE_DATA,
    payload
});

export interface getEmployeeDataAction {
    type: EmployeeActionTypes.GET_EMPLOYEE_DATA;
    payload: string;
}

export const getEmployeeData = (payload: string): getEmployeeDataAction => ({
    type: EmployeeActionTypes.GET_EMPLOYEE_DATA,
    payload
});

export const setError = (payload: boolean): setErrorAction => ({type: EmployeeActionTypes.SET_ERROR, payload});

export function* workerFetchData(): SagaIterator {
    const data: string[] = yield call(() => http());
    yield put(setData(data));
}

export function* workerFetchEmployee(action: getEmployeeDataAction): SagaIterator {
    try {
        const name: string = action.payload;
        const data: EmployeeDataType[] = yield call(() => http(name));
        yield put(setEmployeeData(data));
    } catch (e) {
        yield put(setError(true));
    }
}

export function* watcherFetchData() {
    yield takeEvery(EmployeeActionTypes.GET_DATA, workerFetchData);
}

export function* watcherFetchEmployee() {
    yield takeEvery(EmployeeActionTypes.GET_EMPLOYEE_DATA, workerFetchEmployee);
}
