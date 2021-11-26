import React from "react";
import {Button, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {StyledEmployee} from "../styled/Employee";


const Employee = () => {

    const employeeData = useSelector(({employee}) => employee.employeeData)
    const employeeName = useSelector(({employee}) => employee.employeeName)
    const history = useHistory();

    const [position, subordinates] = employeeData

    const handleOnClick = () => {
        history.goBack()
    }

    return (
        <StyledEmployee>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Subordinates</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{employeeName ? employeeName : "-"}</td>
                    <td>{position ? position : "-"}</td>
                    <td>{typeof(subordinates) == "object"
                        ? subordinates["direct-subordinates"].map(subo => <ul key={subo}><li>{subo}</li></ul>)
                        : "-"}</td>
                </tr>
                </tbody>
            </Table>
            <Button
                variant="outline-secondary"
                onClick={handleOnClick}
            >
                Go back
            </Button>
        </StyledEmployee>
    );
};

export default Employee;