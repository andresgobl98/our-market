import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const now = 60;


export default class Business extends Component {

    constructor(props) {
        super(props)
        console.log(window.location.pathname.split("-")[1])
        this.state = {
            id: parseInt(window.location.pathname.split("-")[1])-1,
            businesses: []
        }
    }

    componentDidMount () {
        axios.get('./businesses.json') 
            .then(response => {
                const businesses = response.data.slice(0,8);
                console.log(businesses)
                console.log(businesses[this.state.id])
                const updatedBusinesses = businesses.map(business => {
                    return {
                        name: business.name,
                        descr: business.descr,
                        scope: business.scope,
                        img: business.img
                    }
                });

                this.setState({businesses: updatedBusinesses})
            }); 
    }
    returnIndexBusiness=() => this.state.id;

    render() {
        console.log(this.state.businesses[this.state.id] &&this.state.businesses[this.state.id].descr)
        return (
            <Container >
                <Row>
                    <img className="imagenBusiness" src={require('../../Images/computador.jpg')} width={1160}
                        height={500} />
                </Row>
        <h2 className="bName">{this.state.businesses[this.state.id] &&this.state.businesses[this.state.id].name}</h2>
                <h3>Enfoque</h3>
                <p className="bDescr">{this.state.businesses[this.state.id] &&this.state.businesses[this.state.id].descr}</p>
                <span className="rating">Rating</span>
                <ProgressBar now={this.state.businesses[this.state.id] &&this.state.businesses[this.state.id].scope} label={`${this.state.businesses[this.state.id] &&this.state.businesses[this.state.id].scope}%`} />
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
