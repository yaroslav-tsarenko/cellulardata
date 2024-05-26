import GreatContainer from "./GreatContainer";
import PropTypes from "prop-types";
import "./ICCIDENxpng.css";

const ICCIDENxpng = ({ className = "" }) => {
  return (
    <div className={`i-c-c-i-d-e-nxpng ${className}`}>
      <div className="background-border">
        <div className="newsletterelementleftsvg">
          <div className="newsletterelementrightsvg">
            <GreatContainer
              propPadding="564.5px 0px 0px"
              propMinWidth="300px"
            />
            <div className="heading">
              <p className="the-iccid-is-container">
                <span className="the-iccid-is">
                  The ICCID is the reference used to identity your eSIM. It
                  consists in 19 digits, starting
                </span>
                <span className="with-8988247">with “8988247…” .</span>
              </p>
              <div className="advanced-cellular-settings-e-n">
                <p className="it-can-be">
                  It can be found in the original email we sent you with the
                  Ubigi eSIM QR code.
                </p>
                <p className="it-can-also">
                  It can also be found in the emails we sent you when you
                  purchased a data plan.
                </p>
                <p className="but-if-needed">
                  But if needed, you can always retrieve it in your device’s
                  settings:
                </p>
                <p className="strong-on-container1">
                  <span className="on-ios">
                    <span className="on-ios1">On iOS</span>
                  </span>
                  <span className="go-to-settings-general-inf">
                    <span className="go-to-settings2">{`Go to Settings > General > Information, and scroll all the way down to the “ICCID” field.`}</span>
                  </span>
                  <span className="only-iccid-for-active-esims-ar">
                    <span className="only-iccid-for">
                      (Only ICCID for active eSIMs are displayed).
                    </span>
                  </span>
                </p>
                <p className="strong-on-container2">
                  <span className="on-android">
                    <span className="on-android1">On Android</span>
                  </span>
                  <span className="go-to-settings-then-about-ph">
                    <span className="go-to-settings3">
                      Go to Settings, then “About phone”, and tap “SIM Status”.
                      The ICCID will then be
                    </span>
                  </span>
                  <span className="displayed">
                    <span className="displayed1">displayed.</span>
                  </span>
                </p>
                <div className="strong-on-windows-10-parent">
                  <p className="strong-on-container3">
                    <span>
                      <span className="on-windows-10-nb-instruction">
                        <span className="on-windows-10">{`On Windows 10 `}</span>
                        <span className="nb-instructions-for">
                          (NB: instructions for Windows 11 at the bottom of the
                          page)
                        </span>
                      </span>
                      <span className="to-find-your-esims-iccid">
                        <span className="to-find-your">
                          To find your eSIM’s ICCID:
                        </span>
                      </span>
                      <span className="go-to-settings-then-networ">
                        <span className="go-to-settings4">{`– Go to “Settings”, then “Networks & Internet”:`}</span>
                      </span>
                    </span>
                  </p>
                  <img
                    className="settings-en-300x200png-icon"
                    loading="lazy"
                    alt=""
                    src="/settingsen300x200png@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border2">
          <img className="image-icon26" alt="" src="/image-11@2x.png" />
          <div className="heading-2-contact-wrapper">
            <div className="heading-218">Contact</div>
          </div>
          <div className="you-havent-found-the-answers-wrapper">
            <p className="you-havent-found-container1">
              <span>
                <span className="you-havent-found-the-answers1">
                  <span>You haven’t found the answers</span>
                </span>
                <span className="to-your-questions-in-assistanc1">
                  <span>to your questions in Assistance or </span>
                  <span className="faq1">FAQ</span>
                  <span className="span2">?</span>
                </span>
              </span>
            </p>
          </div>
          <div className="link-button-wrapper">
            <button className="link-button3">
              <div className="contact-us1">Contact us</div>
            </button>
          </div>
        </div>
      </div>
      <img
        className="container-icon3"
        loading="lazy"
        alt=""
        src="/container1@2x.png"
      />
    </div>
  );
};

ICCIDENxpng.propTypes = {
  className: PropTypes.string,
};

export default ICCIDENxpng;
