import ScanQRInstructions from "./ScanQRInstructions";
import PropTypes from "prop-types";
import "./Section2.css";

const Section2 = ({ className = "" }) => {
  return (
    <section className={`section16 ${className}`}>
      <div className="choose-data-plan-container">
        <div className="heading-38">
          Choose your data plan today and activate before your trip!
        </div>
      </div>
      <div className="select-data-plan-container-parent">
        <div className="select-data-plan-container">
          <div className="data-plan-steps">
            <img className="svg-icon33" alt="" src="/svg-141.svg" />
          </div>
          <div className="select-plan-instructions">
            <h3 className="heading-48">Select your data plan</h3>
            <div className="select-plan-description">
              <div className="and-receive-it-container">
                <p className="and-receive-it">and receive it by</p>
                <p className="qr-code-via">QR code via email.</p>
                <p className="quick">Quick!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="activation-steps">
          <div className="scan-q-r-instructions1">
            <div className="scan-q-r-icons">
              <img className="svg-icon34" alt="" src="/svg-151.svg" />
            </div>
            <div className="scan-q-r-label-container">
              <div className="scan-q-r-label">
                <h3 className="heading-49">Scan the QR code</h3>
              </div>
              <p className="to-activate-the-container">
                <span className="to-activate-the">
                  to activate the data plan and
                </span>
                <span className="install-the-ubigi">
                  install the Ubigi eSIM.
                </span>
                <span className="simple">Simple!</span>
              </p>
            </div>
          </div>
          <ScanQRInstructions
            sVG="/svg-161.svg"
            heading4CreateYourAccount="Create your account"
            toStartUsingYourDataPlanC="to start using your data plan, check"
            yourBalanceAndTopUpOnTheG="your balance and top up on the go."
            enjoy="Enjoy!"
          />
        </div>
      </div>
    </section>
  );
};

Section2.propTypes = {
  className: PropTypes.string,
};

export default Section2;
