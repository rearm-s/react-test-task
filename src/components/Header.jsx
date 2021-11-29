import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>Search employee</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
);

export default Header;
