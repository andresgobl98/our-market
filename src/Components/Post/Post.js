import React from 'react';
import './Post.css';


import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

<<<<<<< HEAD
export default function Post(props) {
    console.log(props)
=======
const Post = (props) => {

    const addToFavs = () =>{
        props.post.favUsers.push(props.userLoggedIn.localId)
        let favs = [...props.post.favUsers]
        const newPost = {...props.post, favUsers:favs}
        props.onAddFavs(newPost,()=>{
            alert("Añadido!")
        })
        
    }


    const buttonType = () => {
        if (props.isUserLoggedIn) {
            return (<Dropdown as={ButtonGroup}>
                <Link to={'/Empresas/' + props.index}>
                    <Button variant="success">Ver Negocio</Button>
                </Link>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item onClick={addToFavs}>Añadir a favoritos</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>)
        }
        else {
            return (<Link to={'/Empresas/' + props.index}>
                <Button variant="success">Ver Negocio</Button>
            </Link>)
        }
    }

>>>>>>> origin/master
    return (
        
        <Col sm="6" md="4" lg="3">
            <Card>
<<<<<<< HEAD
=======
                <Card.Img className="imagen" variant="top" src={require('../../Images/' + props.post.img)} />
                <Card.Body>
                    <Card.Title>{props.post.name}</Card.Title>
                    <Card.Text>
                        {props.post.sDescr}
                    </Card.Text>
                    <span className="rating">Rating</span>
                    <ProgressBar now={props.post.rating} label={`${props.post.rating}%`} />
                    <br></br>
                    {buttonType()}
                </Card.Body>
>>>>>>> origin/master
            </Card>
        </Col>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFavs: (newPost, onSuccessCallback) =>dispatch(actionCreators.addFav(newPost, onSuccessCallback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
