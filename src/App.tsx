import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Employee, Header, Home } from './components';

import { StyledContainer, StyledWrapper, theme } from './styled/_Global';
import store from './redux/store';

const App = () => (
    <ThemeProvider theme={theme}>
        <StyledWrapper>
            <Provider store={store}>
                <Router>
                    <Container fluid as={StyledContainer}>
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
                            <Redirect to={'/'}/>
                        </Switch>
                    </Container>
                </Router>
            </Provider>
        </StyledWrapper>
    </ThemeProvider>
);

export default App;
