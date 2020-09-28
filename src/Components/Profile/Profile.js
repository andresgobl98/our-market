import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Profile.css';

const now = 60;
export default class Profile extends Component {


  render() {
    console.log(this.props.user)
    return (

      <Container>
        <Jumbotron fluid>
          <Container>
            <h1 className="Titulo">Mi perfil</h1>
            <p>
              Bienvenido a tu perfil de ourMarket
            </p>
          </Container>
        </Jumbotron>

        <Row>
          <Col className="mr-2" sm="6" md="4" lg="3">
            <Image className="imagen" src={require('../../Images/old-lady.jpg')} rounded />
          </Col>
          <Col className="mr-5" sm="50" md="80" lg="90">
            <ul className= "Lista">
              <li>Nombre:</li>
              <li>Apellido:</li>
              <li>Telefono:</li>
              <li>Direccion:</li>
              <li>email:</li>
            </ul>
          </Col>
          <Col sm="50" md="80" lg="90">
          <ul>
              <li>Usuario</li>
              <li>De prueba</li>
              <li>00000000</li>
              <li>Casa lejana</li>
              <li>usuario@deprueba.com</li>
            </ul>
          </Col>
        </Row>
       <Row>
        <Col sm="6" md="4" lg="3">
            <Card>
                <Card.Img className="imagen" variant="top" src={require('../../Images/computador.jpg')} />
                <Card.Body>
                    <Card.Title>{"Negocio 1"}</Card.Title>
                    <Card.Text>
                        {"Negocio de..."}
                    </Card.Text>
                    <span className="rating">Rating</span>
                    <ProgressBar now={now} label={`${now}%`} />
                    <br></br>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="success">Ver Negocio</Button>

                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Añadir a favoritos</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Añadir a ver más tarde</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Ocultar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </Card.Body>
            </Card>
        </Col>
        </Row>
      </Container>
    )
  }
}
