import { useMemo } from "react";
import "./BackgroundBorder.css";

const BackgroundBorder = ({
  className = "",
  image,
  gB,
  emptyItem,
  propMinWidth,
}) => {
  const gBStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`backgroundborder6 ${className}`}>
      <img className="image-icon20" alt="" src={image} />
      <div className="similar-plan-details">
        <div className="plan-info">
          <div className="plan-type-icon">
            <div className="bundle-type-icon-container">
              <div className="data-plan-icon-container">
                <div className="monthly-icon-container">
                  <div className="data-plan-icon">
                    <img
                      className="japansvg-icon1"
                      alt=""
                      src="/japansvg-1.svg"
                    />
                  </div>
                  <img className="gsvg-icon2" alt="" src="/5gsvg-1@2x.png" />
                </div>
              </div>
              <div className="destination-name-list">
                <div className="japan2">japan</div>
              </div>
              <div className="gb" style={gBStyle}>
                {gB}
              </div>
            </div>
          </div>
          <div className="validity">
            <div className="valid-30-days">valid 30 days</div>
          </div>
          <div className="empty-space">
            <div className="empty-item">{emptyItem}</div>
          </div>
        </div>
      </div>
      <img
        className="icon-ubigi-bundle-one-offsvg1"
        alt=""
        src="/iconubigibundleoneoffsvg-1.svg"
      />
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  gB: PropTypes.string,
  emptyItem: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default BackgroundBorder;
