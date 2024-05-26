import { useMemo } from "react";
import "./ResetOptions1.css";

const ResetOptions1 = ({
  className = "",
  howCanIEnableMyUbigiESIMO,
  toUseItAgain,
  howCanIDisableMyUbigiESIM,
  orWhenIDoNotUseIt,
  propAlignSelf,
  propBackgroundImage,
  propAlignSelf1,
  propBackgroundImage1,
  propAlignSelf2,
  propDebugCommit,
}) => {
  const resetOptionsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const linkHeading3Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      alignSelf: propAlignSelf1,
    };
  }, [propBackgroundImage, propAlignSelf1]);

  const linkHeading31Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
      alignSelf: propAlignSelf2,
    };
  }, [propBackgroundImage1, propAlignSelf2]);

  const howCanIContainerStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  return (
    <div className={`reset-options1 ${className}`} style={resetOptionsStyle}>
      <div className="link-heading-399" style={linkHeading3Style}>
        <div className="how-can-i-container14">
          <p className="how-can-i25">{howCanIEnableMyUbigiESIMO}</p>
          <p className="to-use-it">{toUseItAgain}</p>
        </div>
      </div>
      <div className="link-heading-3100" style={linkHeading31Style}>
        <div className="how-can-i-container15" style={howCanIContainerStyle}>
          <p className="how-can-i26">{howCanIDisableMyUbigiESIM}</p>
          <p className="or-when-i">{orWhenIDoNotUseIt}</p>
        </div>
      </div>
    </div>
  );
};

ResetOptions1.propTypes = {
  className: PropTypes.string,
  howCanIEnableMyUbigiESIMO: PropTypes.string,
  toUseItAgain: PropTypes.string,
  howCanIDisableMyUbigiESIM: PropTypes.string,
  orWhenIDoNotUseIt: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propDebugCommit: PropTypes.any,
};

export default ResetOptions1;
