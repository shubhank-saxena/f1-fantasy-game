import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
        <div class="copyright">
        WeRace : <strong><span>On Chain stuff!</span></strong>. No rights reserved!
      </div>
          <div className="credits">
            Designed using components from{" "}
            <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
          <div className="credits">
            <a
              className="btn btn-primary"
              style={{ backgroundColor: "#55acee" }}
              role="button"
              onClick={() =>
                window.open(
                  "https://twitter.com/WeRaceDAO",
                  "_blank"
                )
              }
            >
              <FontAwesomeIcon icon={faTwitter} /> &nbsp; Connect on Twitter!
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
