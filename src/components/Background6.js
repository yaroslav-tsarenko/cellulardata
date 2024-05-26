import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Background6.css";

const Background6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onItemLinkMenuClick = useCallback(() => {
    navigate("/helpcenter");
  }, [navigate]);

  return (
    <header className={`background28 ${className}`}>
      <div className="link-svg-wrapper1">
        <img
          className="link-svg4"
          loading="lazy"
          alt=""
          src="/link--svg1.svg"
        />
      </div>
      <div className="background-inner">
        <div className="frame-parent7">
          <div className="buy-an-esim-data-plan-wrapper">
            <div className="buy-an-esim2">BUY AN eSIM DATA PLAN</div>
          </div>
          <div className="vertical-divider8" />
          <div className="get-started-wrapper">
            <a className="get-started2">GET STARTED</a>
          </div>
        </div>
      </div>
      <div className="background-child">
        <div className="vertical-divider-parent">
          <div className="vertical-divider9" />
          <div className="top-up-frame">
            <a className="top-up3">TOP UP</a>
          </div>
        </div>
      </div>
      <div className="frame-parent8">
        <div className="vertical-divider-wrapper">
          <div className="vertical-divider10" />
        </div>
        <div className="item-link-menu2" onClick={onItemLinkMenuClick}>
          <div className="help-center-frame">
            <a className="help-center2">HELP CENTER</a>
          </div>
          <div className="vertical-divider11" />
        </div>
      </div>
      <div className="background-inner1">
        <div className="frame-parent9">
          <div className="link-ubigi-cartsvg-wrapper">
            <img
              className="link-ubigi-cartsvg2"
              loading="lazy"
              alt=""
              src="/link--ubigicartsvg1@2x.png"
            />
          </div>
          <Button
            className="link7"
            disableElevation={true}
            variant="outlined"
            sx={{
              color: "#fff",
              fontSize: "16",
              borderColor: "#fff",
              borderRadius: "30px",
              "&:hover": { borderColor: "#fff" },
              width: 124.9,
            }}
          >
            Business
          </Button>
          <div className="button13">
            <a className="partners2">Partners   </a>
            <div className="svg-wrapper3">
              <img className="svg-icon16" alt="" src="/svg-6.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="link-my-account-wrapper">
        <img
          className="link-my-account2"
          loading="lazy"
          alt=""
          src="/link--my-account.svg"
        />
      </div>
      <div className="link-svg-wrapper2">
        <img className="link-svg5" alt="" src="/link--svg-1.svg" />
      </div>
    </header>
  );
};

export default Background6;
