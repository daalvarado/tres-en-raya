import React from "react";

// class Header extends React.Component {

const Header = props => (
  <header class="header">
    <nav class="nav">
      <li class="nav-item play" onClick={(e) => props.history.push('/')}>Jugar</li>
      <li class="nav-item log" onClick={(e) => props.history.push('/Scores')}>Historico</li>
    </nav>
    <h1 class="game-title">Tres en Raya</h1>
  </header>
);

export default Header;