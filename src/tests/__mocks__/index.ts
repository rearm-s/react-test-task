import { EmployeeDataType, EmployeeState } from '../../redux/ducks/employee';

export const mockedData: string[] = [
    'John Hartman',
    'Samad Pitt',
    'Amaya Knight',
    'Leanna Hogg',
    'Aila Hodgson',
    'Vincent Todd',
    'Faye Oneill',
    'Lynn Haigh',
    'Nylah Riddle'
];

export const mockedEmployeeData: EmployeeDataType[] = [
    'CEO',
    {
        'direct-subordinates': [
            'Samad Pitt',
            'Leanna Hogg'
        ]
    }
];

export const mockedStore: EmployeeState = {
    employeeName: '',
    data: [],
    employeeData: [],
    isError: false
};
