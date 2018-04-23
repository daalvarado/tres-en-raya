import React from "react";

const Info = props => (
 <div class='info'>
            <div class='actual'>
                <span>Jugador Actual:</span>
                <span class={props.current==="Jugador 1"? "turno-j1": "turno-j2"}>{props.current}</span>
            </div>
            <div class='jugadores'>
                <div class="player-name">Jugador 1</div>
                <div class="color-jug color1"></div>
                <div class="player-name">Jugador 2</div>
                <div class="color-jug color2"></div>
            </div>
        </div>
);

export default Info;
