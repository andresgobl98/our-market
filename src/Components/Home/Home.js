import React, { Component } from 'react';
import Highlights from '../Highlights/Highlights';
import Dashboard from '../Dashboard/Dashboard';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Highlights />
                <Dashboard />
            </div>
        )
    }
}
