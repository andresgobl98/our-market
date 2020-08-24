import React from 'react'
import './styles/Slider.css';



function Slider() {
    const Negocio = props => (
        <div className='negocio'><br></br><br></br><br></br>
            <h1>Negocio: {props.name} </h1>
            <h1>Sector: {props.enfoque}</h1><em></em>
        </div>
    );

    const negociosNombres = ['Los Ocarros','Kamox','BmX4Life','Meninos'];
    const negociosSectores = ['Insumos','Plásticos','Bicicletas','Veterinaria'];
    let negocios = [];
    for(let i in negociosNombres){
        negocios.push(<Negocio name={negociosNombres[i]} 
        enfoque={negociosSectores[i]}></Negocio>);
    }
    console.log(negocios);
    /* const negocios = negociosNombres.map(name => (
    <Negocio name={name} enfoque='XD'></Negocio>));
    negociosSectores.map(enfoque =>(
    <Negocio>enfoque={enfoque}</Negocio>
    )); */
    
    return (
        <div className="slider">
			<ul>
                 
				<li>
                    {negocios[0]}
                </li>

                <li>
                    {negocios[1]}    
                </li>

                <li>
                    {negocios[2]}
                </li>

                <li>
                    {negocios[3]}
                </li>

			</ul>
		</div>
    );
}

export default Slider