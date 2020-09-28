import React, { Component } from 'react';
import styles from './Navigation.module.css';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Business from '../Business/Business';
import Login from '../Login/Login';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class Navigation extends Component {
    constructor() {
        super()

        this.state = {
            posts: [],
            session: {},
            isLogged: false,
            showLogin: false
        }
    }

    componentDidMount() {
        axios.get('./posts.json')
            .then(response => {
                const posts = response.data.slice(0, 10);

                const updatedPosts = posts.map(post => {
                    return {
                        id: post.id.toString(),
                        name: post.name,
                        highlighted: post.highlighted,
                        sDescr: post.sDescr,
                        lDescr: post.lDescr,
                        img: post.img,
                        rating: post.rating
                    }
                });

                this.setState({ posts: updatedPosts })
            });
    }

    showModal = () => {
        if (this.state.showLogin) {
            this.setState({ showLogin: false })
        } else {
            this.setState({ showLogin: true })
        }
    }

    login = (email, password) => {
        axios.get('./user.json')
            .then(response => {
                const session = response.data;
                console.log(session)
                if (email === session.email && password === session.password) {
                    this.setState({ session: session, isLogged: true })
                } else {
                    alert("El correo o la contraseña no coinciden.")
                }
            });
    }

    render() {
        const routes = this.state.posts.map(bsn => {
            return (
                <Route path={'/' + bsn.name.replace(/ /g, "-")}>
                    <Business data={bsn} />
                </Route>
            )
        })

        const logLinks = () => {
            if (this.state.isLogged) {
                return (
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/profile">Mi Perfil</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Mis Pedidos</Nav.Link>
                        </Nav>
                        <Form inline className={styles.form}>
                            <FormControl type="text" placeholder="Empresa, producto, etc." className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                )
            } else {
                return (
                    <Navbar.Collapse>
                        <Form inline className={styles.form}>
                            <FormControl type="text" placeholder="Empresa, producto, etc." className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                )
            }
        }


        return (
            <>
                <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand as={Link} to="/">Our Market</Navbar.Brand>
                    {logLinks()}
                    <Button className={`${styles.loginButton} mr-20`} variant="outline-warning" onClick={this.showModal}>Iniciar Sesión</Button>
                </Navbar>
                <Switch>
                    <Route exact path='/'>
                        <Home posts={this.state.posts} />
                    </Route>
                    <Route path='/profile'>
                        <Profile user={this.state.session} />
                    </Route>
                    {routes}
                </Switch>
                <Login show={this.state.showLogin} changeShow={this.showModal} login={this.login} />
            </>
        )
    }
}
