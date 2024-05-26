import { useMemo } from "react";
import "./ArticleLinks1.css";

const ArticleLinks1 = ({
  className = "",
  howDoIActivateMyUbigiServ,
  deviceEquippedWithAUbigiP,
  howDoIActivateMyUbigiServ1,
  laptopOrTabletEquippedWit,
  howCanIBuyADataPlanFromTh,
  iPad,
  propAlignSelf,
}) => {
  const linkHeading38Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={`article-links12 ${className}`}>
      <div className="link-heading-3107">
        <div className="how-do-i-container9">
          <span className="how-do-i-container10">
            <p className="how-do-i8">{howDoIActivateMyUbigiServ}</p>
            <p className="device-equipped-with1">{deviceEquippedWithAUbigiP}</p>
          </span>
        </div>
      </div>
      <div className="link-heading-3108" style={linkHeading38Style}>
        <div className="how-do-i-container11">
          <span className="how-do-i-container12">
            <p className="how-do-i9">{howDoIActivateMyUbigiServ1}</p>
            <p className="laptop-or-tablet1">{laptopOrTabletEquippedWit}</p>
          </span>
        </div>
      </div>
      <div className="link-heading-3109">
        <div className="how-can-i-container16">
          <p className="how-can-i28">{howCanIBuyADataPlanFromTh}</p>
          <p className="ipad1">{iPad}</p>
        </div>
      </div>
    </div>
  );
};

ArticleLinks1.propTypes = {
  className: PropTypes.string,
  howDoIActivateMyUbigiServ: PropTypes.string,
  deviceEquippedWithAUbigiP: PropTypes.string,
  howDoIActivateMyUbigiServ1: PropTypes.string,
  laptopOrTabletEquippedWit: PropTypes.string,
  howCanIBuyADataPlanFromTh: PropTypes.string,
  iPad: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default ArticleLinks1;
