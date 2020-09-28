import React, { Component } from 'react';
import './Highlights.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Highlights extends Component {
    render() {
        const items = this.props.highlights.map(item => {
            return (
                <Carousel.Item>
                    <img className="itemImg d-block w-100" src={require("../../Images/" + item.img)} />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.sDescr}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })

        return (
            <Container>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <Row>
                        <Col>
                            <Carousel>
                                {items}
                            </Carousel>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
