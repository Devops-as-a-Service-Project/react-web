import React from 'react';
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const KindCard = ({imageSource, cardTitle, cardDesc}) => {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageSource} style={{ height: '170px' }} />
            <Card.Body>
                <Card.Title className="text-center">{cardTitle}</Card.Title>
                <Card.Text className="text-center">
                    {cardDesc}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Project Name"
                        aria-label="Project Name"
                        aria-describedby="basic-addon1"
                        className="text-center"
                        pattern="^[\S][a-zA-Z0-9_-]+$"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Repository Name"
                        aria-label="Repository Name"
                        aria-describedby="basic-addon1"
                        className="text-center"
                        pattern="^[\S][a-zA-Z0-9_-]+$"
                    />
                </InputGroup>
                <Button variant="dark">Create</Button>
            </Card.Body>
        </Card>
    );
}

export default KindCard;