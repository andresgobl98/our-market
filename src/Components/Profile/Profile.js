import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Post from '../Post/Post'
import './Profile.css';
import Favourite from '../FavouritePost/FavouritePost';

export default class Profile extends Component {

constructor(){
  super()
}
  

  renderFavPosts = () => {
    let content = <Favourite favaourites = {this.state.post}/>;
    return content;
  }

  render() {
      console.log(this.props.todos)
      console.log(this.props.user.favourites)
    
      let filtro = this.props.todos.filter(post=> this.props.user.favourites.includes(Number(post.id)))
      console.log(filtro)
      let nuevo=filtro.map(post => {
     return(<Post key={post.id} bName={post.name}  bDescr={post.sDescr}  bImage={post.img}  rating={post.rating} /> )
      })

  

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
              <li>Edad:</li>
              <li>Direccion:</li>
              <li>email:</li>
            </ul>
          </Col>
          <Col sm="50" md="80" lg="90">
          <ul>
              <li>{this.props.user.firstName}</li>
              <li>{this.props.user.lastName}</li>
              <li>{this.props.user.age}</li>
              <li>{this.props.user.address}</li>
              <li>{this.props.user.email}</li>
            </ul>
          </Col>
        </Row>
        
        <Jumbotron fluid>
          <Container>
            <h1 className="Titulo">Mis negocios favoritos</h1>
          </Container>
        </Jumbotron>
        <Container>
                    <Row className="justify-content-center">
                        {nuevo}
                    </Row>
                </Container>
      </Container>
    )
  }
}
