import React, { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { Error, SearchBox } from './index';

import { StyledHome } from '../styled/Home';
import { asyncSetData, setEmployeeName, setError } from '../redux/ducks/employee';

const Home = () => {

    const dispatch = useDispatch();
    const employeeName = useSelector(({employee}) => employee.employeeName);
    const data = useSelector(({employee}) => employee.data);
    const isError = useSelector(({employee}) => employee.isError);
    const history = useHistory();

    useEffect(() => {
        dispatch(asyncSetData());
    }, [])

    const handleOnChange = (e) => {
        dispatch(setEmployeeName(e.target.value));
    }

    const handleOnSearch = () => {
        if(!data.includes(employeeName)) {
            dispatch(setError(true));
            dispatch(setEmployeeName(''));
        } else {
            history.push(`/employee/${employeeName}`);
            dispatch(setError(false));
            dispatch(setEmployeeName(''));
        }
    }

    return (
        <StyledHome>
            <SearchBox employee={employeeName} onChangeEmployee={handleOnChange} onSearchEmployee={handleOnSearch}/>
            {isError &&
                <Error />
            }
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name of employee</th>
                </tr>
                </thead>
                <tbody>
                {data &&
                    data.map(emp => {
                        return <tr key={emp}>
                            <td>{emp}</td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        </StyledHome>
    );
};

export default Home;
