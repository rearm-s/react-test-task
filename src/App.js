import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import Employee from "./components/Employee";
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {Global, StyledWrapper} from "./StyledApp";


function App() {
    return <>
        <Global/>
        <Router>
            <StyledWrapper>
                <Provider store={store}>
                    <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
                        <Row>
                            <Col><Header/></Col>
                        </Row>
                        <Switch>
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
                            <Redirect to={"/"} />
                        </Switch>
                    </Container>
                </Provider>
            </StyledWrapper>
        </Router>
    </>
}

export default App;
