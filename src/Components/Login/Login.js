import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import * as actionCreators from "../../store/actions";

class LogIn extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    userName: "",
    password: "",
  };

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
    });
  }

  handleChange = (event, type) => {
    var updatedLoginInfo = {
      ...this.state,
    };

    updatedLoginInfo[type] = event.target.value;

    this.setState({
      userName: updatedLoginInfo.userName,
      password: updatedLoginInfo.password,
    });
  };

  handleSubmit = () => {
    const userData = {
      email: this.state.userName,
      password: this.state.password,
    };

    this.props.onUserLogin(userData, () => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <>
        <h3>Iniciar Sesión</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              placeholder="Ingrese su email"
              onChange={(event) => {
                this.handleChange(event, "userName");
              }}
            />
            <Form.Text className="text-muted">
              No compartiremos tu e-mail con nadie.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={this.state.password}
              placeholder="Contraseña"
              onChange={(event) => {
                this.handleChange(event, "password");
              }}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Ingresar
          </Button>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (authData, onSuccessCallback) =>
      dispatch(actionCreators.logIn(authData, onSuccessCallback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
