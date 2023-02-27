import './footer.css';
const Footer = () => {
    return (
      <div className="footer">
        <div className="top-texts">
          <p>Ready to resolve your blockchain issues?</p>
          <p>We are here to provide help</p>
        </div>

        <button className="footer-button">Get Started</button>

        <div className="social-media-icons">
          <div className="github"></div>
          <div className="twitter"></div>
          <div className="discord"></div>
          <div className="reddit"></div>
        </div>

        <p>Wallet Fix © 2022 All rights reserved</p>
      </div>
    );
}
 
export default Footer;