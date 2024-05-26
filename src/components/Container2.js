import { useMemo } from "react";
import "./Container2.css";

const Container2 = ({
  className = "",
  background,
  checkESIM,
  profileActivation,
  propMarginLeft,
}) => {
  const container1Style = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={`container23 ${className}`} style={container1Style}>
      <img className="background-icon7" alt="" src={background} />
      <div className="background-frame">
        <div className="background33">
          <div className="check-esim-profile-container">
            <p className="check-esim">{checkESIM}</p>
            <p className="profile-activation">{profileActivation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Container2;
