import { useMemo } from "react";
import { Button } from "@mui/material";
import "./Background7.css";

const Background7 = ({ className = "", linkUbigiCartsvg, hELPCENTERColor }) => {
  const hELPCENTERStyle = useMemo(() => {
    return {
      color: hELPCENTERColor,
    };
  }, [hELPCENTERColor]);

  return (
    <header className={`background32 ${className}`}>
      <div className="business-link-container">
        <img
          className="link-svg6"
          loading="lazy"
          alt=""
          src="/link--svg1.svg"
        />
      </div>
      <div className="my-account-link-container">
        <div className="my-account-link-wrapper">
          <div className="my-account-link-content">
            <div className="buy-an-esim3">BUY AN eSIM DATA PLAN</div>
          </div>
          <div className="vertical-divider12" />
        </div>
      </div>
      <div className="get-started-container">
        <a className="get-started3">GET STARTED</a>
      </div>
      <div className="top-up-container1">
        <div className="top-up-wrapper1">
          <div className="vertical-divider13" />
          <div className="top-up-label-container">
            <a className="top-up4">TOP UP</a>
          </div>
        </div>
      </div>
      <div className="divider">
        <div className="vertical-divider14" />
      </div>
      <div className="help-center-wrapper1">
        <a className="help-center3" style={hELPCENTERStyle}>
          HELP CENTER
        </a>
      </div>
      <div className="partners-wrapper">
        <div className="partner-divider">
          <div className="vertical-divider15" />
        </div>
        <div className="partners-links">
          <div className="partners-icon">
            <img
              className="link-ubigi-cartsvg3"
              loading="lazy"
              alt=""
              src={linkUbigiCartsvg}
            />
          </div>
          <Button
            className="link8"
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
          <div className="button18">
            <a className="partners3">Partners   </a>
            <div className="partners-button-icon">
              <img className="svg-icon17" alt="" src="/svg-6.svg" />
            </div>
          </div>
        </div>
        <img
          className="link-my-account3"
          loading="lazy"
          alt=""
          src="/link--my-account.svg"
        />
      </div>
      <div className="help-center-link">
        <img className="link-svg7" alt="" src="/link--svg-1.svg" />
      </div>
    </header>
  );
};


export default Background7;
