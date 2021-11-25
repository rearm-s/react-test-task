import axios from "axios";
import {setData} from "../reducers/employee";


export const fetchEmployee = (name) => dispatch => {
    axios.get(`http://api.additivasia.io/api/v1/assignment/employees/${name}`)
        .then(({data}) => {
            dispatch(setData(data))
        })
}

