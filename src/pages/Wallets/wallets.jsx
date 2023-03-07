import './wallets.css';
import { RiSettings5Fill } from 'react-icons/ri';
import  {logos}  from "../../components/constants";
import { walletconnect } from '../../assets';
import { BsFacebook, BsTwitter, BsDiscord } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import WalletBox from "../../components/walletBox/WalletBox";
import { useState } from "react";
const Wallets = () => {
  const [clicked, setClicked] = useState("");
  return (
    <div>
      <div className={clicked ? "cover dimmer" : "cover"}></div>
      <div
        className= "wallet"
      >
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
              <div
                className={
                  clicked
                    ? "wallet-crypto-image pointer-event"
                    : "wallet-crypto-image"
                }
                onClick={() => {
                  setClicked(logo.src);
                }}
              >
                <img src={logo.src} alt={logo.title} />
                <p>{logo.title}</p>
              </div>
            );
          })}
        </div>
        {/** wallet Box's Code */}
        {clicked && <WalletBox clicked={clicked} setClicked={setClicked} />}

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

