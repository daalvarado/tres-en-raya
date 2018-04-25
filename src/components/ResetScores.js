import React from "react";

const ResetScores = (props) => (
  <div className="controls">
    <button onClick={props.resetScores} className="restart">Borrar Puntajes</button>
  </div>
);

export default ResetScores;
