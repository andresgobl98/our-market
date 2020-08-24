import React from 'react';
import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar-collapse">
            <ul className="ul">
                <li className="li-left"><a href="#">HOME</a></li>
                <li className="li-left"><a href="#">SOPORTE</a></li>
            </ul>
            <ul className="ul-right">
                <li className="li-right"><a href="https://www.youtube.com/watch?v=WUl9NPPMx8s">SALIR</a></li>
            </ul>
	    </div>
    );
}

export default Navbar;