import React, { useState } from 'react';
import './App.css';
import Breno from './components/breno';
import Fernando from './components/fernando';
import Matheus from './components/matheus';
import Sandro from './components/sandro';
import Modal from './components/modal';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  }

  const closeModal = () => {
    setSelectedCard(null);
  }

  return (
    <div className="container">
      <h1>Participantes do Projeto - 25Mob</h1>
      <div className="card" onClick={() => openModal('breno')}>
        <Breno />
      </div>
      <div className="card" onClick={() => openModal('fernando')}>
        <Fernando />
      </div>
      <div className="card" onClick={() => openModal('matheus')}>
        <Matheus />
      </div>
      <div className="card" onClick={() => openModal('sandro')}>
        <Sandro />
      </div>
      {selectedCard && <Modal card={selectedCard} closeModal={closeModal} />}
    </div>
  );
}

export default App;
