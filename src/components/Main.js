import { Button } from "@mui/material";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <div className={`main1 ${className}`}>
      <header className="background17">
        <div className="svg-link">
          <img
            className="link-svg18"
            loading="lazy"
            alt=""
            src="/link--svg-13.svg"
          />
        </div>
        <div className="right-header">
          <div className="topup-container">
            <div className="buy-an-esim-data-plan-wrapper">
              <div className="buy-an-esim2">BUY AN eSIM DATA PLAN</div>
            </div>
            <div className="vertical-divider8" />
          </div>
        </div>
        <div className="get-started-wrapper">
          <a className="get-started2">GET STARTED</a>
        </div>
        <div className="my-account-container">
          <div className="vertical-divider-parent">
            <div className="vertical-divider9" />
            <div className="account-link">
              <a className="top-up2">TOP UP</a>
            </div>
          </div>
        </div>
        <div className="business-divider1">
          <div className="vertical-divider10" />
        </div>
        <div className="help-center-wrapper">
          <a className="help-center2">HELP CENTER</a>
        </div>
        <div className="lower-header">
          <div className="business-logo">
            <div className="vertical-divider11" />
          </div>
          <div className="partners1">
            <div className="partners-link">
              <img
                className="link-ubigi-cartsvg2"
                loading="lazy"
                alt=""
                src="/link--ubigicartsvg1@2x.png"
              />
            </div>
            <Button
              className="link4"
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
            <div className="button6">
              <a className="partners2">Partners   </a>
              <div className="partners-icon">
                <img className="svg-icon21" alt="" src="/svg.svg" />
              </div>
            </div>
          </div>
          <img
            className="link-my-account2"
            loading="lazy"
            alt=""
            src="/link--my-account.svg"
          />
        </div>
        <div className="account-icon">
          <img
            className="link-svg19"
            loading="lazy"
            alt=""
            src="/link--svg-14.svg"
          />
        </div>
      </header>
      <div className="background18">
        <img
          className="image-icon17"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <h1 className="assistance2">ASSISTANCE</h1>
        <div className="answers-solutions-container">
          <p className="answers-solutions">Answers / solutions to</p>
          <p className="your-questions-while">your questions while using</p>
          <p className="ubigi-esim-services">Ubigi eSIM services</p>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
