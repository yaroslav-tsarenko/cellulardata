import { useMemo } from "react";
import "./Container1.css";

const Container1 = ({
  className = "",
  image,
  prop,
  leisure,
  propHeight,
  propBackgroundImage,
  propFlex,
  propMinHeight,
  propWidth,
}) => {
  const containerStyle = useMemo(() => {
    return {
      height: propHeight,
      backgroundImage: propBackgroundImage,
    };
  }, [propHeight, propBackgroundImage]);

  const whatIsEsimStyle = useMemo(() => {
    return {
      flex: propFlex,
      minHeight: propMinHeight,
    };
  }, [propFlex, propMinHeight]);

  const leisureStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`container8 ${className}`} style={containerStyle}>
      <img className="image-icon7" alt="" src={image} />
      <div className="gradient2" />
      <div className="what-is-esim" style={whatIsEsimStyle}>
        <div className="gradient3" />
        <div className="leisure" style={leisureStyle}>
          <span className="leisure-txt">
            <p className="p1">{prop}</p>
            <p className="leisure1">{leisure}</p>
          </span>
        </div>
      </div>
      <div className="learn-more-button-wrapper">
        <div className="learn-more-button">
          <div className="link-learn">Learn more</div>
          <div className="svg-wrapper1">
            <img className="svg-icon11" alt="" src="/svg-11@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Container1;
