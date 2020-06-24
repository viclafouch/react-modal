import React, { useState } from 'react';
import logo from './logo.svg';
import Modal from './components/Modal/Modal'
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Modal from scratch
          </p>
          <a href="https://github.com/viclafouch/react-modal">Article on dev.to</a>
          <a href="https://github.com/viclafouch/react-modal">Source code here</a>
          <button className="App-button" onClick={() => setIsOpen(true)}>
            Open me!
          </button>
        </header>
      </div>
      { isOpen &&
        <Modal fade onClose={() => setIsOpen(false)}>
          Hello World
        </Modal>
      }
    </>
  )
}

export default App;
