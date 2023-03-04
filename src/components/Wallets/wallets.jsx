import './wallets.css'
import { RiSettings5Fill } from 'react-icons/ri';
import  {logos}  from "../constants";
import { walletconnect } from '../../assets';
const Wallets = () => {
  return (
    <div>
      <div className="wallet">
        <div className="header">
          <img src={walletconnect} alt ="logo" />
        </div>
        <div className="header-texts">
          <h1>Connect Wallet</h1>
          <p>Open protocol for connecting Wallets to Dapps</p>
        </div>
        <div className="wallets">
          {logos.map((logo) => {
            return (
              <div className="wallet-crypto-image">
                <img src={logo.src} alt={logo.title} />
                <p>{logo.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Wallets;

