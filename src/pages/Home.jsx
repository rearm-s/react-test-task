import React, {useState} from 'react';
import styled from 'styled-components';
import SearchBox from "../components/SearchBox";

const StyledHome = styled.div`
  padding-top: 20px;
  @media (max-width: 1244px) {
    padding: 20px;
  }
`


const Home = () => {

    const [employee, setEmployee] = useState('Leanna Hogg');
    const [value, setValue] = useState(employee);

    const handleOnChange = (e) => {
        setEmployee(e.target.value)
    }

    const handleOnClick = () => {
        setValue(employee)
    }

    return (
        <StyledHome>
            <SearchBox employee={employee} onChangeEmployee={handleOnChange} onClickButton={handleOnClick} />
        </StyledHome>
    );
};

export default Home;

