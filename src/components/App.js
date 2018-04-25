import React, { Component } from 'react';
import Header from "./Header";
import Info from "./Info";
import Controls from "./Controls";
import Messages from "./Messages";
import Board from "./Board";

let winningCells="";

class App extends Component {
  state = {
    
    current: "Player 1",
    cells: {'cell-1': 'empty','cell-2': 'empty','cell-3': 'empty','cell-4': 'empty','cell-5': 'empty','cell-6': 'empty','cell-7': 'empty','cell-8': 'empty','cell-9': 'empty'},
    score: {'Player 1': 0, 'Player-2':0},
    gameOver: ""
  };

  updateCell = (key) => {
    const cells = {...this.state.cells};
    cells[key] = this.state.current;
    this.setState({cells}, () => {
    this.checkWinner();
    this.checkEmpty();
    this.nextPlayer();

    });
  }
  nextPlayer = () => {
    const next = this.state.current === "Player 1"? "Player 2": "Player 1";
    this.setState({current:next});
  }

  checkWinner = () => {
    const winners = [['cell-1', 'cell-2', 'cell-3'], ['cell-4', 'cell-5', 'cell-6'],
    ['cell-7', 'cell-8', 'cell-9'],
    ['cell-1', 'cell-4', 'cell-7'],
    ['cell-2', 'cell-5', 'cell-8'],
    ['cell-3', 'cell-6', 'cell-9'],
    ['cell-1', 'cell-5', 'cell-9'],
    ['cell-3', 'cell-5', 'cell-7']];
    const player = Object.keys(this.state.cells).filter(key=> this.state.cells[key] === this.state.current)
    
    for (let winner in winners) {
      if (winners[winner].every(e=> player.includes(e))) {
        this.setState({gameOver:this.state.current});
        winningCells=winners[winner];
        return;
    }
    }}
  
  checkEmpty = () => {
    if (Object.values(this.state.cells).every(e => e !== "empty")) this.setState({gameOver:"nobody"});
  }
  
  resetGame = () => {
    this.setState({
      current: "Player 1",
      gameOver: "",
      cells: {
        "cell-1": "empty",
        "cell-2": "empty",
        "cell-3": "empty",
        "cell-4": "empty",
        "cell-5": "empty",
        "cell-6": "empty",
        "cell-7": "empty",
        "cell-8": "empty",
        "cell-9": "empty"
      }
    });
  }

  resetScores = () => {
    this.setState({ score: { "Player 1": 0, "Player-2": 0 } });
  }

  render() {
    let message = "";
    if (Object.values(this.state.cells).every(e => (e === 'empty'))) message = "Empieza el juego!!!";
    if (this.state.gameOver !== "" && this.state.gameOver !== "empty") message = `JUEGO TERMINADO!!! \n ${this.state.gameOver} ha ganado!!!`; 
    if (this.state.gameOver === "nobody") message = `JUEGO TERMINADO!!!`; 
    return <div className="container">
        <Header history={this.props.history} />
        <Info current={this.state.current} gameOver={this.state.gameOver} />
        <Controls resetGame={this.resetGame}/>
        <Messages message={message} />
        <Board updateCell={this.updateCell} cells={this.state.cells} gameOver={this.state.gameOver} winningCells={winningCells} />
      </div>;
  }
}

export default App;
