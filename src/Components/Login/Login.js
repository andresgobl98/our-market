import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        if (event.target.type === "email") {
            this.setState({email: event.target.value});
        } else {
            this.setState({password: event.target.value});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.email === '' || this.state.password === '') {
            alert('Llene todos los campos')
        } else {
          this.props.login(this.state.email, this.state.password);
          this.clearInputs();
          this.props.changeShow();
        }
    }

    clearInputs() {
        this.setState({email: '', password: ''});
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.changeShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio de Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={this.state.email} placeholder="Ingrese su correo" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                No compartiremos tu e-mail con nadie.
                                </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" value={this.state.password} placeholder="Contraseña" onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="Submit" onClick={this.handleSubmit}>
                            Ingresar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
