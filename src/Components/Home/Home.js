import React, { Component } from 'react';
import Highlights from '../Highlights/Highlights';
import Dashboard from '../Dashboard/Dashboard';
import Presentation from '../Presentation/Presentation';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Presentation />
                <Highlights />
                <Dashboard />
            </div>
        )
    }
}
