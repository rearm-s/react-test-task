import React  from 'react';
import styled from 'styled-components';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const StyledSearchBox = styled.div`
`


const SearchBox = ({employee, onChangeEmployee, onClickButton}) => {

    return (
        <StyledSearchBox>
            <InputGroup className="mb-3">
                <FormControl
                    value={employee}
                    onChange={onChangeEmployee}
                    placeholder="Type employee name"
                />
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={onClickButton}
                >
                    Search
                </Button>
            </InputGroup>
        </StyledSearchBox>
    );
};

export default SearchBox;