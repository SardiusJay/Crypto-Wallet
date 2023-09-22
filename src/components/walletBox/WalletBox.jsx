import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import './walletBox.css';
const WalletBox = ({ clicked, setClicked, connect, setConnect }) => {
  return (
    <>
          <div className="cover"></div>
      <div className="wallet-box">
        <div className="box-nav">
          <h5 onClick={() => {setClicked("")}}>Back</h5>
                  <AiOutlineClose onClick={() => { setClicked("");}} className="close" />
        </div>
        <div className="box-body">
          <div className="box-body-top">
                      <button className="manual-connect-btn" onClick={() => { setConnect(true); }}>Connect Manually</button>
          </div>
          <div className="box-body-bottom">
            <img src={clicked} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
 
export default WalletBox;