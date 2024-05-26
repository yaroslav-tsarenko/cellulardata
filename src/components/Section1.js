import Benefit from "./Benefit";
import ScanQRInstructions from "./ScanQRInstructions";
import PropTypes from "prop-types";
import "./Section1.css";

const Section1 = ({ className = "" }) => {
  return (
    <section className={`section17 ${className}`}>
      <div className="why-ubigi-container">
        <h1 className="heading-12">
          Why Ubigi international eSIM is so great?
        </h1>
      </div>
      <div className="benefits-container-parent">
        <div className="benefits-container">
          <div className="benefit-list">
            <div className="benefit1">
              <div className="benefit-icon-container">
                <img className="svg-icon36" alt="" src="/svg-171.svg" />
              </div>
              <div className="benefit-description">
                <div className="benefit-title-container">
                  <div className="heading-51">Instant activation</div>
                </div>
                <div className="get-a-qr-container">
                  <p className="get-a-qr">Get a QR code via email in minutes</p>
                  <p className="and-scan-it">and scan it</p>
                </div>
              </div>
            </div>
            <Benefit
              sVG="/svg-181.svg"
              heading5Global="Global"
              worldwideHighQualityCellu="Worldwide high-quality cellular"
              connectivityIn200Destinat="connectivity in 200+ destinations"
            />
            <Benefit
              sVG="/svg-191.svg"
              heading5Global="Cost-effective"
              worldwideHighQualityCellu="Up to 90% cheaper than roaming"
              connectivityIn200Destinat="charges with your existing carrier"
              propWidth="274px"
              propDisplay="unset"
              propMinWidth="unset"
              propFlex="1"
            />
            <div className="benefit2">
              <div className="svg-wrapper4">
                <img className="svg-icon37" alt="" src="/svg-201.svg" />
              </div>
              <div className="frame-parent6">
                <div className="heading-5-easy-top-up-wrapper">
                  <h3 className="heading-52">Easy top up</h3>
                </div>
                <p className="anywhere-via-the-container">
                  <span>
                    <span className="anywhere-via-the">
                      Anywhere via the Ubigi app, even
                    </span>
                    <span className="without-wi-fi-or">
                      without Wi-Fi or remaining data
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="effortless-benefits">
          <div className="effortless-benefit-list">
            <div className="effortless-benefit-icon-contai">
              <img className="svg-icon38" alt="" src="/svg-211.svg" />
            </div>
            <div className="effortless-benefit-description">
              <div className="effortless-benefit-title">
                <h3 className="heading-53">Effortless</h3>
              </div>
              <p className="no-need-to-container">
                <span className="no-need-to">
                  No need to remove your existing
                </span>
                <span className="sim-card">SIM card</span>
              </p>
            </div>
          </div>
          <div className="effortless-benefit-list1">
            <div className="svg-wrapper5">
              <img className="svg-icon39" alt="" src="/svg-22.svg" />
            </div>
            <div className="frame-parent7">
              <div className="heading-5-always-ready-to-us-wrapper">
                <div className="heading-54">Always ready to use</div>
              </div>
              <p className="install-your-esim-container">
                <span className="install-your-esim">
                  Install your eSIM once and activate
                </span>
                <span className="a-data-plan">a data plan when needed</span>
              </p>
            </div>
          </div>
          <div className="multi-device-benefits">
            <div className="multi-device-benefit-icon-cont">
              <img className="svg-icon40" alt="" src="/svg-23.svg" />
            </div>
            <div className="multi-device-benefit-title-con">
              <div className="heading-55">Multi device</div>
            </div>
            <p className="works-with-esim-container">
              <span className="works-with-esim">
                Works with eSIM compatible
              </span>
              <span className="smartphones-tablets-and1">
                smartphones, tablets and eSIM
              </span>
              <span className="laptop-with-windows">
                laptop with Windows 10/11
              </span>
            </p>
          </div>
          <ScanQRInstructions
            sVG="/svg-24.svg"
            heading4CreateYourAccount="More secure"
            toStartUsingYourDataPlanC="Safer than public Wi-Fi hotspots at"
            yourBalanceAndTopUpOnTheG="airports, coffee shops or hotels."
            enjoy="Encrypted data connection."
            propFlex="unset"
            propGap="12.5px"
            propMinWidth="unset"
            propWidth="276.6px"
            propWidth1="42.9px"
            propGap1="8px"
            propColor="#fff"
            propColor1="#fff"
          />
        </div>
      </div>
    </section>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
