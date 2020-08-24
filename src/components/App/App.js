import React from 'react'
import './App.css';
import Post from '../Post/Post.js'
import Slider from '../Slider/Slider.js'
import Navbar from '../Navbar/Navbar.js'

function App() {
    return (
        <>
        <Navbar />
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