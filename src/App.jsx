import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/footer';
import Header from './components/Header/Header';
import Hero from './pages/Hero/Hero';
import Wallets from './components/Wallets/wallets';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer/>
      <Wallets />
    </div>
  );
}

export default App;
