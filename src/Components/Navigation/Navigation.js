
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
import LogIn from "../Login/LogIn";
import SignUp from "../SignUp/SignUp";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as actionCreators from "../../store/actions/";

class Navigation extends Component {
  state = {
    posts: [],
    isLogged: this.props.isUserLoggedIn,
  };

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
    });
  }

  logStatusNav = () => {
    if (this.props.isUserLoggedIn) {
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
              <Nav.Link as={Link} to="/favoritos">
                Favoritos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button
            className={`${styles.loginButton} mr-20`}
            variant="outline-danger"
            onClick={this.props.onLogOut}
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
            to="/signUp"
            className={`${styles.button} ${styles.signupButton} mr-20`}
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
            <Route path="/logIn" component={LogIn} />
            <Route path='/favoritos'>
              <FavouriteBusinesses />
            </Route>
            <Route path="/signUp" component={SignUp} />
            <Route path="/empresas/:id" render={(props)=><Business {...props} />}>

            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    userLoggedIn: state.authenticationStore.userLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(actionCreators.logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
