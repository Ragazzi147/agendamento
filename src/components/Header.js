import React from 'react';
import { HeaderWrapper, Nav } from './styles';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <HeaderWrapper>
      <h1>Barbearia do João</h1>
      <Nav>
        <ul>
        <li><Link to="/">Início</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/contatos">Contatos</Link></li>
          <li><Link to="/agendar">Agendar</Link></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
