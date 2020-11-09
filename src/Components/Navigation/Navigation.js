
import FavouriteBusinesses from '../FavouriteBusinesses/FavouriteBusinesses';


import React, { Component } from "react";
import styles from "./Navigation.module.css";
import { Nav } from "react-bootstrap";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Home from "../Home/Home";
import NoMatch from "../NoMatch/NoMatch";
import Profile from "../Profile/Profile";
import Business from "../Business/Business";
import Login from "../Login/Login";
import Signin from "../Signin/Signin";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      session: { favourites: [] },
      isLogged: false
    };
  }

  componentDidMount() {
    axios.get("./posts.json").then((response) => {
      const posts = response.data.slice(0, 10);

      const updatedPosts = posts.map((post) => {
        return {
          id: post.id.toString(),
          name: post.name,
          highlighted: post.highlighted,
          sDescr: post.sDescr,
          lDescr: post.lDescr,
          img: post.img,
          rating: post.rating,
        };
      });

      this.setState({ posts: updatedPosts });
    });
  }


  login = (email, password) => {
    axios.get("./user.json").then((response) => {
      const session = response.data;
      console.log(session);
      if (email === session.email && password === session.password) {
        this.setState({ session: session, isLogged: true });
      } else {
        alert("El correo o la contraseña no coinciden.");
      }
    });
  };

  logStatusNav = () => {
    if (this.state.isLogged) {
      return (
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={Link} to="/">
            Our Market
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/profile">
                Mi Perfil
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Mis Pedidos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button
            className={`${styles.loginButton} mr-20`}
            variant="outline-danger"
            onClick={this.showModal}
          >
            Cerrar Sesión
          </Button>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={Link} to="/">
            Our Market
          </Navbar.Brand>
          <Button
            as={Link}
            to="/logIn"
            className={`${styles.button} ${styles.loginButton} mr-20`}
            variant="outline-warning"
            onClick={this.showModal}
          >
            Iniciar Sesión
          </Button>
          <Button
            as={Link}
            to="/signIn"
            className={`${styles.button} ${styles.signinButton} mr-20`}
            variant="outline-success"
            onClick={this.showModal}
          >
            Crear cuenta
          </Button>
        </Navbar>
      );
    }
  };

  render() {
    const routes = this.state.posts.map((bsn) => {
      return (
        <Route path={"/" + bsn.name.replace(/ /g, "-")}>
          <Business data={bsn} />
        </Route>
      );
    });

    return (
      <>
        {this.logStatusNav()}
        <Switch>
          <Route exact path="/">
            <Home posts={this.state.posts} />
          </Route>
          <Route path="/profile">
            <Profile user={this.state.session} todos={this.state.posts} />
          </Route>
          <Route path="/logIn" component = {Login} />
          <Route path="/signIn">
              <Signin login = {this.login} />
          </Route>
          <Route path='/favoritos'>
                        <FavouriteBusinesses/>
                    </Route>
          {routes}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </>
    );
  }
}
