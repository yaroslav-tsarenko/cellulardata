import Background1 from "./Background1";
import Footer1 from "./Footer1";
import PropTypes from "prop-types";
import "./Newsletter.css";

const Newsletter = ({ className = "" }) => {
  return (
    <div className={`newsletter ${className}`}>
      <Background1 group="/group@2x.png" />
      <Footer1
        bestMvno2023svg="/best-mvno-2023svg@2x.png"
        logoNTTpng="/logonttpng@2x.png"
      />
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
