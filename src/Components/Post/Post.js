import React from 'react';
import './Post.css';
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

const now = 60;

export default function Post(props) {
    return (
        <Col sm="6" md="4" lg="3">
            <Card>
                <Card.Img className="imagen" variant="top" src={require('../../Images/' + props.bImage)} />
                <Card.Body>
                    <Card.Title>{props.bName}</Card.Title>
                    <Card.Text>
                        {props.bDescr}
                    </Card.Text>
                    <span className="rating">Rating</span>
                    <ProgressBar now={now} label={`${now}%`} />
                    <br></br>
                    <Dropdown as={ButtonGroup}>
                        <Link to={props.bName.replace(/ /g,"-")}>
                            <Button variant="success">Ver Negocio</Button>
                        </Link>

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
    )
}
