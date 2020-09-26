import React, { Component } from 'react';
import Post from './Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            posts: [{name: "lkasdjf", descr: "kjafgañskf", img: "old-lady.jpg"},
            {name: "lkasdjf", descr: "kjafgañskf", img: "old-lady.jpg"},
            {name: "lkasdjf", descr: "kjafgañskf", img: "old-lady.jpg"},
            {name: "lkasdjf", descr: "kjafgañskf", img: "old-lady.jpg"},
            {name: "lkasdjf", descr: "kjafgañskf", img: "old-lady.jpg"},
            {name: "lkasdjf", descr: "kjafgañskf", img: "old-lady.jpg"},
            {name: "lkasdjf", descr: "kjafgañskf", img: "old-lady.jpg"}]
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

