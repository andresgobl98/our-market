import React from 'react';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Footer() {
    return (
        <div className = "footer">
            <Navbar bg="dark" variant="dark" expand="md">
                <Container className="justify-content-center">
                    <Row>
                        <Col sm="12">
                            <Navbar.Brand as={Link} to="/">Our Market</Navbar.Brand>
                            <Navbar.Collapse>
                                <Nav className="flex-column">
                                    <Nav.Link as={Link} to="/profile">Mi Perfil</Nav.Link>
                                    <Nav.Link as={Link} to="/orders">Mis Pedidos</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )
}

