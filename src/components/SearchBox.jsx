import React  from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const SearchBox = ({employee, onChangeEmployee, onSearchEmployee}) => (
        <InputGroup className="mb-3">
            <FormControl
                value={employee}
                onChange={onChangeEmployee}
                placeholder="Type employee name"
            />
            <Button
                variant="outline-secondary"
                onClick={onSearchEmployee}
            >
                Search
            </Button>
        </InputGroup>
);

export default SearchBox;
