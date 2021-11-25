import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Home from "./pages/Home";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

function App() {
    return <>
        <Global />
        <StyledWrapper>
            <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    <Col><Header /></Col>
                </Row>
                <Row>
                    <Col><Home /></Col>
                </Row>
            </Container>
        </StyledWrapper>
    </>
}

export default App;