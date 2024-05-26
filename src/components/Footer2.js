import { Button } from "@mui/material";
import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <footer className={`footer2 ${className}`}>
      <div className="footer-content1">
        <img
          className="logo-ubigi-icon2"
          loading="lazy"
          alt=""
          src="/logo-ubigi.svg"
        />
        <div className="footer-links">
          <div className="footer-links-container">
            <img
              className="connecteverywhere-icon2"
              alt=""
              src="/connecteverywhere.svg"
            />
            <Button
              className="backgroundshadow1"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#191919",
                fontSize: "18",
                background: "#fff",
                borderRadius: "8px 8px 0px 0px",
                "&:hover": { background: "#fff" },
              }}
            >
              Great
            </Button>
          </div>
        </div>
      </div>
      <div className="footer-navigation">
        <div className="award-icon">
          <img
            className="best-mvno-2023svg-icon2"
            loading="lazy"
            alt=""
            src="/best-mvno-2023svg@2x.png"
          />
        </div>
        <div className="navigation-links">
          <div className="about-us2">About us</div>
          <div className="get-in-touch2">
            <div className="item-link34">Ubigi story</div>
            <div className="item-link35">Ubigi in the press</div>
            <div className="item-link36">Ubigi network partners</div>
            <div className="item-link37">Ubigi app</div>
            <div className="item-link38">Ubigi.com</div>
          </div>
        </div>
        <div className="navigation-links1">
          <div className="get-in-touch3">Get in touch</div>
          <div className="item-link-connect-your-emp-parent">
            <div className="item-link39">Connect your employees</div>
            <div className="item-link40">Affiliation program</div>
            <div className="item-link41">Distributor program</div>
            <div className="item-link42">Contact support</div>
            <div className="item-link43">Career Opportunities</div>
          </div>
        </div>
        <div className="assistance-parent">
          <div className="assistance4">Assistance</div>
          <div className="list-item7">Help Center</div>
        </div>
      </div>
      <div className="social-media">
        <div className="social-media-links">
          <img
            className="link-ubigis-facebook-accoun2"
            loading="lazy"
            alt=""
            src="/link--ubigis-facebook-account.svg"
          />
          <img
            className="link-ubigis-instagram-accou2"
            loading="lazy"
            alt=""
            src="/link--ubigis-instagram-account.svg"
          />
          <img
            className="link-ubigis-twitter-account2"
            loading="lazy"
            alt=""
            src="/link--ubigis-twitter-account.svg"
          />
          <img
            className="link-ubigis-youtube-account2"
            loading="lazy"
            alt=""
            src="/link--ubigis-youtube-account.svg"
          />
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
