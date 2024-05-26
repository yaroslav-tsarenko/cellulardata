import { useMemo } from "react";
import "./ArticleLinks.css";

const ArticleLinks = ({
  className = "",
  mobileDataIsAppliedToTheU,
  deviceButImpossibleToAcce,
  howDoICheckTheAPNConfigur,
  orWindows11,
  canIMakePhoneCallsWithUbi,
  propAlignSelf,
}) => {
  const linkHeading39Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={`article-links13 ${className}`}>
      <div className="link-heading-3110" style={linkHeading39Style}>
        <div className="mobile-data-is-container2">
          <p className="mobile-data-is2">{mobileDataIsAppliedToTheU}</p>
          <p className="device-but-impossible">{deviceButImpossibleToAcce}</p>
        </div>
      </div>
      <div className="link-heading-3111">
        <div className="how-do-i-container13">
          <p className="how-do-i10">{howDoICheckTheAPNConfigur}</p>
          <p className="or-windows-112">{orWindows11}</p>
        </div>
      </div>
      <div className="link-heading-3112">
        <div className="can-i-make">{canIMakePhoneCallsWithUbi}</div>
      </div>
    </div>
  );
};

ArticleLinks.propTypes = {
  className: PropTypes.string,
  mobileDataIsAppliedToTheU: PropTypes.string,
  deviceButImpossibleToAcce: PropTypes.string,
  howDoICheckTheAPNConfigur: PropTypes.string,
  orWindows11: PropTypes.string,
  canIMakePhoneCallsWithUbi: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default ArticleLinks;
