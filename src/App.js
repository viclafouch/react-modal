import React, { useState } from 'react';
import logo from './logo.svg';
import Modal from './components/Modal/Modal'
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Modal from scratch
        </p>
        <button className="App-button" onClick={() => setIsOpen(true)}>
          Open me!
        </button>
      </header>
      { isOpen && <Modal fade onClose={() => setIsOpen(false)}>
        Hello World
      </Modal> }
    </div>
  );
}

export default App;
