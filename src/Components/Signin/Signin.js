import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    if (event.target.type === "email") {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.history.push('/');
  };

  clearInputs() {
    this.setState({ email: "", password: "" });
  }

  render() {
    return (
      <>
      <h3>Crear cuenta</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={this.state.email}
            placeholder="Ingrese su correo"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="Submit" onClick={this.handleSubmit}>
          Ingresar
        </Button>
      </Form>
      </>
    );
  }
}
