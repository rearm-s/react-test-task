const SET_EMPLOYEE_NAME = 'SET_EMPLOYEE_NAME'
const SET_DATA = 'SET_DATA'

const initialState = {
    employeeName: '',
    data: []
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
        default:
            return state;
    }

};

export default employeeReducer;

export const setEmployeeName = (payload) => ({type: SET_EMPLOYEE_NAME, payload})

export const setData = (payload) => ({type: SET_DATA, payload})