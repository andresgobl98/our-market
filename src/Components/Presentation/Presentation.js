import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default class Presentation extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>¡Bienvenidos a Our-Market!</h1>
                <p>
                    Our-Market es tú negocio, nuestro negocio. Aquí podrás encontrar una gran variedad de negocios
                    de diferente tipo para cada uno de los gustos los consumidores.
                    Puedes añadir tu negocio aquí o, si eres consumidor, buscar tu negocio favorito y contactarlo,
                    ver su rating, algunos comentarios de otras personas e información de este.
                </p>
                <p>
                    <Button variant="primary">Contáctenos</Button>
                </p>
            </Jumbotron>
        )
    }
}
