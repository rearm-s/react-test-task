import React, {useEffect} from "react";
import SearchBox from "./SearchBox";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Error from "./Error";
import {StyledHome} from "../styled/Home";
import {asyncSetData, asyncSetEmployeeData, setEmployeeName, setError} from "../redux/ducks/employee";

const Home = () => {

    const dispatch = useDispatch();
    const employeeName = useSelector(({employee}) => employee.employeeName)
    const data = useSelector(({employee}) => employee.data)
    const isError = useSelector(({employee}) => employee.isError)
    const history = useHistory();

    useEffect(() => {
        // dispatch(fetchData())
        dispatch(asyncSetData())
    }, [])


    const handleOnChange = (e) => {
        dispatch(setEmployeeName(e.target.value))
    }

    const handleOnClick = (e) => {
        if(!data.includes(employeeName)) {
            dispatch(setError(true))
            dispatch(setEmployeeName(''))
        } else {
            // dispatch(fetchEmployee(employeeName))
            dispatch(asyncSetEmployeeData(employeeName))
            history.push(`/employee/${employeeName}`)
            dispatch(setError(false))
        }
    }

    return (
        <StyledHome>
            <SearchBox employee={employeeName} onChangeEmployee={handleOnChange} onClickButton={handleOnClick}/>
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

