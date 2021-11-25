import {useEffect, useState} from 'react';
import axios from "axios";

export const useEmployeeName = (name) => {

    const [emplName, setEmplName] = useState(null);

    useEffect(() => {
        axios.get(`http://api.additivasia.io/api/v1/assignment/employees/${name}`)
            .then(({data}) => {
                setEmplName(data)
            })
    }, [name])

    return emplName;
};
