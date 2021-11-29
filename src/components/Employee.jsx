import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { Error } from './index';

import { StyledEmployee } from '../styled/Employee';
import { asyncSetEmployeeData, setError } from '../redux/ducks/employee';


const Employee = () => {

    const dispatch = useDispatch();
    const employeeData = useSelector(({employee}) => employee.employeeData);
    const history = useHistory();
    const isError = useSelector(({employee}) => employee.isError);

    const { name } =  useParams();

    useEffect(() => {
        dispatch(asyncSetEmployeeData(name));
    }, [name])

    const [position, subordinates] = employeeData;

    const handleOnBack = () => {
        history.goBack();
        dispatch(setError(false));
    }

    const handleOnSearchSubo = (name) => {
        history.push(`/employee/${name}`);
        dispatch(asyncSetEmployeeData(name));
    }

    return (
        <StyledEmployee>
            {
                isError && <Error />
            }
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Subordinates</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{isError ? "-" : name}</td>
                    <td>{position ? position : "-"}</td>
                    <td>{typeof(subordinates) === "object"
                        ? subordinates["direct-subordinates"].map(subo =>
                            <ul key={subo}>
                                <li onClick={() => handleOnSearchSubo(subo)}>{subo}</li>
                            </ul>)
                        : "-"}</td>
                </tr>
                </tbody>
            </Table>
            <Button
                variant="outline-secondary"
                onClick={handleOnBack}
            >
                Go back
            </Button>
        </StyledEmployee>
    );
};

export default Employee;
