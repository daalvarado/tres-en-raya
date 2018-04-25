import React from "react";

const Table = props => (
  <div className="table-area">
    <div className="table-board">
      <div className="table-name">Juegos Ganados</div>
      <div className="table">
        <div className="tplayer-name">Jugador 1</div>
        <div className="tplayer-name">Jugador 2</div>
        <div className="tplayer-score">{props.score[`Player 1`]}</div>
        <div className="tplayer-score">{props.score[`Player 2`]}</div>
      </div>
    </div>
  </div>
);

export default Table;
