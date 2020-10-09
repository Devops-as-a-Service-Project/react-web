import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';

const RESTAPIView = () => {

    const data = [
        { color: "#5DADE2", description: "Create NPM project", method: 'POST', path: '/create/npm/<project-name>' },
        { color: "#5DADE2", description: "Create PyPi project", method: 'POST', path: '/create/pypi/<project-name>' },
        { color: "#5DADE2", description: "Create Maven project", method: 'POST', path: '/create/maven/<project-name>' },
        { color: "#48C9B0", description: "Checks whether a project exists", method: 'GET', path: '/check/<project-name>' },
    ];

    return(
        
        <Container>
        {data.map((item => 
            <ListGroup key={item.path} className="my-2" style={ { 'padding': '20px' }}>
            <ListGroup.Item style={{ 'backgroundColor': item.color}}>
                <h2 style={ { 'margin': 'center'}}>{item.method}</h2> 
                <h6 style={ { 'margin': 'center'}}>{item.description}</h6> 
                <h4>{item.path}</h4>
            </ListGroup.Item>
            </ListGroup>
        ))}
        </Container>
    );
}

export default RESTAPIView;