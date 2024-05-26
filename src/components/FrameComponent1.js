import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onItemLinkClick = useCallback(() => {
    navigate("/howtoget");
  }, [navigate]);

  const onItemLinkMenuClick = useCallback(() => {
    navigate("/helpcenter");
  }, [navigate]);

  return (
    <section className={`background-container ${className}`}>
      <div className="background18">
        <div className="link-svg-frame">
          <img
            className="link-svg2"
            loading="lazy"
            alt=""
            src="/link--svg1.svg"
          />
        </div>
        <div className="header-right">
          <div className="e-s-i-m-banner">
            <div className="banner-content">
              <div className="buy-an-esim1">BUY AN eSIM DATA PLAN</div>
            </div>
            <div className="vertical-divider4" />
            <div className="banner-content1">
              <a className="get-started1">GET STARTED</a>
            </div>
          </div>
        </div>
        <div className="navigation2">
          <div className="nav-left">
            <div className="vertical-divider5" />
          </div>
          <div className="nav-links">
            <div className="item-link14" onClick={onItemLinkClick}>
              <div className="top-up-container">
                <a className="top-up2">TOP UP</a>
              </div>
              <div className="vertical-divider6" />
            </div>
          </div>
          <div className="item-link-menu1" onClick={onItemLinkMenuClick}>
            <div className="help-center-container">
              <a className="help-center1">HELP CENTER</a>
            </div>
            <div className="vertical-divider7" />
          </div>
        </div>
        <div className="business-content-wrapper">
          <div className="business-content">
            <div className="business-logo">
              <img
                className="link-ubigi-cartsvg1"
                loading="lazy"
                alt=""
                src="/link--ubigicartsvg1@2x.png"
              />
            </div>
            <Button
              className="link6"
              disableElevation={true}
              variant="outlined"
              sx={{
                color: "#fff",
                fontSize: "16",
                borderColor: "#fff",
                borderRadius: "30px",
                "&:hover": { borderColor: "#fff" },
                width: 124.9,
                height: 44,
              }}
            >
              Business
            </Button>
            <div className="button2">
              <a className="partners1">Partners   </a>
              <div className="partner-icon">
                <img className="svg-icon15" alt="" src="/svg-6.svg" />
              </div>
            </div>
            <img
              className="link-my-account1"
              loading="lazy"
              alt=""
              src="/link--my-account.svg"
            />
          </div>
        </div>
        <div className="language">
          <img
            className="link-svg3"
            loading="lazy"
            alt=""
            src="/link--svg-1.svg"
          />
        </div>
      </div>
      <header className="background19">
        <div className="background20">
          <h1 className="install-a-ubigi">
            Install a Ubigi eSIM on your iPhone with a QR code
          </h1>
          <div className="connection-instructions">
            <p className="connect-in-minutes-container">
              <span className="connect-in-minutes-container1">
                <span className="connect-in-minutes">
                  Connect in minutes: scan or manually enter the QR code, create
                  your
                </span>
                <span className="account-and-start">
                  account and start enjoying seamless connectivity!
                </span>
              </span>
            </p>
          </div>
          <div className="compatibility-info">
            <u className="link-see">
              See our list of eSIM compatible iPhone models
            </u>
          </div>
        </div>
      </header>
    </section>
  );
};



export default FrameComponent1;
