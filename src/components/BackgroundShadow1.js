import Container2 from "./Container2";
import PropTypes from "prop-types";
import "./BackgroundShadow1.css";

const BackgroundShadow1 = ({ className = "" }) => {
  return (
    <div className={`backgroundshadow10 ${className}`}>
      <div className="container24">
        <img
          className="background-icon8"
          loading="lazy"
          alt=""
          src="/background8.svg"
        />
        <div className="background-wrapper1">
          <div className="background34">
            <div className="check-esim-profile-container1">
              <p className="check-esim1">Check eSIM</p>
              <p className="profile-installation">profile installation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <Container2
          background="/background-11.svg"
          checkESIM="Check eSIM"
          profileActivation="profile activation"
        />
        <Container2
          background="/background-22.svg"
          checkESIM="Apply data"
          profileActivation="to eSIM profile"
          propMarginLeft="-0.1px"
        />
      </div>
      <div className="content-container1">
        <Container2
          background="/background-31.svg"
          checkESIM="Check APN"
          profileActivation="configuration"
          propMarginLeft="unset"
        />
        <Container2
          background="/background-41.svg"
          checkESIM="Check network"
          profileActivation="display"
          propMarginLeft="-0.1px"
        />
      </div>
      <div className="container25">
        <img className="background-icon9" alt="" src="/background-5.svg" />
        <div className="background-wrapper2">
          <div className="background35">
            <div className="final-checks">Final checks!</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BackgroundShadow1;
