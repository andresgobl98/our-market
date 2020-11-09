import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";

import * as actionCreators from "../../store/actions/";

import Row from "react-bootstrap/Row";

import axiosFireBase from "../../instances/axios-posts";
import FavoritePost from "../FavouritePost/FavouritePost";
import Spiner from "../Spinner/Spinner";

class FavouriteBusinesses extends Component {
  state = {
    favoritos: [],
  };

  componentWillReceiveProps(nextState) {
    this.setState({
      posts: nextState.posts,
    });
  }

  componentDidMount() {
    axiosFireBase
      .get("favoritos.json")
      .then((response) => {
        const dataFavoritos = response.data;
        let newFavoritos = [];
        for (const key in dataFavoritos) {
          if (dataFavoritos[key]) newFavoritos.push(dataFavoritos[key]);
        }
        this.setState({ favoritos: newFavoritos, cargando: false });
      })
      .catch((errorObj) => {
        console.log(errorObj);
      });
  }

  componentDidMount() {
    this.props.onFetchPosts();
  }

  filtrarFavoritos() {
    console.log(this.props.userLoggedIn);
    let favoritos = [];
    if (this.props.posts) {
      for (let i = 1; i < this.props.posts.length; i++) {
        for (let j = 0; j < this.props.posts[i].favUsers.length; j++) {
          if (
            this.props.posts[i].favUsers[j] === this.props.userLoggedIn.localId
          ) {
            console.log(this.props.posts[i]);
            favoritos.push(this.props.posts[i]);
          }
        }
      }
    }
    return favoritos;
  }

  render() {
    let favoritos = this.filtrarFavoritos();
    console.log(favoritos);
    return (
      <div>
        <Container>
          <Row className="my-4">
            {this.props.loading ? (
              <Spiner></Spiner>
            ) : (
              this.filtrarFavoritos().map((f) => {
                return (
                  <FavoritePost
                    key={f.id}
                    bNameFav={f.name}
                    bDescrFav={f.sDescr}
                    bImageFav={f.img}
                    ratingFav={f.rating}
                    bLongDescripFav={f.lDescr}
                  />
                );
              })
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    userLoggedIn: state.authenticationStore.userLoggedIn,
    posts: state.postStore.posts,
    loading: state.postStore.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(actionCreators.fetchPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteBusinesses);
