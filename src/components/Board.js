import React from "react";

class Board extends React.Component {
    render(){
        return (
   
  <div class="board">
    <ul id="game-board">
      <li class="cell empty" id="cell-1" />
      <li class="cell p1" id="cell-2" />
      <li class="cell empty" id="cell-3" />
      <li class="cell empty" id="cell-4" />
      <li class="cell p2" id="cell-5" />
      <li class="cell empty" id="cell-6" />
      <li class="cell empty" id="cell-7" />
      <li class="cell empty" id="cell-8" />
      <li class="cell empty" id="cell-9" />
    </ul>
  </div>
) }};

export default Board;
