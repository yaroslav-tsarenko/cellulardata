import { useMemo } from "react";
import "./ResetOptions.css";

const ResetOptions = ({
  className = "",
  howToDeleteAUbigiESIMProf,
  howToDeleteAUbigiESIMProf1,
  device,
  propBackgroundImage,
  propBackgroundImage1,
  propAlignSelf,
  resetOptionsAlignSelf,
  resetOptionsWidth,
}) => {
  const linkHeading32Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const linkHeading33Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundImage1, propAlignSelf]);

  const resetOptions1Style = useMemo(() => {
    return {
      alignSelf: resetOptionsAlignSelf,
      width: resetOptionsWidth,
    };
  }, [resetOptionsAlignSelf, resetOptionsWidth]);

  return (
    <div className={`reset-options2 ${className}`} style={resetOptions1Style}>
      <div className="link-heading-3101" style={linkHeading32Style}>
        <div className="how-to-delete5">{howToDeleteAUbigiESIMProf}</div>
      </div>
      <div className="link-heading-3102" style={linkHeading33Style}>
        <div className="how-to-delete-container1">
          <p className="how-to-delete6">{howToDeleteAUbigiESIMProf1}</p>
          <p className="device6">{device}</p>
        </div>
      </div>
    </div>
  );
};

ResetOptions.propTypes = {
  className: PropTypes.string,
  howToDeleteAUbigiESIMProf: PropTypes.string,
  howToDeleteAUbigiESIMProf1: PropTypes.string,
  device: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propBackgroundImage1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  resetOptionsAlignSelf: PropTypes.any,
  resetOptionsWidth: PropTypes.any,
};

export default ResetOptions;
