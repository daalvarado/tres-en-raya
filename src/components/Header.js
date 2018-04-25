import React from "react";

// class Header extends React.Component {

const Header = props => (
  <header className="header">
    <nav className="nav">
      <li className="nav-item play" onClick={(e) => props.history.push('/')}>Jugar</li>
      <li className="nav-item log" onClick={(e) => props.history.push({
      pathname:  '/Scores',
      state: {score: props.score},
      })}>Historico</li>
    </nav>
    <h1 className="game-title">Tres en Raya</h1>
  </header>
);

export default Header;