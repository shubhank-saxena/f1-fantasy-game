import React from "react";
import currentAccount from '../App';

const Landing = () => {
  const renderNotConnectedContainer = () => (
    <button className="cta-button">Connect Wallet</button>
  );

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
                <a
                  href="#about"
                  className="d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>{!currentAccount && renderNotConnectedContainer()}</span>
                </a>
                <a
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>How to mint?</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img
                className="card-img-top"
                src="https://lh3.googleusercontent.com/cALyqUNCp_IJ-QqCDO1Beg8EmFLfIAxMGn9Qtugs7sfGmFZi5lxPsq-c_xl3CSO42vH6gl6LSO-iOWJ1GeCESvoNtef-6Cvm9VIdXQ=w600"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
