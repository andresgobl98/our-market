import React from 'react'
import styles from './NoMatch.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function NoMatch() {
    return (
        <Jumbotron>
            <Container>
                <Row className="justify-content-center align-items-center flex-column">
                    <img className={styles.question} src={require('../../Images/questionMark.png')} />
                    <h1>404</h1>
                    <h1>¡Oops!</h1>
                    <h3>Parece que estás perdido, da un pequeño respiro y regresa al inicio.</h3>
                    <Link to="/">
                        <Button variant="success">Regresar a Home</Button>
                    </Link>
                </Row>
            </Container>
        </Jumbotron>
    )
}
