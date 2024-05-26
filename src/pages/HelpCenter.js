import Background7 from "../components/Background7";
import HelpCenterContent from "../components/HelpCenterContent";
import Footer from "../components/Footer";
import "./HelpCenter.css";

const HelpCenter = () => {
  return (
    <div className="helpcenter">
      <main className="section5">
        <section className="background-group">
          <Background7 linkUbigiCartsvg="/link--ubigicartsvg1@2x.png" />
          <HelpCenterContent />
        </section>
        <div className="shadow-container">
          <div className="backgroundshadow1">
            <div className="great1">Great</div>
            <img className="img-icon2" loading="lazy" alt="" src="/img.svg" />
            <img className="img-icon3" alt="" src="/img-1.svg" />
          </div>
        </div>
      </main>
      <Footer
        bestMvno2023svg="/best-mvno-2023svg@2x.png"
        logoNTTpng="/logonttpng@2x.png"
        propDebugCommit="unset"
        propDebugCommit1="unset"
        propMargin="0"
      />
    </div>
  );
};

export default HelpCenter;
