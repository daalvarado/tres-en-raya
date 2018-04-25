import React from "react";
import Cell from './Cell';

class Board extends React.Component {
    render(){
        return <div className="board">
            <ul id="game-board">
              {Object.keys(this.props.cells).map(key => 
              <Cell key={key} id={key} updateCell={this.props.updateCell} cellValue={this.props.cells[key]} gameOver={this.props.gameOver} winningCells={this.props.winningCells}/>
            )}
            </ul>
          </div>; }};

export default Board;
