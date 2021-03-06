import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import { Error, SearchBox } from './index';

import { StyledHome } from '../styled/Home';
import { EmployeeAction, getData, setEmployeeName, setError } from '../redux/ducks/employee';
import { RootState } from '../redux/store';

const Home = (): JSX.Element => {

    const dispatch: Dispatch<EmployeeAction> = useDispatch();
    const employeeName = useSelector(({employee}: RootState) => employee.employeeName);
    const data = useSelector(({employee}: RootState) => employee.data);
    const isError = useSelector(({employee}: RootState) => employee.isError);
    const history = useHistory();

    useEffect(() => {
        dispatch(getData());
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmployeeName(event.target.value));
    };

    const handleOnSearch = () => {
        const hasError = !data.includes(employeeName);
        if (!hasError) {
            history.push(`/employee/${employeeName}`);
        }
        dispatch(setError(!!hasError));
        dispatch(setEmployeeName(''));
    };

    return (
        <StyledHome>
            <SearchBox employee={employeeName} onChangeEmployee={handleOnChange} onSearchEmployee={handleOnSearch}/>
            {isError && (
                <Error/>
            )}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name of employee</th>
                </tr>
                </thead>
                <tbody>
                {data && (
                    data.map((emp: string) => (<tr key={emp}>
                        <td>{emp}</td>
                    </tr>))
                )}
                </tbody>
            </Table>
        </StyledHome>
    );
};

export default Home;
