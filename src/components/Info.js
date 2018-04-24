import React from "react";

const Info = props => (
 <div className='info'>
            <div className='actual'>
                <span>Jugador Actual:</span>
                <span className={props.current==="Jugador 1"? "turno-j1": "turno-j2"}>{props.current}</span>
            </div>
            <div className='jugadores'>
                <div className="player-name">Jugador 1</div>
                <div className="color-jug color1"></div>
                <div className="player-name">Jugador 2</div>
                <div className="color-jug color2"></div>
            </div>
        </div>
);

export default Info;
