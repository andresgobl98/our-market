import axios from "axios";
import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import * as actionCreators from "../../store/actions/";
import Business from "../Business/Business";
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import NoMatch from "../NoMatch/NoMatch";
import Profile from "../Profile/Profile";
import SignUp from "../SignUp/SignUp";
import styles from "./Navigation.module.css";




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
              <Nav.Link as={Link} to="/orders">
                Mis Pedidos
              </Nav.Link>
              <Nav.Link as={Link} to="/favoritos">
                Mis Negocios favoritos
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
    console.log(this.state.isLogged);
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
          <Route path="/logIn" component={LogIn} />
          <Route path="/signUp" component={SignUp} />
          {routes}
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
    userLoggedIn: state.authenticationStore.userLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(actionCreators.logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
