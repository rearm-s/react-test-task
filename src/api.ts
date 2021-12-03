import axios from 'axios';

const URL = 'http://api.additivasia.io/api/v1/assignment/employees/';

export async function http(url = '') {
    const response = await axios.get(`${URL}${url}`);
    return response.data;
}
