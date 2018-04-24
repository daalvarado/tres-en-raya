import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Info from "./Info";
import Controls from "./Controls";
import Messages from "./Messages";
import Board from "./Board";

class App extends Component {
  state = {
    matches: {},
    current: "Jugador 1",
    cells: {'cell-1': 'empty','cell-2': 'empty','cell-3': 'empty','cell-4': 'empty','cell-5': 'empty','cell-6': 'empty','cell-7': 'empty','cell-8': 'empty','cell-9': 'empty'},
    remaining: ['cell-1','cell-2','cell-3','cell-4','cell-5','cell-6','cell-7','cell-8','cell-9'],
    player1: {},
    player2: {},
    gameOver: 0
  };

  updateCell = (key) => {
    const cells = {...this.state.cells};
    cells[key] = this.state.current==='Jugador 1'?'Player-1':'Player-2';
    this.setState({cells}, () => {
    this.checkWinner();

    });
    console.log(this.state.cells)
    //Check if there is a winner
    //Check if there are empty cells
    //Next player
    this.nextPlayer();
  }
  nextPlayer = () => {
    const next = this.state.current === "Jugador 1"? "Jugador 2": "Jugador 1";
    this.setState({current:next});
  }

  checkWinner = () => {
    const winners = [["cell-1", "cell-2", "cell-3"], ["cell-4", "cell-5", "cell-6"],
    ["cell-7", "cell-8", "cell-9"],
    ["cell-1", "cell-4", "cell-7"],
    ["cell-2", "cell-5", "cell-8"],
    ["cell-3", "cell-6", "cell-9"],
    ["cell-1", "cell-5", "cell-9"],
    ["cell-3", "cell-5", "cell-7"]];
    const player1 = Object.keys(this.state.cells).filter(key=> this.state.cells[key] === "Player-1")
    const player2 = Object.keys(this.state.cells).filter(key => this.state.cells[key] === "Player-2");
    for (let winner in winners) {
      console.log(winners[winner])
      if (player1.sort().includes(winners[winner])) {
        console.log('winner!')}
    }
    }
    
  

  render() {
    return (
      <div className='container'>
        <Header history={this.props.history}/>
        <Info current={this.state.current}/>
        <Controls />
        <Messages />
        <Board
          updateCell={this.updateCell}
          
          cells={this.state.cells}
          remaining={this.state.remaining}
          
          gameOver={this.state.gameOver}
        />
      </div>
    );
  }
}

export default App;
