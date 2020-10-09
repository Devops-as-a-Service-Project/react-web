import React from 'react';
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const KindCard = ({imageSource, cardTitle, cardDesc}) => {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageSource} />
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
                    />
                </InputGroup>
                <Button variant="dark">Create</Button>
            </Card.Body>
        </Card>
    );
}

export default KindCard;