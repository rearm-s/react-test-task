import employeeReducer, {
    setEmployeeName,
    setData,
    getData,
    setEmployeeData,
    getEmployeeData,
    setError
} from './../../../redux/ducks/employee';
import { mockedData, mockedEmployeeData, mockedStore } from '../../__mocks__';

const store = {...mockedStore};

describe('reducers', () => {

    describe('setEmployeeName() ', () => {
        it('should not mutate store', () => {
            const state = employeeReducer(store, setEmployeeName(''));
            expect(state).toStrictEqual(store);
        });
    });

    describe('setData() ', () => {
        it('should set data to store', () => {
            const state = employeeReducer(store, setData(mockedData));
            const expectedState = {...store, data: mockedData};
            expect(state).toStrictEqual(expectedState);
        });
    });

    describe('getData() ', () => {
        it('should not change state', () => {
            const state = employeeReducer(store, getData());
            expect(state).toStrictEqual(store);
        });
    });

    describe('setEmployeeData() ', () => {
        it('should set employee data to store', () => {
            const state = employeeReducer(store, setEmployeeData(mockedEmployeeData));
            const expectedState = {...store, employeeData: mockedEmployeeData};
            expect(state).toStrictEqual(expectedState);
        });
    });

    describe('getEmployeeData() ', () => {
        it('should not change state', () => {
            const state = employeeReducer(store, getEmployeeData(mockedData[0]));
            expect(state).toStrictEqual(store);
        });
    });

    describe('should update error status to be "false ', () => {
        it('should not change state', () => {
            const state = employeeReducer(store, setError(false));
            const expectedState = {...store, isError: false};
            expect(state).toStrictEqual(expectedState);
        });
    });

});
