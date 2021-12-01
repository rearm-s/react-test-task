import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Dispatch } from 'redux';

import { Error } from './index';

import { StyledEmployee } from '../styled/Employee';
import { EmployeeAction, getEmployeeData, setError } from '../redux/ducks/employee';
import { RootState } from '../redux/store';

interface RouteParams {
    name: string;
}

const Employee = (): JSX.Element => {

    const dispatch: Dispatch<EmployeeAction> = useDispatch();
    const employeeData = useSelector(({employee}: RootState) => employee.employeeData);
    const history = useHistory();
    const isError = useSelector(({employee}: RootState) => employee.isError);

    const {name} = useParams<RouteParams>();

    useEffect(() => {
        dispatch(getEmployeeData(name));
    }, [name]);

    const [position, subordinates] = employeeData;

    const handleOnBack = () => {
        history.goBack();
        dispatch(setError(false));
    };

    const handleOnSearchSubo = (name: string) => {
        history.push(`/employee/${name}`);
        dispatch(getEmployeeData(name));
    };

    return (
        <StyledEmployee>
            {isError && (
                <Error/>
            )}
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
                    <td>{typeof (subordinates) === "object"
                        ? subordinates["direct-subordinates"].map((subo: string) =>
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
