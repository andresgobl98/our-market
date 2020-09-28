import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const now = 60;

export default class Business extends Component {
    render() {
        return (
            <Container >
                <Row>
                    <img className="imagenBusiness" src={require('../../Images/computador.jpg')} width={1160}
                        height={500} />
                </Row>
                <h2 className="bName">Nombre del negocio</h2>
                <h3>Enfoque</h3>
                <p className="bDescr">Descripción del negocio</p>
                <span className="rating">Rating</span>
                <ProgressBar now={now} label={`${now}%`} />
                <h3>Productos</h3>
                <Row className="justify-content-center">
                    <Col sm='6'>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Inquietud</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
