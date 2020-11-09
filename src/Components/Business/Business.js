import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import styles from './Business.module.css';
import { connect } from 'react-redux';

import { useParams } from "react-router-dom";

class Business extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    renderBusiness(){
        const Data = {...this.props.posts[this.props.match.params.id]}
        return(<Container >
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <Row>
                    <img className={"imagenBusiness"} src={require('../../Images/' + Data.img)} width={"100%"}
                        height={500} />
                </Row>
                <h2 className={styles.bName}>{Data.name}</h2>
                <Row>
                    <h3 className={styles.bDescrTitle}>Descripción</h3>
                </Row>
                <Row>
                    <p className={styles.bDescr}>{Data.lDescr}</p>
                </Row>
                <Row>
                    <h2 className={styles.bRating}>Rating</h2>
                </Row>
                <ProgressBar now={Data.rating} label={`${Data.rating}%`} />
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
        </Container>)
    }
    render() {
        console.log(this.props)
        return (
            this.props.loading?<h1>Cargando</h1>:(this.renderBusiness()
            )
        )
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        posts: state.postStore.posts,
        loading: state.postStore.loading
    }
}

export default connect(mapStateToProps, null)(Business);

