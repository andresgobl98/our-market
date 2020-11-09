import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./SignUp.module.css";

import * as actionCreators from "../../store/actions/";

class SignUp extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    userName: "",
    password: "",
  };

  componentDidMount() {
    this.props.onClean();
  }

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

    this.props.onUserSignUp(userData, () => {
      this.props.history.push("/");
    });
  };

  displayError = (input) => {
    var { code, message } = this.props.errorMessage;

    if (this.props.errorMessage.code !== undefined) {
      if (message === "INVALID_EMAIL" || message === "EMAIL_EXISTS") {
        if (input === "email") {
          return (
            <span className={styles.error}>{`Error ${code}: ${message}`}</span>
          );
        }
      } else {
        if (input === "password") {
          return (
            <span className={styles.error}>{`Error ${code}: ${message}`}</span>
          );
        }
      }
    }
  };

  render() {
    return (
      <>
        <Form>
          <h3>Crear cuenta</h3>
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
            {this.displayError("email")}
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
            {this.displayError("password")}
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
    errorMessage: state.authenticationStore.errMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserSignUp: (authData, onSuccessCallback) =>
      dispatch(actionCreators.signUp(authData, onSuccessCallback)),
    onClean: () => dispatch(actionCreators.cleanError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
