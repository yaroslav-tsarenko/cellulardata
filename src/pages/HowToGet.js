import Background6 from "../components/Background6";
import Background5 from "../components/Background5";
import Background4 from "../components/Background4";
import Background3 from "../components/Background3";
import Footer from "../components/Footer";
import "./HowToGet.css";

const HowToGet = () => {
  return (
    <div className="howtoget">
      <div className="horizontal-divider1">
        <div className="background9">
          <img className="background-icon" alt="" src="/background1@2x.png" />
          <div className="background10">
            <div className="go-to-the">Go to the Ubigi Selfcare app</div>
          </div>
        </div>
        <div className="background11">
          <img className="background-icon1" alt="" src="/background-1@2x.png" />
          <div className="background12">
            <div className="go-to-top">Go to Top up</div>
          </div>
        </div>
        <div className="background13">
          <img
            className="background-icon2"
            alt=""
            src="/background-21@2x.png"
          />
          <div className="background14">
            <div className="choose-your-data">Choose your data plan</div>
          </div>
        </div>
        <img className="background-icon3" alt="" src="/background-3@2x.png" />
        <div className="make-a-payment">Make a payment</div>
      </div>
      <section className="background-parent">
        <Background6 />
        <img className="background-icon4" alt="" src="/background-4@2x.png" />
      </section>
      <section className="background15">
        <Background5 />
      </section>
      <Background4 />
      <Background3 />
      <Footer
        bestMvno2023svg="/best-mvno-2023svg@2x.png"
        logoNTTpng="/logonttpng@2x.png"
        propDebugCommit="unset"
        propDebugCommit1="unset"
        propMargin="unset"
      />
    </div>
  );
};

export default HowToGet;
