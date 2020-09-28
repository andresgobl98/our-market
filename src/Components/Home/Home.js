import React, { Component } from 'react';
import Highlights from '../Highlights/Highlights';
import Dashboard from '../Dashboard/Dashboard';
import Presentation from '../Presentation/Presentation';

export default function Home(props) {

    const highArray = props.posts.filter(function (pst) {
        return pst.highlighted
    })
    return (
        <div>
            <Presentation />
            <Highlights highlights={highArray} />
            <Dashboard posts={props.posts} />
        </div>
    )

}
