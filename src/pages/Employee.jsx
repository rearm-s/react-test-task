import React from 'react';
import {Table} from "react-bootstrap";
import styled from "styled-components";
import {useSelector} from "react-redux";


const StyledEmployee = styled.div`
  padding: 20px;
`

const Employee = () => {

    const data = useSelector(({employee}) => employee.data)
    const employeeName = useSelector(({employee}) => employee.employeeName)

    const [position, subordinates] = data

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
                    <td>{employeeName ? employeeName : '-'}</td>
                    <td>{position}</td>
                    <td>{typeof(subordinates) == 'object'
                        ? subordinates['direct-subordinates'].map(subo => <ul key={subo}><li>{subo}</li></ul>)
                        : '-'}</td>
                </tr>
                </tbody>
            </Table>
        </StyledEmployee>
    );
};

export default Employee;