import React from 'react';
import {Table} from "react-bootstrap";
import {useEmployeeName} from "../hooks/useEmployeeName";

const Employee = () => {

    // const data = useEmployeeName(value)
    //
    // if (!data) return null;

    return ( <></>
        // <Table striped bordered hover>
        //     <thead>
        //     <tr>
        //         <th>Name</th>
        //         <th>Position</th>
        //         <th>Subordinates</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     <tr>
        //         <td>{value ? value : '-'}</td>
        //         <td>{data[0]}</td>
        //         <td>{typeof(data[1]) == 'object'
        //             ? data[1]['direct-subordinates'].map(subo => <ul key={subo}><li>{subo}</li></ul>)
        //             : '-'}</td>
        //     </tr>
        //     </tbody>
        // </Table>
    );
};

export default Employee;