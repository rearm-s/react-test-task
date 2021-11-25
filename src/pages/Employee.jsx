import React from 'react';
import {Table} from "react-bootstrap";
import styled from "styled-components";


const StyledEmployee = styled.div`
  padding: 20px;
`

const Employee = () => {

    // const data = useEmployeeName(value)
    //
    // if (!data) return null;

    const value = '-' // заглушка
    const data = ['-','-'] // заглушка

    return (
        <StyledEmployee>
            <h3>Page employee (without React Router)</h3>
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
                    <td>{value ? value : '-'}</td>
                    <td>{data[0]}</td>
                    <td>{typeof(data[1]) == 'object'
                        ? data[1]['direct-subordinates'].map(subo => <ul key={subo}><li>{subo}</li></ul>)
                        : '-'}</td>
                </tr>
                </tbody>
            </Table>
        </StyledEmployee>
    );
};

export default Employee;