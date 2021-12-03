import { runSaga } from '@redux-saga/core';

import {
    setData,
    setEmployeeData,
    getEmployeeData,
    workerFetchData,
    workerFetchEmployee
} from './../../../redux/ducks/employee';
import { mockedData, mockedEmployeeData } from '../../__mocks__';
import * as api from './../../../api';

afterEach(() => jest.resetAllMocks());

describe('sagas', () => {

    describe('workerFetchData()', () => {
        it('should return array of employees', async () => {
            const requestEmployees = jest.spyOn(api, 'http').mockImplementation(() => Promise.resolve(mockedData));
            const dispatched: [] = [];

            await runSaga({
                dispatch: (action: never) => dispatched.push(action)
            }, workerFetchData);

            expect(requestEmployees).toHaveBeenCalledTimes(1);
            expect(dispatched).toEqual([setData(mockedData)]);
        });
    });

    describe('workerFetchEmployee()', () => {
        it('should call api and return employee data', async () => {
            const name = mockedData[0];
            const requestImageDetails = jest.spyOn(api, 'http').mockImplementation(() => Promise.resolve(mockedEmployeeData));
            const dispatched: [] = [];

            await runSaga({
                dispatch: (action: never) => dispatched.push(action)
            }, workerFetchEmployee, getEmployeeData(name));

            expect(requestImageDetails).toHaveBeenCalledTimes(1);
            expect(dispatched).toEqual([setEmployeeData(mockedEmployeeData)]);
        });
    });

});
