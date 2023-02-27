import { cardInfo } from "../../components/constants";
import './hero.css';
import { BiCheckShield } from "react-icons/bi";
const Hero = () => {

    return (
      <div className="hero">
        <h3>
          COIN NODE is an open protocol to communicate securely between Wallets
          and Dapps (Web3 Apps).
        </h3>
        <h3>
          The protocol establishes a remote connection using a Bridge server.
        </h3>

        <div className="breathing-buttons">
          <button className="breathing-button">Connect Wallet</button>
          <button className="breathing-button">Collab.join</button>
        </div>
        {/*some funny Animation should be here*/}

        <h3>Quick Start</h3>
        <div className="cards">
          {cardInfo.map((card) => {
            return (
              <div className="card">
                <div className="link-icon"></div>
                <div>{card.src}</div>
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>

        <h3>Distribution</h3>
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