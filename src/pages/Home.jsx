import React from 'react';
import styled from 'styled-components';
import SearchBox from "../components/SearchBox";
import {useDispatch, useSelector} from "react-redux";
import {setEmployeeName} from "../redux/reducers/employee";
import {fetchEmployee} from "../redux/actions/employee";


const StyledHome = styled.div`
  padding: 20px;
`


const Home = () => {


    const dispatch = useDispatch();
    const employeeName = useSelector(({employee}) => employee.employeeName)

    console.log(employeeName)

    const handleOnChange = (e) => {
        dispatch(setEmployeeName(e.target.value))
    }

    const handleOnClick = () => {
        dispatch(fetchEmployee(employeeName))
    }


    return (
        <StyledHome>
            <SearchBox employee={employeeName} onChangeEmployee={handleOnChange} onClickButton={handleOnClick} />
        </StyledHome>
    );
};

export default Home;

