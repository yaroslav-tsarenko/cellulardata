import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <div className={`footer2 ${className}`}>
      <img className="logo-ubigi-icon2" alt="" src="/logo-ubigi.svg" />
      <div className="footer-content3">
        <div className="reviews1">
          <div className="backgroundshadow11">
            <div className="great3">Great</div>
            <img className="img-icon11" alt="" src="/img.svg" />
            <img className="img-icon12" alt="" src="/img-1.svg" />
          </div>
          <div className="connect-everywhere-container">
            <img
              className="connecteverywhere-icon2"
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
                src="/best-mvno-2023svg-1@2x.png"
              />
            </div>
            <div className="about-us-title">
              <div className="about-us3">About us</div>
              <div className="about-us-links1">
                <div className="item-link28">Ubigi story</div>
                <div className="item-link29">Ubigi in the press</div>
                <div className="item-link30">Ubigi network partners</div>
                <div className="item-link31">Ubigi app</div>
                <div className="item-link32">Ubigi.com</div>
              </div>
            </div>
            <div className="about-us-title1">
              <div className="get-in-touch3">Get in touch</div>
              <div className="item-link-connect-your-emp-group">
                <div className="item-link33">Connect your employees</div>
                <div className="item-link34">Affiliation program</div>
                <div className="item-link35">Distributor program</div>
                <div className="item-link36">Contact support</div>
                <div className="item-link37">Career Opportunities</div>
              </div>
            </div>
            <div className="assistance-list">
              <div className="assistance3">Assistance</div>
              <div className="list-item2">Help Center</div>
            </div>
          </div>
        </div>
        <div className="social-media-parent">
          <div className="social-media-links1">
            <img
              className="link-ubigis-facebook-accoun2"
              loading="lazy"
              alt=""
              src="/link--ubigis-facebook-account.svg"
            />
            <img
              className="link-ubigis-instagram-accou2"
              alt=""
              src="/link--ubigis-instagram-account.svg"
            />
            <img
              className="link-ubigis-twitter-account2"
              alt=""
              src="/link--ubigis-twitter-account.svg"
            />
            <img
              className="link-ubigis-youtube-account2"
              alt=""
              src="/link--ubigis-youtube-account.svg"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom1">
        <div className="horizontal-divider3" />
        <div className="legal1">
          <div className="legal-links2">
            <div className="item-link38">{`Terms & Conditions`}</div>
            <div className="item-link39">Legal notice</div>
            <div className="item-link40">Cookie Declaration</div>
          </div>
          <div className="copyright2">
            <div className="ubigi-20242">
              Ubigi © 2024, Ltd. All rights reserved. Ubigi is an NTT service.
            </div>
            <img
              className="logo-nttpng-icon2"
              alt=""
              src="/logonttpng@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer1;
