import {
    setEmployeeName,
    setData,
    getData,
    setEmployeeData,
    getEmployeeData,
    setError
} from './../../../redux/ducks/employee';
import { mockedData, mockedEmployeeData } from '../../__mocks__';

describe('actions', () => {

    describe('setEmployeeName', () => {
        it('should return object with employee name and type', () => {
            expect(setEmployeeName('test')).toStrictEqual(
                {
                    type: 'app/employee/SET_EMPLOYEE_NAME',
                    payload: 'test'
                });
        });
    });

    describe('setData', () => {
        it('should return object with new data', () => {
            expect(setData(mockedData)).toStrictEqual({
                type: 'app/employee/SET_DATA',
                payload: mockedData
            });
        });
    });

    describe('getData', () => {
        it('should return object with type for fetch data', () => {
            expect(getData()).toStrictEqual({
                type: 'app/employee/ASYNC_GET_DATA'
            });
        });
    });

    describe('setEmpoloyeeData', () => {
        it('should return object with employee data', () => {
            expect(setEmployeeData(mockedEmployeeData)).toStrictEqual({
                type: 'app/employee/SET_EMPLOYEE_DATA',
                payload: mockedEmployeeData
            });
        });
    });

    describe('getEmployeeData', () => {
        it('should return object with name of employee for fetch data', () => {
            expect(getEmployeeData('test')).toStrictEqual({
                type: 'app/employee/ASYNC_GET_EMPLOYEE_DATA',
                payload: 'test'
            });
        });
    });

    describe('setError', () => {
        it('should return object with boolean', () => {
            expect(setError(true)).toStrictEqual({
                type: 'app/employee/SET_ERROR',
                payload: true
            });
        });
    });

});
