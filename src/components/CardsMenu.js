import React from 'react';
import { Container } from 'react-bootstrap';
import KindCard from './KindCard';
import CardColumns from 'react-bootstrap/CardColumns'
import npmImage from '../images/npm-logo.jpeg'
import pythonImage from '../images/python-logo.png'
import mavenImage from '../images/maven-logo.png'

const CardsMenu = () => {

    const cards = [
        { image: npmImage, title: 'NPM', desc: 'Nodejs application with NPM.'},
        { image: pythonImage, title: 'Python', desc: 'Python application with PyPi.'},
        { image: mavenImage, title: 'Maven', desc: 'Java application with Maven.'},
    ]

    return(
        <Container>
            <CardColumns className="justify-content-md-center">
                {cards.map((item => 
                    <KindCard key={item.title} imageSource={item.image} cardTitle={item.title} cardDesc={item.desc} />
                ))}
            </CardColumns>
        </Container>
    );
}

export default CardsMenu;