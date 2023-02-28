import { cardInfo } from "../../components/constants";
import './hero.css';
import { BiCheckShield } from "react-icons/bi";
import { HiOutlineExternalLink } from "react-icons/hi";
const Hero = () => {
     
       <script
         type="text/javascript"
         src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"
       ></script>;
    return (
      <div className="hero">
        <p>
          COIN NODE is an open protocol to communicate securely between Wallets
          and Dapps (Web3 Apps).
        </p>
        <p>
          The protocol establishes a remote connection using a Bridge server.
        </p>

        <div className="breathing-buttons">
          <button className="breathing-button">Connect Wallet</button>
          <button className="breathing-button">Collab.join</button>
        </div>

        <div
          id="coinmarketcap-widget-marquee"
          coins="1,1027,825"
          currency="USD"
          theme="light"
          transparent="false"
          show-symbol-logo="false"
        >
        </div>

        <h3 className="quick-start-heading">Quick Start</h3>
        <div className="cards">
          {cardInfo.map((card) => {
            return (
              <div className="card">
                <HiOutlineExternalLink className="card-link-icon" />
                <div>{card.src}</div>
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>

        <h3 className="distribution-header">Distribution</h3>
        <div className="distribution-details">
          <div className="distribution">
            <h1>50k+</h1>
            <p>active Wallets</p>
          </div>
          <div className="distribution">
            <h1>200k+</h1>
            <p>resolved issues</p>
          </div>
          <div className="distribution">
            <h1>100+</h1>
            <p>contributors</p>
          </div>
        </div>
      </div>
    );
}
 
export default Hero;