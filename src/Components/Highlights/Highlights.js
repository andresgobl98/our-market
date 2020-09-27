import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Highlights extends Component {
    render() {
        return (
            <Container>
                <div class="shadow-lg p-3 mb-5 bg-white rounded">
                    <Row>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={require("../../Images/reloj.jpg")} />
                                    <Carousel.Caption>
                                        <h3>BUSINESS TOP 1</h3>
                                        <p>Description 1</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img className="d-block w-100" src={require("../../Images/money.jpg")} />
                                    <Carousel.Caption>
                                        <h3>BUSINESS TOP 2</h3>
                                        <p>Description 2</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img className="d-block w-100" src={require("../../Images/computador.jpg")} />
                                    <Carousel.Caption>
                                        <h3>BUSINESS TOP 3</h3>
                                        <p>Description 3</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>

                    </Row>
                </div>
            </Container>
        )
    }
}
