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
    return (
        <Container>
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <Col sm="6" md="4" lg="3">
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
                            <Dropdown as={ButtonGroup}>
                                <Link to={props.bNameFav.replace(/ /g, "-")}>
                                    <Button variant="success">Ver Negocio</Button>
                                </Link>

                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            </Dropdown>

                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                {props.bDescrFav}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                    
            </div>

        </Container>
    )
}
