import React from "react";
import {Link} from 'react-router-dom';

// class Header extends React.Component {

const Header = props => (
  
  <header className="header">
    <nav className="nav">
      <li className={"nav-item play "+(window.location.pathname==='/'?'active':'')}>
        <Link to="/">Jugar</Link></li>
      <li className={"nav-item log "+(window.location.pathname==='/Scores'?'active':'')}>
        <Link to="/Scores">Historico</Link></li>
    </nav>
    <h1 className="game-title">Tres en Raya</h1>
  </header>
);

export default Header;