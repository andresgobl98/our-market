import React from 'react'
import './styles/App.css';
import Post from './Post.js'
import Slider from './Slider.js'

function App() {
    return (
        <>
        <div className="navbar-collapse">
            <ul className="ul">
                <li className="li-left"><a href="#">HOME</a></li>
                <li className="li-left"><a href="#">SOPORTE</a></li>
            </ul>
            <ul className="ul-right">
                <li className="li-right"><a href="https://www.youtube.com/watch?v=WUl9NPPMx8s">SALIR</a></li>
            </ul>
	    </div>
        <Slider />
        <div className="dashboard">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
        </>
    );
}

export default App;