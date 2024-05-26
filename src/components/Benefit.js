import { useMemo } from "react";
import "./Benefit.css";

const Benefit = ({
  className = "",
  sVG,
  heading5Global,
  worldwideHighQualityCellu,
  connectivityIn200Destinat,
  propWidth,
  propDisplay,
  propMinWidth,
  propFlex,
}) => {
  const benefitStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const heading5Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propDisplay, propMinWidth, propFlex]);

  return (
    <div className={`benefit ${className}`} style={benefitStyle}>
      <div className="svg-wrapper3">
        <img className="svg-icon35" alt="" src={sVG} />
      </div>
      <div className="frame-parent5">
        <div className="heading-5-global-wrapper">
          <h3 className="heading-5" style={heading5Style}>
            {heading5Global}
          </h3>
        </div>
        <p className="worldwide-high-quality-cellula-container">
          <span className="worldwide-high-quality-cellula">
            {worldwideHighQualityCellu}
          </span>
          <span className="connectivity-in-200">
            {connectivityIn200Destinat}
          </span>
        </p>
      </div>
    </div>
  );
};

Benefit.propTypes = {
  className: PropTypes.string,
  sVG: PropTypes.string,
  heading5Global: PropTypes.string,
  worldwideHighQualityCellu: PropTypes.string,
  connectivityIn200Destinat: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Benefit;
