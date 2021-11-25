import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBox from "../components/SearchBox";

const StyledHome = styled.div`
  padding: 20px;
`


const Home = () => {

    const [employee, setEmployee] = useState('');
    const [value, setValue] = useState(employee);

    const handleOnChange = (e) => {
        setEmployee(e.target.value)
    }

    const handleOnClick = () => {
        setValue(employee)
    }

    // develop

    return (
        <StyledHome>
            <SearchBox employee={employee} onChangeEmployee={handleOnChange} onClickButton={handleOnClick} />
        </StyledHome>
    );
};

export default Home;

