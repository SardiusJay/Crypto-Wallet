import './footer.css';
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaReddit } from "react-icons/fa";
const Footer = () => {
    return (
      <div className="footer">
        <div className="top-texts">
          <p>Ready to resolve your blockchain issues?</p>
          <p>We are here to provide help</p>
        </div>

        <Link to={`./wallets`}>
          <button className="footer-button">Get Started</button>
        </Link>

        <div className="socialIcons">
          <AiFillGithub />
          <AiOutlineTwitter />
          <FaDiscord />
          <FaReddit />
        </div>

        <p>Wallet Fix © 2023 All rights reserved</p>
      </div>
    );
}
 
export default Footer;