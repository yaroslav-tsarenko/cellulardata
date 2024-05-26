import "./Footer3.css";

const Footer3 = ({ className = "" }) => {
  return (
    <div className={`footer3 ${className}`}>
      <img className="logo-ubigi-icon3" alt="" src="/logo-ubigi.svg" />
      <div className="footer-content2">
        <div className="reviews">
          <div className="backgroundshadow3">
            <div className="great1">Great</div>
            <img className="img-icon2" alt="" src="/img.svg" />
            <img className="img-icon3" alt="" src="/img-1.svg" />
          </div>
          <div className="connect-everywhere-container">
            <img
              className="connecteverywhere-icon3"
              alt=""
              src="/connecteverywhere.svg"
            />
          </div>
        </div>
        <div className="about-us-parent">
          <div className="about-us-get-in-touch">
            <div className="best-m-v-n-o-logo">
              <img
                className="best-mvno-2023svg-icon3"
                loading="lazy"
                alt=""
                src="/best-mvno-2023svg1@2x.png"
              />
            </div>
            <div className="about-us-title">
              <div className="about-us3">About us</div>
              <div className="about-us-links">
                <div className="item-link44">Ubigi story</div>
                <div className="item-link45">Ubigi in the press</div>
                <div className="item-link46">Ubigi network partners</div>
                <div className="item-link47">Ubigi app</div>
                <div className="item-link48">Ubigi.com</div>
              </div>
            </div>
            <div className="about-us-title1">
              <div className="get-in-touch4">Get in touch</div>
              <div className="item-link-connect-your-emp-group">
                <div className="item-link49">Connect your employees</div>
                <div className="item-link50">Affiliation program</div>
                <div className="item-link51">Distributor program</div>
                <div className="item-link52">Contact support</div>
                <div className="item-link53">Career Opportunities</div>
              </div>
            </div>
            <div className="assistance-list">
              <div className="assistance5">Assistance</div>
              <div className="list-item8">Help Center</div>
            </div>
          </div>
        </div>
        <div className="social-media-parent">
          <div className="social-media-links1">
            <img
              className="link-ubigis-facebook-accoun3"
              loading="lazy"
              alt=""
              src="/link--ubigis-facebook-account.svg"
            />
            <img
              className="link-ubigis-instagram-accou3"
              alt=""
              src="/link--ubigis-instagram-account.svg"
            />
            <img
              className="link-ubigis-twitter-account3"
              alt=""
              src="/link--ubigis-twitter-account.svg"
            />
            <img
              className="link-ubigis-youtube-account3"
              alt=""
              src="/link--ubigis-youtube-account.svg"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="horizontal-divider4" />
        <div className="legal1">
          <div className="legal-links1">
            <div className="item-link54">{`Terms & Conditions`}</div>
            <div className="item-link55">Legal notice</div>
            <div className="item-link56">Cookie Declaration</div>
          </div>
          <div className="copyright1">
            <div className="ubigi-20243">
              Ubigi © 2024, Ltd. All rights reserved. Ubigi is an NTT service.
            </div>
            <img
              className="logo-nttpng-icon3"
              alt=""
              src="/logonttpng@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Footer3.propTypes = {
  className: PropTypes.string,
};

export default Footer3;
