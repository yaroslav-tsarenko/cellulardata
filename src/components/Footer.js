import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  className = "",
  bestMvno2023svg,
  logoNTTpng,
  propDebugCommit,
  propDebugCommit1,
  propMargin,
}) => {
  const logoUbigiIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const connectEverywhereIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const ubigi2024Style = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <section className={`footer1 ${className}`}>
      <div className="footer-content1">
        <div className="footer-top1">
          <div className="logo-ubigi-container">
            <img
              className="logo-ubigi-icon1"
              alt=""
              src="/logo-ubigi.svg"
              style={logoUbigiIconStyle}
            />
          </div>
          <img
            className="connecteverywhere-icon1"
            alt=""
            src="/connecteverywhere.svg"
            style={connectEverywhereIconStyle}
          />
        </div>
        <div className="footer-links1">
          <div className="best-mvno-2023svg-container">
            <img
              className="best-mvno-2023svg-icon2"
              alt=""
              src={bestMvno2023svg}
            />
          </div>
          <div className="links-column">
            <div className="about-us2">About us</div>
            <div className="item-link-ubigi-story-parent">
              <div className="item-link15">Ubigi story</div>
              <div className="item-link16">Ubigi in the press</div>
              <div className="item-link17">Ubigi network partners</div>
              <div className="item-link18">Ubigi app</div>
              <div className="item-link19">Ubigi.com</div>
            </div>
          </div>
          <div className="links-column1">
            <div className="get-in-touch2">Get in touch</div>
            <div className="item-link-connect-your-emp-parent">
              <div className="item-link20">Connect your employees</div>
              <div className="item-link21">Affiliation program</div>
              <div className="item-link22">Distributor program</div>
              <div className="item-link23">Contact support</div>
              <div className="item-link24">Career Opportunities</div>
            </div>
          </div>
          <div className="assistance-parent">
            <div className="assistance2">Assistance</div>
            <div className="list-item1">Help Center</div>
          </div>
        </div>
        <div className="social-links-wrapper">
          <div className="social-links">
            <img
              className="link-ubigis-facebook-accoun1"
              alt=""
              src="/link--ubigis-facebook-account.svg"
            />
            <img
              className="link-ubigis-instagram-accou1"
              alt=""
              src="/link--ubigis-instagram-account.svg"
            />
            <img
              className="link-ubigis-twitter-account1"
              alt=""
              src="/link--ubigis-twitter-account.svg"
            />
            <img
              className="link-ubigis-youtube-account1"
              alt=""
              src="/link--ubigis-youtube-account.svg"
            />
          </div>
        </div>
      </div>
      <div className="horizontal-divider2" />
      <div className="footer-bottom">
        <div className="legal-links1">
          <div className="item-link25">{`Terms & Conditions`}</div>
          <div className="item-link26">Legal notice</div>
          <div className="item-link27">Cookie Declaration</div>
        </div>
        <div className="copyright1">
          <p className="ubigi-20241" style={ubigi2024Style}>
            Ubigi © 2024, Ltd. All rights reserved. Ubigi is an NTT service.
          </p>
          <img className="logo-nttpng-icon1" alt="" src={logoNTTpng} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
