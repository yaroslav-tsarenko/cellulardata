import Background3 from "../components/Background3";
import PlanContainer from "../components/PlanContainer";
import FrameComponent1 from "../components/FrameComponent1";
import Background2 from "../components/Background2";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import FrameComponent from "../components/FrameComponent";
import SubscriptionBenefits from "../components/SubscriptionBenefits";
import Footer2 from "../components/Footer2";
import "./EsimJapan.css";

const EsimJapan = () => {
  return (
    <div className="esimjapan">
      <section className="header">
        <Background3 />
        <div className="background8">
          <PlanContainer />
          <FrameComponent1 />
        </div>
      </section>
      <Background2 />
      <Section2 />
      <Section1 />
      <section className="background9">
        <div className="heading-2-secure-payment-wrapper">
          <div className="heading-214">Secure payment</div>
        </div>
        <img
          className="container-icon2"
          loading="lazy"
          alt=""
          src="/container@2x.png"
        />
      </section>
      <div className="horizontal-divider1" />
      <div className="item-link">{`Terms & Conditions`}</div>
      <div className="item-link1">Legal notice</div>
      <div className="item-link2">Cookie Declaration</div>
      <div className="ubigi-2024">
        Ubigi © 2024, Ltd. All rights reserved. Ubigi is an NTT service.
      </div>
      <img className="logo-nttpng-icon" alt="" src="/logonttpng@2x.png" />
      <section className="background10">
        <FrameComponent />
        <SubscriptionBenefits />
        <div className="privacy-policy">
          <p className="your-email-address-container">
            <span className="your-email-address-container1">
              {`Your email address is used by Transatel for marketing and commercial purposes about the Ubigi brand. To know our personal data and confidentiality policy, and to know more about your rights, `}
              <span className="click-here">click here</span>.
            </span>
          </p>
        </div>
        <Footer2 />
      </section>
    </div>
  );
};

export default EsimJapan;
