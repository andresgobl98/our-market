import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import styles from './Business.module.css';

export default class Business extends Component {
    render() {
        return (
            <Container >
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <Row>
                        <img className={"imagenBusiness"} src={require('../../Images/' + this.props.data.img)} width={"100%"}
                            height={500} />
                    </Row>
                    <h2 className={styles.bName}>{this.props.data.name}</h2>
                    <Row>
                        <h3 className={styles.bDescrTitle}>Descripción</h3>
                    </Row>
                    <Row>
                        <p className={styles.bDescr}>{this.props.data.lDescr}</p>
                    </Row>
                    <Row>
                        <h2 className={styles.bRating}>Rating</h2>
                    </Row>
                    <ProgressBar now={this.props.data.rating} label={`${this.props.data.rating}%`} />
                    <br></br><br></br>
                    <Row className="justify-content-center">
                        <Col sm='6'>


                            <Form>
                                <ul className={styles.bForm}>
                                    <li className={styles.bLi}>
                                        <h3>Contáctelos</h3>
                                    </li>
                                </ul>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <ul className={styles.bForm}>

                                        <li className={styles.bLi}>
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" /></li></ul>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <ul className={styles.bForm}>
                                        <li className={styles.bLi}>
                                            <Form.Label>Inquietud</Form.Label>
                                            <Form.Control as="textarea" rows="3" /></li></ul>
                                </Form.Group>

                            </Form>

                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
