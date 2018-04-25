import React from "react";

const Controls = (props) => (
  <div className="controls">
    <button onClick={props.resetGame} className="restart">Reiniciar</button>
  </div>
);

export default Controls;
