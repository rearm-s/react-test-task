import { http } from './../api';
import { mockedData, mockedEmployeeData } from './__mocks__';

describe('Api', () => {
    it('should available api allData', async () => {
        const data = await http();
        expect(data).toStrictEqual(mockedData);
    });
    it('should available api employeeData', async () => {
        const data = await http(mockedData[0]);
        expect(data).toStrictEqual(mockedEmployeeData);
    });
});
