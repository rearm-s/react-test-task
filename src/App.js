import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import {Route, BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";

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
  border: 1px solid #333;
  height: 100vh;
`

function App() {
    return <>
        <Global/>
        <StyledWrapper>
            <Provider store={store}>
                <Router>
                    <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
                        <Row>
                            <Col><Header/></Col>
                        </Row>
                        <Route exact path="/">
                            <Row>
                                <Col><Home/></Col>
                            </Row>
                        </Route>
                        <Route path="/employee/:name">
                            <Row>
                                <Col><Employee/></Col>
                            </Row>
                        </Route>
                    </Container>
                </Router>
            </Provider>
        </StyledWrapper>
    </>
}

export default App;
