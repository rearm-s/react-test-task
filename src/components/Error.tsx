import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = (): JSX.Element => (
    <Alert variant="danger">
        Please type correct name of employee!
    </Alert>
);

export default Error;
