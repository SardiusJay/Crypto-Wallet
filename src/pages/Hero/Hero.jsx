import { useState } from "react";
import { cardInfo } from "../../components/constants";
import './hero.css';
import { HiOutlineExternalLink } from "react-icons/hi";
import CountUp from "react-countup"; 
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
const Hero = () => {
     
       <script
         type="text/javascript"
         src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"
       ></script>;
  
  const [counterOn, setCounterOn] = useState(false);
    return (
      <div className="hero">
        <Header />
        <div className="header-texts">
          <p>
            COIN NODE is an open protocol to communicate securely between
            Wallets and Dapps (Web3 Apps).
          </p>
          <p>
            The protocol establishes a remote connection using a Bridge server.
          </p>
        </div>
        <div className="breathing-buttons">
          <Link to={`./wallets`}>
            <button className="breathing-button">Connect Wallet</button>
          </Link>
          <Link to={`./wallets`}>
            <button className="breathing-button">Collab.join</button>
          </Link>
        </div>

        <div
          id="coinmarketcap-widget-marquee"
          coins="1,1027,825"
          currency="USD"
          theme="light"
          transparent="false"
          show-symbol-logo="false"
        ></div>

        <h3 className="quick-start-heading">Quick Start</h3>
        <div className="cards">
          {cardInfo.map((card) => {
            return (
              <Link to={`./wallets`}>
                <div className="card">
                  <HiOutlineExternalLink className="card-link-icon" />
                  <div>{card.src}</div>
                  <p>{card.title}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <h3 className="distribution-header">Distribution</h3>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="distribution-details">
            <div className="distribution">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={50} duration={2} delay={0} />
                )}
                k+
              </h1>
              <p>active Wallets</p>
            </div>
            <div className="distribution">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={200} duration={2} delay={0} />
                )}
                k+
              </h1>
              <p>resolved issues</p>
            </div>
            <div className="distribution">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h1>
              <p>contributors</p>
            </div>
          </div>
        </ScrollTrigger>
        <Footer />
      </div>
    );
}
 
export default Hero;