import React from 'react';
import './Post.css';

function Post(){
    return(
        <div className="post">
            <div className="imgCont"></div>
            <div className="description">
                <h3>Nombre de Negocio</h3>
                <p>Descripción del negocio</p>
                <span>Calificación</span>
            </div>
        </div>
    );
}

export default Post;