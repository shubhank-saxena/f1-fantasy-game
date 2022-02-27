import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Landing = (props) => {
  const renderConnectWallet = () => (
    <button
      style={{ marginRight: "10px" }}
      onClick={props.connectWallet}
      type="button"
      class="btn btn-warning btn-lg d-inline-flex align-items-center justify-content-center align-self-center"
    >
      Connect Wallet
    </button>
  );

  const renderMintButton = () => {
    if (props.network !== "Polygon Mainnet") {
      return (
        <button
          style={{ marginRight: "10px" }}
          type="button"
          class="btn btn-danger btn-lg"
          onClick={props.switchNetwork}
        >
          Switch to Polygon
        </button>
      );
    } else {
      if (props.minted === true) {
        return (
          <>
            <button
              type="button"
              class="btn btn-secondary btn-lg"
              disabled
              style={{ marginRight: "10px" }}
            >
              Already Minted
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ backgroundColor: "#55acee", textAlign: "center"}}
              onClick={() =>
                window.open(
                  "https://twitter.com/intent/tweet?text=I%20just%20minted%20my%20WeRace%20DAO%20NFT.%20You%20can%20check%20it%20out%20at%20https%3A%2F%2Fopensea.io%2F%20&hashtags=web3&hashtags=dao&hashtags=f1&hashtags=werace",
                  "_blank"
                )
              }
            >
              <FontAwesomeIcon icon={faTwitter} />
              &nbsp;Share on Twitter
            </button>
          </>
        );
      } else {
        return (
          <button
            style={{ marginRight: "10px" }}
            type="button"
            class="btn btn-success btn-lg"
            onClick={props.mintNFT}
          >
            {props.loader ? (
              <>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Minting...
              </>
            ) : (
              "Mint NFT"
            )}
          </button>
        );
      }
    }
  };

  const renderMintCount = () => {
    return (
      <li className="list-group-item" style={{ textAlign: "center" }}>
        Mints Remaining: {parseInt(props.remainingCount)} of 500
      </li>
    );
  };

  const renderInstructionButton = () => {
    return (
      <button
        type="button"
        class="btn btn-info btn-lg"
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=JhoxiUkAMkQ", "_blank")
        }
      >
        How to mint(for free!)
      </button>
    );
  };

  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1>Wager on your favourite driver/team for the race weekend</h1>
            <h2>
              Place your wager in a pool for the race. Win exclusive race day
              NFTs and win tokens.
            </h2>
            <br />
            <h5>Mint an exclusive DAO for added benefits!</h5>
            <div>
              <div className="text-center text-lg-start">
                {!props.currentAccount && renderConnectWallet()}
                {props.currentAccount && renderMintButton()}
                {!props.minted && renderInstructionButton()}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img
                className="card-img-top"
                src="https://lh3.googleusercontent.com/cALyqUNCp_IJ-QqCDO1Beg8EmFLfIAxMGn9Qtugs7sfGmFZi5lxPsq-c_xl3CSO42vH6gl6LSO-iOWJ1GeCESvoNtef-6Cvm9VIdXQ=w600"
                alt="Landing image"
              />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {props.remainingCount !== "" && renderMintCount()}
                  <li
                    className="list-group-item"
                    style={{ textAlign: "center", marginBottom: "0px" }}
                  >
                    <button
                      type="button"
                      class="btn btn-lg"
                      style={{ backgroundColor: "#2BCDE4" }}
                      onClick={() =>
                        window.open("https://opensea.io", "_blank")
                      }
                    >
                      View on OpenSea
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
