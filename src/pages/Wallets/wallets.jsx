import './wallets.css';
import { RiSettings5Fill } from 'react-icons/ri';
import  {logos}  from "../../components/constants";
import { walletconnect } from '../../assets';
import { BsFacebook, BsTwitter, BsDiscord } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
const Wallets = () => {
  return (
    <div>
      <div className="wallet">
        <div className="wallet-header">
          <img src={walletconnect} alt="logo" />
        </div>
        <div className="wallet-header-texts">
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
        <div className="footer-text">
          <p>
            Open an app submission issue on GitHub to add your app
            <a href="https://github.com/" className="footer-link">
              <span> here.</span>
            </a>
          </p>
          <div className="footer-logos">
            <BsFacebook className="footer-logo" />
            <BsTwitter className="footer-logo" />
            <FaDiscord className="footer-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallets;

