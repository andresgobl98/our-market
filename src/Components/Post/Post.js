import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function Post(props) {
    return (
        <Col sm="6" md="4" lg="3">
            <Card>
                <Card.Img variant="top" src={require('../../Images/' + props.bImage)} />
                <Card.Body>
                    <Card.Title>{props.bName}</Card.Title>
                    <Card.Text>
                        {props.bDescr}
                    </Card.Text>
                    <Button variant="success">Ver vendedor!</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
