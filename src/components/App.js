import React, { Component } from 'react';
import Header from "./Header";
import Info from "./Info";
import Controls from "./Controls";
import ResetScores from "./ResetScores";
import Messages from "./Messages";
import Board from "./Board";
import Table from "./Table";
import {Route} from 'react-router-dom'

let winningCells="";

class App extends Component {
  state = {
    
    current: "Player 1",
    cells: {'cell-1': 'empty','cell-2': 'empty','cell-3': 'empty','cell-4': 'empty','cell-5': 'empty','cell-6': 'empty','cell-7': 'empty','cell-8': 'empty','cell-9': 'empty'},
    score: {'Player 1': 0, 'Player 2':0},
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
        const score = { ...this.state.score };
        score[this.state.current]=score[this.state.current]+1;
        this.setState({score});
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
    this.setState({ score: { "Player 1": 0, "Player 2": 0 } });
  }

  render() {
    console.log(this.state.score);
    let message = "";
    let winningPlayer = this.state.gameOver ==='Player 1'?'Jugador 1':this.state.gameOver ==='Player 2'? 'Jugador 2': '';
    if (Object.values(this.state.cells).every(e => (e === 'empty'))) message = "Empieza el juego!!!";
    if (this.state.gameOver !== "" && this.state.gameOver !== "empty") message = `JUEGO TERMINADO!!! ${winningPlayer} ha ganado!!!`; 
    if (this.state.gameOver === "nobody") message = `JUEGO TERMINADO!!!`; 
    return <div className="container">
        <Route component={props => <Header/>}/>
        <Info current={this.state.current} gameOver={this.state.gameOver} />
        <Route exact path="/" component={props => <Controls resetGame={this.resetGame} />} />
        <Route path="/Scores" component={props => <ResetScores resetScores={this.resetScores} />} />
        <Messages message={message} />
        <Route exact path="/" component={props => <Board updateCell={this.updateCell} cells={this.state.cells} gameOver={this.state.gameOver} winningCells={winningCells} />} />
        <Route path="/Scores" component={(props) => <Table score={this.state.score} />} />
      </div>;
  }
}

export default App;
