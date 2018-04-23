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

  render() {
    return (
      <div class='container'>
        <Header history={this.props.history}/>
        <Info current={this.state.current}/>
        <Controls />
        <Messages />
        <Board
          current={this.state.current}
          cells={this.state.cells}
          remaining={this.state.remaining}
          player1={this.state.player1}
          player2={this.state.player2}
          gameOver={this.state.gameOver}
        />
      </div>
    );
  }
}

export default App;
