import React from 'react'
import './Slider.css';



function Slider() {
    const Negocio = props => (
        <div className='negocio'>
            <div className='imagen'></div>
            <div className='descripcion'>
                <h1>{props.name} </h1>
                <h2>Sector: </h2><em>{props.enfoque}</em>
                <h2>Sobre el negocio:</h2><p>{props.info}</p>
            </div>
        </div>
    );

    const nuevaPrueba = []

    const negociosNombres = ['Los Ocarros','Kamox','BmX4Life','Meninos'];
    const negociosSectores = ['Insumos','Plásticos','Bicicletas','Veterinaria'];
    const negociosDescripciones = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet. Aliquet nibh praesent tristique magna sit amet purus. Pharetra massa massa ultricies mi quis hendrerit. Proin nibh nisl condimentum id venenatis a condimentum vitae. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Tortor dignissim convallis aenean et tortor. Sit amet volutpat consequat mauris nunc congue nisi. Mattis nunc sed blandit libero volutpat sed. Pulvinar proin gravida hendrerit lectus. Tincidunt dui ut ornare lectus sit amet est placerat. Aliquam sem et tortor consequat id porta. In hac habitasse platea dictumst. Diam ut venenatis tellus in metus vulputate eu scelerisque.','Est sit amet facilisis magna etiam. Massa sapien faucibus et molestie ac feugiat sed. At erat pellentesque adipiscing commodo elit at. Volutpat blandit aliquam etiam erat velit. Est ullamcorper eget nulla facilisi etiam. Viverra nam libero justo laoreet sit amet cursus sit. Ut faucibus pulvinar elementum integer. Viverra mauris in aliquam sem fringilla ut morbi. In iaculis nunc sed augue lacus. Velit ut tortor pretium viverra suspendisse. Nec dui nunc mattis enim ut. Quis risus sed vulputate odio ut enim. Gravida neque convallis a cras.','Adipiscing elit duis tristique sollicitudin nibh. Tortor vitae purus faucibus ornare suspendisse sed. Aliquam nulla facilisi cras fermentum odio. Aliquam etiam erat velit scelerisque. Nisl condimentum id venenatis a. Posuere lorem ipsum dolor sit amet consectetur. Sed elementum tempus egestas sed sed risus pretium quam. At consectetur lorem donec massa sapien faucibus et molestie ac. Bibendum at varius vel pharetra vel turpis nunc eget. Ullamcorper malesuada proin libero nunc. In arcu cursus euismod quis. Scelerisque eu ultrices vitae auctor eu augue ut. Quis blandit turpis cursus in hac habitasse platea dictumst.','Suspendisse in est ante in nibh mauris cursus mattis molestie. Laoreet id donec ultrices tincidunt arcu non sodales neque. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Blandit massa enim nec dui nunc. Pretium nibh ipsum consequat nisl vel pretium lectus. Porta nibh venenatis cras sed. Quam quisque id diam vel quam elementum. At erat pellentesque adipiscing commodo. Tellus at urna condimentum mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Vitae congue mauris rhoncus aenean vel. Nulla facilisi cras fermentum odio eu. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Morbi tempus iaculis urna id volutpat lacus. Feugiat in fermentum posuere urna nec.']
    
    let negocios = [];
    for(let i in negociosNombres){
        negocios.push(<Negocio name={negociosNombres[i]} 
        enfoque={negociosSectores[i]}
        info={negociosDescripciones[i]}>
        </Negocio>);
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