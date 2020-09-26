import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Home/Home';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <Navbar bg="dark" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand as={Link} to="/">Our Market</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav.Link as={Link} to="/profile">Mi Perfil</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Mis Pedidos</Nav.Link>
                </Navbar.Collapse>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </>
    )
}
