import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
import './Profile.css';

const now = 60;
export default class Profile extends Component {

  render() {
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
        
        <Jumbotron fluid>
          <Container>
            <h1 className="Titulo">Mis negocios favoritos</h1>
          </Container>
        </Jumbotron>
      </Container>
    )
  }
}
