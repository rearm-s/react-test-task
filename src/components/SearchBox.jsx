import React  from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";

export default ({employee, onChangeEmployee, onClickButton}) => (
        <InputGroup className="mb-3">
            <FormControl
                value={employee}
                onChange={onChangeEmployee}
                placeholder="Type employee name"
            />
            <Button
                variant="outline-secondary"
                onClick={onClickButton}
            >
                Search
            </Button>
        </InputGroup>
)
