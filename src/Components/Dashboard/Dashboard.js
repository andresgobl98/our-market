import React, { Component } from 'react';
import Post from '../Post/Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class Dashboard extends Component {

    render() {
        const posts = this.props.posts.map(post => {
            return <Post key={post.id} bName={post.name} bDescr={post.sDescr} bImage={post.img} />
        })

        return (
            <div>
                <Container>
                    <Row>
                        {posts}
                    </Row>
                </Container>
            </div>
        )
    }
}

