import Background7 from "../components/Background7";
import BackgroundShadow1 from "../components/BackgroundShadow1";
import FrameComponent2 from "../components/FrameComponent2";
import Background8 from "../components/Background8";
import Footer1 from "../components/Footer1";
import "./SelfAssistance.css";

const SelfAssistance = () => {
  return (
    <div className="selfassistance">
      <main className="header">
        <Background7
          linkUbigiCartsvg="/link--ubigicartsvg@2x.png"
          hELPCENTERColor="#fff"
        />
        <section className="background16">
          <BackgroundShadow1 />
          <FrameComponent2 />
        </section>
      </main>
      <Background8 />
      <Footer1 />
    </div>
  );
};

export default SelfAssistance;
