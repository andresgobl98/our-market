import React from 'react';
import './styles/Post.css';

function Post(){
    return(
        <div className="post">
            <div className="imgCont">Imagen del negocio</div>
            <div className="description">
                <h3>Nombre de Negocio</h3>
                <p>Descripción del negocio</p>
                <span>Calificación</span>
            </div>
        </div>
    );
}

export default Post;