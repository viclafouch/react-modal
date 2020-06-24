import React, { useRef } from 'react'
import logo from './logo.svg'
import Modal from './components/Modal/Modal'
import './App.css'

function App() {
  const modal = useRef(null)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Modal from scratch</p>
          <a href="https://dev.to/viclafouch/build-a-complete-modal-component-with-react-hooks-2fk8">Article on dev.to</a>
          <a href="https://gist.github.com/viclafouch/6ee36b2cb7d28484d20f05e68b3433f9">Source code here</a>
          <button className="App-button" onClick={() => modal.current.open()}>
            Open me!
          </button>
        </header>
      </div>
      <Modal fade ref={modal}>
        Hello World
      </Modal>
    </>
  )
}

export default App
