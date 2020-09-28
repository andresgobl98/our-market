import React, { Component } from 'react';
import Highlights from '../Highlights/Highlights';
import Dashboard from '../Dashboard/Dashboard';
import Presentation from '../Presentation/Presentation';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount () {
        axios.get('./posts.json') 
            .then(response => {
                const posts = response.data.slice(0,10);

                const updatedPosts = posts.map(post => {
                    return {
                        id: post.id.toString(),
                        name: post.name,
                        highlighted: post.highlighted,
                        sDescr: post.sDescr,
                        lDescr: post.lDescr,
                        img: post.img
                    }
                });

                this.setState({posts: updatedPosts})
            }); 
    }

    render() {
        const highArray = this.state.posts.filter(function (pst) {
            return pst.highlighted
        })
        return (
            <div>
                <Presentation />
                <Highlights highlights={highArray} />
                <Dashboard posts={this.state.posts} />
            </div>
        )
    }
}
