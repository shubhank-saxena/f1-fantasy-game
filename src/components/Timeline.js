import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom:"0px"}}>Timeline of Development</h1>
      <br />
      <div class="timeline">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="timeline-container">
                <div class="timeline-continue">
                  <div class="row timeline-right">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon">
                          <i class="fa fa-gift"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>Launch of DAO NFT</h3>
                          <p>
                            <strong>420</strong> ERC115 based WeRace NFT DAO
                            (Decentralized autonomous organization) Launched.
                            The holder of these tokens would govern the way the
                            platform will work. They would also be receiving
                            airdrops of WeRace Tokens to participate in wagers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row timeline-left">
                    <div class="col-md-6 d-md-none d-block"></div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon d-md-none d-block">
                          <i class="fa fa-business-time"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>WeRace Token Launched</h3>
                          <p>
                            WeRace tokens, the tokens native to the WeRace
                            platform, are launched. They will act as the base
                            currency, utilized at various wager formats across
                            the platform. These tokens can then be later used to
                            purchase merchandise.
                          </p>
                        </div>
                        <div class="timeline-icon d-md-block d-none">
                          <i class="fa fa-business-time"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 d-md-block d-none"></div>
                  </div>

                  <div class="row timeline-right">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon">
                          <i class="fa fa-briefcase"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>WeRace Platform Launched</h3>
                          <p>
                            The central platform where all the wager action
                            would occur. This platform will provide the
                            mechanisms which will allow the users to send in
                            their predictions, along with the amount they want
                            to wager.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row timeline-left">
                    <div class="col-md-6 d-md-none d-block"></div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon d-md-none d-block">
                          <i class="fa fa-cogs"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>DAO Platform Launched</h3>
                          <p>
                            This platform will augment WeRace DAO Token holders
                            to communicate, call for a vote, take decisions and
                            get involved in various events.
                          </p>
                        </div>
                        <div class="timeline-icon d-md-block d-none">
                          <i class="fa fa-cogs"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 d-md-block d-none"></div>
                  </div>

                  <div class="row timeline-right">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                      <div class="timeline-box">
                        <div class="timeline-icon">
                          <i class="fa fa-running"></i>
                        </div>
                        <div class="timeline-text">
                          <h3>Merchandise Launched</h3>
                          <p>Official WeRace Merchandise launched</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
