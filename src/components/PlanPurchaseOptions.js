import { useMemo } from "react";
import "./PlanPurchaseOptions.css";

const PlanPurchaseOptions = ({
  className = "",
  doINeedWiFiToPurchaseAUbi,
  iPurchasedTheWrongDataPla,
  it,
  propDebugCommit,
  propBackgroundImage,
  propBackgroundImage1,
  propWidth,
}) => {
  const planPurchaseOptionsStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const linkHeading36Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const linkHeading37Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  const iPurchasedTheContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`plan-purchase-options ${className}`}
      style={planPurchaseOptionsStyle}
    >
      <div className="link-heading-3105" style={linkHeading36Style}>
        <div className="do-i-need1">{doINeedWiFiToPurchaseAUbi}</div>
      </div>
      <div className="link-heading-3106" style={linkHeading37Style}>
        <div
          className="i-purchased-the-container2"
          style={iPurchasedTheContainerStyle}
        >
          <span className="i-purchased-the-container3">
            <p className="i-purchased-the1">{iPurchasedTheWrongDataPla}</p>
            <p className="it1">{it}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

PlanPurchaseOptions.propTypes = {
  className: PropTypes.string,
  doINeedWiFiToPurchaseAUbi: PropTypes.string,
  iPurchasedTheWrongDataPla: PropTypes.string,
  it: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propWidth: PropTypes.any,
};

export default PlanPurchaseOptions;
