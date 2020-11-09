import React, { Component } from 'react'
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Post from '../Post/Post'
import './Profile.css';
import Favourite from '../FavouritePost/FavouritePost';

import * as actionCreators from '../../store/actions/';

class Profile extends Component {

  constructor() {
    super()
  }


  renderFavPosts = () => {
    let content = <Favourite favaourites={this.state.post} />;
    return content;
  }

  componentDidMount() {
    this.props.onFetchPosts();
  }

  componentWillReceiveProps(nextState) {
    this.setState({
        posts: nextState.posts,
    });
}

filtrarFavoritos() {
  console.log(this.props.userLoggedIn)
  let favoritos = []
  if (this.props.posts) {
      for (let i = 1; i < this.props.posts.length; i++) {
          for (let j = 0; j < this.props.posts[i].favUsers.length; j++) {
              if (this.props.posts[i].favUsers[j] === this.props.userLoggedIn.localId) {
                  console.log(this.props.posts[i])
                  favoritos.push(this.props.posts[i])
              }
          }
      }

  }
  return favoritos
}

  render() {
    console.log(this.props.todos)

    let filtro = this.props.todos.filter(post => this.props.user.favourites.includes(Number(post.id)))
    console.log(filtro)
    let nuevo = this.filtrarFavoritos().map((post,index) => {
      return (<Post index={post.id} post={post} />)
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
            <ul className="Lista">
              <li>Nombre:</li>
            </ul>
          </Col>
          <Col sm="50" md="80" lg="90">
            <ul>
              <li>{this.props.userLoggedIn.userName}</li>
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    userLoggedIn: state.authenticationStore.userLoggedIn,
    posts: state.postStore.posts,
    loading: state.postStore.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(actionCreators.fetchPosts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
