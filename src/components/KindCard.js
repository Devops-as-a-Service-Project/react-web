import React from 'react';
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Emoji from './Emoji';

const KindCard = ({imageSource, cardTitle, cardDesc}) => {


    const [data, setData] = React.useState({
        projectName: '',
        repositoryName: '',
    });

    const [isValid, setIsValid] = React.useState (true);

    const [isError, setIsError] = React.useState (false);

    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const validateForm = () => {
        let valid = true;
        Object.values(data).forEach(
            (val) => val.length > 0 || (valid = false)
        );
        setIsValid(valid);
        return valid;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'projectName':
                setData({
                    projectName: value,
                    repositoryName: data.repositoryName,
                });
                break;
            case 'repositoryName':
                setData({
                    projectName: data.projectName,
                    repositoryName: value,
                });
                break;
            default:
                break;
        }
    }


    const handleClick = async (event) => {

        console.log(isValid)

        if (!validateForm()) {
            setIsSubmitted(false)
        } else {
            console.log(isValid)
            const response = await fetch("/create/npm/" + data.projectName + "/" + data.repositoryName, {
                method: "POST",
                headers: {
                "Content_Type": "application/json"
                }
            })
            if (response.ok) {
                setIsSubmitted(true);
                setIsError(true);
                console.log("Response Worked! ");
                console.log(JSON.stringify(response.url));
                console.log(response);
                // setTitle("We found your favorite book!")
            }
            else {
                setIsError(true);
                setIsSubmitted(false);
                console.log("Response Didn't Worked...")
                console.log(response);
                // setTitle("We did not find this title. Please try again!")
            }
        }
    }

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
                        name = "projectName"
                        placeholder="Project Name"
                        aria-label="Project Name"
                        aria-describedby="basic-addon1"
                        className="text-center"
                        pattern="^[\S][a-zA-Z0-9_-]+$"
                        onChange={handleChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        name = "repositoryName"
                        placeholder="Repository Name"
                        aria-label="Repository Name"
                        aria-describedby="basic-addon1"
                        className="text-center"
                        pattern="^[\S][a-zA-Z0-9_-]+$"
                        onChange={handleChange}
                    />
                </InputGroup>
                {(!isValid) ? <p className="form-status">Form is invalid <Emoji symbol="❌" label="error"/></p> : ''}
                {isSubmitted ? <p className="form-status">Request Succeeded <Emoji symbol="✅" label="success"/></p> : ''}
                {isError ? <p className="form-status">Request Failed <Emoji symbol="❌" label="error"/></p> : ''}
                <Button variant="dark" onClick={handleClick}>Create</Button>
            </Card.Body>
        </Card>
    );
} 

export default KindCard;