import React from "react";

const Works = () => {
  return (
    <>
      <div className="row feture-tabs">
        <div className="col-lg-6">
          <img
            src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/04/18/16187602328458.jpg"
            className="img-fluid float-left"
            alt=""
          />
        </div>

        <div className="col-lg-6">
          <h1>How does WeRace work?</h1>

          <ul className="nav nav-pills mb-3">
            <li>
              <a className="nav-link active" data-bs-toggle="pill" href="#tab1">
                Predict and Earn
              </a>
            </li>
            <li>
              <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                Earn NFTs
              </a>
            </li>
            <li>
              <a className="nav-link" data-bs-toggle="pill" href="#tab3">
                Merchandise
              </a>
            </li>
            <li>
              <a className="nav-link" data-bs-toggle="pill" href="#tab4">
                Participate in DAO
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="tab1">
              <div className="d-flex align-items-center mb-2">
                <h4>
                  Predict the race standings, constructors standing, fastest
                  laps etc., for every race.{" "}
                </h4>
              </div>
              <p>
                Pool in your platform based tokens and get rewarded for correct
                predictions
              </p>
              <div className="d-flex align-items-center mb-2">
                <h4>The more you pool in, the higher is the reward!</h4>
              </div>
              <p>
                You can predict up to as many drivers/constructors as you want.
                The more accurate your predictions are, the higher amount of
                tokens you would be awarded.
              </p>
            </div>

            <div className="tab-pane fade show" id="tab2">
              <div className="d-flex align-items-center mb-2">
                <h4>Earn race day NFTs</h4>
              </div>
              <p>
                Commemorative NFTs of the race and will be provided to everyone
                who participates in the race's prediction.
              </p>
              <div className="d-flex align-items-center mb-2">
                <h4>Exclusive win NFTs</h4>
              </div>
              <p>
                Every race weekend will have a leaderboard. The top performers
                of every race weekend would be given rare NFTs. These would be
                limited to only the top 10-15 of the total leaderboard.
              </p>
            </div>

            <div className="tab-pane fade show" id="tab3">
              <div className="d-flex align-items-center mb-2">
                <h4>Merchandise</h4>
              </div>
              <p>
                The tokens won in prediction sessions can be utilized to
                purchase exclusive merchandise.
              </p>
            </div>

            <div className="tab-pane fade show" id="tab4">
              <div className="d-flex align-items-center mb-2">
                <h4>Participate in DAO</h4>
              </div>
              <p>
                The initial NFT mint will act as DAO tokens. These NFTs will be
                utilized to gatekeep and form WeRace DAO, which will supervise
                the token distribution, new wager events, NFT distribution,
                third-party contracts (for designs if needed) etc. These DAO
                holders would also be eligible for exclusive token airdrops and
                wager-on-discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Works;
