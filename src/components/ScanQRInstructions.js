import { useMemo } from "react";
import "./ScanQRInstructions.css";

const ScanQRInstructions = ({
  className = "",
  sVG,
  heading4CreateYourAccount,
  toStartUsingYourDataPlanC,
  yourBalanceAndTopUpOnTheG,
  enjoy,
  propFlex,
  propGap,
  propMinWidth,
  propWidth,
  propWidth1,
  propGap1,
  propColor,
  propColor1,
}) => {
  const scanQRInstructionsStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propGap, propMinWidth, propWidth]);

  const sVGIconStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const heading4Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const toStartUsingContainerStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={`scan-q-r-instructions ${className}`}
      style={scanQRInstructionsStyle}
    >
      <div className="svg-wrapper2">
        <img className="svg-icon32" alt="" src={sVG} style={sVGIconStyle} />
      </div>
      <div className="frame-parent4" style={frameDivStyle}>
        <div className="heading-4-create-your-accoun-wrapper">
          <div className="heading-47" style={heading4Style}>
            {heading4CreateYourAccount}
          </div>
        </div>
        <p
          className="to-start-using-container"
          style={toStartUsingContainerStyle}
        >
          <span className="to-start-using">{toStartUsingYourDataPlanC}</span>
          <span className="your-balance-and">{yourBalanceAndTopUpOnTheG}</span>
          <span className="enjoy">{enjoy}</span>
        </p>
      </div>
    </div>
  );
};

ScanQRInstructions.propTypes = {
  className: PropTypes.string,
  sVG: PropTypes.string,
  heading4CreateYourAccount: PropTypes.string,
  toStartUsingYourDataPlanC: PropTypes.string,
  yourBalanceAndTopUpOnTheG: PropTypes.string,
  enjoy: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propGap: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propGap1: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
};

export default ScanQRInstructions;
