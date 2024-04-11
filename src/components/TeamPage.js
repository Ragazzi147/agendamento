import React from 'react';

function TeamPage() {
  return (
    <div>
      <h2>Nossa Equipe</h2>
      <div className="member">
        <img src="barber1.jpg" alt="Barbeiro 1" />
        <h3>João Silva</h3>
        <p>Barbeiro principal</p>
      </div>
      <div className="member">
        <img src="barber2.jpg" alt="Barbeiro 2" />
        <h3>Marcos Oliveira</h3>
        <p>Barbeiro assistente</p>
      </div>
    </div>
  );
}

export default TeamPage;
