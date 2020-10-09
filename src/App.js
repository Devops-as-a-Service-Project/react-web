import React from 'react';
import MainNavber from './components/MainNavbar'
import RESTAPIView from './components/RESTAPIView'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
import CardsMenu from './components/CardsMenu';
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <main>
            <Container fluid="true">
                <Row className="justify-content-md-left" style={{ 'padding': '40px'}}>
                    <MainNavber/>
                </Row>
                <Switch>
                    <Route path='/' component={CardsMenu} exact/>
                    <Route path='/create' component={CardsMenu}/>
                    <Route path='/rest-api' component={RESTAPIView}/>
                    <Route component={MainNavber}/>
                </Switch>
            </Container>
        </main>
    );
}

export default App;
