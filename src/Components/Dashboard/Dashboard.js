import React, { Component } from 'react';
import Post from '../Post/Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            posts: [{ name: "Business 0", descr: "Description", img: "old-lady.jpg" },
            { name: "Business 1", descr: "Description ", img: "old-lady.jpg" },
            { name: "Business 2", descr: "Description", img: "old-lady.jpg" },
            { name: "Business 3", descr: "Description", img: "old-lady.jpg" },
            { name: "Business 4", descr: "Description", img: "old-lady.jpg" },
            { name: "Business 5", descr: "Description", img: "old-lady.jpg" },
            { name: "Business 6", descr: "Description", img: "old-lady.jpg" }]
        }
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post bName={post.name} bDescr={post.descr} bImage={post.img} />
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

