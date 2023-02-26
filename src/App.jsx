import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className ="logo-nav">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={() => setCount((count) => count + 1)}>
          Connect
        </button>
      </div>
      <h1>Wallet Connect</h1>
      <div className="card">
        <p>Open protocol for connecting Wallets to Dapps</p>

        <div className="buttons">
          <button onClick={() => setCount((count) => count + 1)}>
            Validate Token
          </button>
          <button onClick={() => setCount((count) => count + 1)}>
            Claim Rewards
          </button>
          <button onClick={() => setCount((count) => count + 1)}>
            Fix Wallet Errors
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
