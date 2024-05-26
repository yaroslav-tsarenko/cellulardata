import { useMemo } from "react";
import "./GreatContainer.css";

const GreatContainer = ({ className = "", propPadding, propMinWidth }) => {
  const greatContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  return (
    <div className={`great-container ${className}`} style={greatContainerStyle}>
      <div className="backgroundshadow">
        <div className="great">Great</div>
        <img className="img-icon" loading="lazy" alt="" src="/img.svg" />
        <img className="img-icon1" loading="lazy" alt="" src="/img-1.svg" />
      </div>
    </div>
  );
};

GreatContainer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GreatContainer;
