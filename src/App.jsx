import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>COIN NODE</h1>
      <div className="card">
      <p>
      Open protocol for connecting Wallets to Dapps
    </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Validate Token
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
        Validate Token
      </button>
      <button onClick={() => setCount((count) => count + 1)}>
      Validate Token
    </button>
      </div>
    </div>
  )
}

export default App
