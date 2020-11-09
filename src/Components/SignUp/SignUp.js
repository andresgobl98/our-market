import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './SignUp.css';

import * as actionCreators from "../../store/actions/";

class SignUp extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    userName: "",
    password: "",
   
  };

  /*componentDidUpdate() {
    if (this.state.isUserLoggedIn) {
      this.props.history.push("/");
    }
  }*/

  componentDidMount () {
    console.log(this.props)
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
    });
  }

  handleChange = (event, type) => {
    var updatedLoginInfo = {
        ...this.state
      }

      updatedLoginInfo[type] = event.target.value;

      this.setState({
        userName: updatedLoginInfo.userName,
        password: updatedLoginInfo.password
      });
  };

  handleSubmit = () => {
    const userData = {
        email: this.state.userName,
        password: this.state.password
    };

    this.props.onUserSignUp(userData, () => {
        this.props.history.push('/');
    });
  };

  render() {
    if(this.props.error) {
      var code = "Código de error :" + this.props.error.code;
      var message = this.props.error.message;
      var errorMessage = this.props.error.code !== undefined ? "" + code + " " + message:"Bienvenido a our market";
    }return (
      <>
        <h3>Crear cuenta</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              placeholder="Ingrese su email"
              onChange={(event) => {this.handleChange(event, 'userName')}}
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
              onChange={(event) => {this.handleChange(event, 'password')}}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Ingresar
          </Button>
          <h2  id="aviso"  className="error-msg">{errorMessage}</h2>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
      error: state.authenticationStore.error
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      onUserSignUp: (authData, onSuccessCallback) =>
      dispatch(actionCreators.signUp(authData, onSuccessCallback)),
      onClean: ()=> dispatch(actionCreators.reloadError)
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
