import React from 'react';
import styled from 'styled-components';
import {Container, Nav, Navbar} from "react-bootstrap";



const Header = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Search employee</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/employees">Employees</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default Header;