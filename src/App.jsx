import { useState } from 'react'
import './App.css'
import Hero from './pages/Hero/Hero';
import Wallets from './pages/Wallets/wallets.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />}>
            <Route path="/" element={<Footer />} />
          </Route>
          <Route path="/wallets" element={<Wallets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
