import React  from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

interface propsType {
    employee: string;
    onChangeEmployee: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchEmployee: () => void;
}

const SearchBox = ({employee, onChangeEmployee, onSearchEmployee}: propsType): JSX.Element => (
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
