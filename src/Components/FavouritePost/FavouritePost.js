import React from 'react';
import './Favourite.css';
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
import { Container } from 'react-bootstrap';

export default function Favourite(props) {
    console.log("refrdggggggggggggggggggggg")
    console.log(props)
    return (
        <Container>
            <div className="shadow-lg p-3 mb-5 bg-white rounded favorito">
                <Col className="colFav" sm="12" md="4">
                    <Card>
                        <Card.Img className="imagenFav" variant="top" src={require('../../Images/' + props.bImageFav)} />
                        <Card.Body>
                            <Card.Title>{props.bNameFav}</Card.Title>
                            <Card.Text>
                                {props.bDescrFav}
                            </Card.Text>
                            <span className="ratingFav">Rating</span>
                            <ProgressBar now={props.ratingFav} label={`${props.ratingFav}%`} />
                            <br></br>

                        </Card.Body>
                    </Card>
                </Col>
                <Col className="colFav" sm="12" md="7">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                {props.bLongDescripFav}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

            </div>

        </Container>
    )
}
