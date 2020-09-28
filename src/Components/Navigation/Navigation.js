import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Business from '../Business/Business';
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
            posts: []
        }
    }

    componentDidMount () {
        axios.get('./posts.json') 
            .then(response => {
                const posts = response.data.slice(0,10);

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

                this.setState({posts: updatedPosts})
            }); 
    }

    render() {
        const routes = this.state.posts.map(bsn => {
            return (
                <Route path={'/' + bsn.name.replace(/ /g,"-")}>
                    <Business data={bsn} />
                </Route>
            )
        })

        return (
            <>
                <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand as={Link} to="/">Our Market</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/profile">Mi Perfil</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Mis Pedidos</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Empresa, producto, etc." className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path='/'>
                        <Home posts={this.state.posts} />
                    </Route>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    {routes}
                </Switch>
            </>
        )
    }
}
