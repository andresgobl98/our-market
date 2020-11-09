import React, { Component } from 'react';
import { connect } from 'react-redux';

import Favourite from '../FavouritePost/FavouritePost';
import Container from 'react-bootstrap/Container';

import * as actionCreators from '../../store/actions/';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import axiosFireBase from '../../instances/axios-posts';
import FavoritePost from '../FavouritePost/FavouritePost';
import Spiner from '../Spinner/Spinner';

class FavouriteBusinesses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favoritos: [],
            cargando: true
        }
    }

    componentDidMount() {
        axiosFireBase.get('favoritos.json')
            .then(response => {
                const dataFavoritos = response.data;
                let newFavoritos = [];
                for (const key in dataFavoritos) {
                    if (dataFavoritos[key])
                        newFavoritos.push(dataFavoritos[key]);
                }
                this.setState({ favoritos: newFavoritos, cargando: false })
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    }

    render() {
        //const favourites = this.props.favourites.map(favourite => {
        //    return <Favourite key={favourite.id} bName={favourite.name} bDescr={favourite.sDescr} bImage={favourite.img} rating={favourite.rating} />
        //})
        return (
            <div>
                <Container>
                    <Row className="my-4">
                        {
                            this.state.cargando ? <Spiner></Spiner> :
                                this.state.favoritos.map(f => {

                                    return <FavoritePost
                                        key={f.id}
                                        bNameFav={f.name}
                                        bDescrFav={f.sDescr}
                                        bImageFav={f.img}
                                        ratingFav={f.rating}

                                    />

                                })}
                    </Row>
                </Container>
            </div>
        )
    }
}


/* const mapStateToProps = state => {
    return {
        favos: state.favsStore.favs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadFavPosts: (post) => dispatch(actionCreators.savePost(post)),
        onFetchPosts: () => dispatch(actionCreators.fetchPosts()),
        onLogOut: () => dispatch(actionCreators.logOut())
    }
}
 */
//export default connect(mapStateToProps, mapDispatchToProps)(FavouriteBusinesses);
export default FavouriteBusinesses;