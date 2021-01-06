import React from 'react';
import ruleta from '../../Assets/img/rueda.png';
import './Roulette.css';

const Ruleta = (props) => (

    <div className='ruleta-box-violeta'>
        {/* <h1 align="center" className="ruleta-puntos">Puntos: {props.total_points}</h1> */}
        <h2 align="start">¡Prueba tu suerte del día!</h2>
        <h3 align="start">Gira la Ruleta MACH y gana puntos o beneficios pensados para tí.</h3>
        <p align="center">
            <button id="btnAnimar" disabled={props.animatedRuleta} onClick={props.animarEvent} className="btn btn-warning btn-orange btn-lg">¡Juega!</button>
        </p>
       
        <p align="center">
            <img
                id="img-ruleta"
                src={ruleta}
                style={{ transform: 'rotate(' + props.data_ruleta + 'deg)', WebkitTransform: 'rotate(' + props.data_ruleta + 'deg)' }}
                alt="Ruleta"
                onTransitionEnd={props.showRuletaResult}
                className="img-responsive img-ruleta"
                ref={props.ruleta}
            />
        </p>
        
    </div>

)

export default Ruleta