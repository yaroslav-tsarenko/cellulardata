import { useMemo } from "react";
import "./ResetLinkOptions.css";

const ResetLinkOptions = ({
  className = "",
  howToResetMyPasswordForMy,
  howCanICreateMyUbigiAccou,
  propBackgroundImage,
  propBackgroundImage1,
  propMarginTop,
}) => {
  const linkHeading34Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const linkHeading35Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
      marginTop: propMarginTop,
    };
  }, [propBackgroundImage1, propMarginTop]);

  return (
    <div className={`reset-link-options ${className}`}>
      <div className="link-heading-3103" style={linkHeading34Style}>
        <div className="how-to-reset1">{howToResetMyPasswordForMy}</div>
      </div>
      <div className="link-heading-3104" style={linkHeading35Style}>
        <div className="how-can-i27">{howCanICreateMyUbigiAccou}</div>
      </div>
    </div>
  );
};

ResetLinkOptions.propTypes = {
  className: PropTypes.string,
  howToResetMyPasswordForMy: PropTypes.string,
  howCanICreateMyUbigiAccou: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propMarginTop: PropTypes.any,
};

export default ResetLinkOptions;
