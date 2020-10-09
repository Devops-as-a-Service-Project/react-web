import React from 'react';
import MainNavber from './components/MainNavbar'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
import CardsMenu from './components/CardsMenu';

function App() {
    return (
        <main>
            <Container fluid="true">
                <Row className="justify-content-md-left" style={{ 'padding': '40px'}}>
                    <MainNavber/>
                </Row>
                <CardsMenu/>
            </Container>
        </main>
    );
}

export default App;
