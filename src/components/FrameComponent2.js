import { Button } from "@mui/material";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`image-container-wrapper ${className}`}>
      <div className="image-container1">
        <div className="image-wrapper1">
          <div className="en-android-1-1png-parent">
            <img
              className="en-android-1-1png-icon"
              loading="lazy"
              alt=""
              src="/enandroid11png@2x.png"
            />
            <div className="backgroundborder3" />
          </div>
          <div className="steps">
            <img
              className="step-1-1png-icon"
              loading="lazy"
              alt=""
              src="/step11png@2x.png"
            />
            <div className="step-description">
              <div className="e-s-i-m-check">
                <p className="first-check-if-container">
                  <span className="first-check-if">
                    First, check if the Ubigi eSIM profile is installed on
                  </span>
                  <span className="your-device">your device.</span>
                </p>
                <div className="settings-instruction">
                  <p className="go-to-settings-container">
                    <span className="go-to-settings">{`Go to: Settings > Connections > SIM card manager > under`}</span>
                    <span className="esims-youll-see">
                      eSIMs: You’ll see there the installed eSIM profile appear.
                    </span>
                  </p>
                </div>
                <p className="if-your-esim-container">
                  <span>{`If your eSIM profile is already installed, `}</span>
                  <span className="go-to-step">go to step 2</span>
                  <span>.</span>
                </p>
                <p className="if-no-esim-container">
                  <span className="if-no-esim-is-installed-yet-g">
                    <span className="if-no-esim">{`If no eSIM is installed yet, go to `}</span>
                    <span className="get-started4">Get started</span>
                    <span> and follow instructions</span>
                  </span>
                  <span className="for-your-device">
                    <span>for your device</span>
                  </span>
                </p>
                <p className="if-you-deleted-container">
                  <span className="if-you-deleted-your-esim-profi">
                    <span>
                      If you deleted your eSIM profil, please follow
                      instructions on this
                    </span>
                  </span>
                  <span className="link12">
                    <span className="link13">link</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="divider-image">
            <img
              className="image-icon14"
              loading="lazy"
              alt=""
              src="/image3@2x.png"
            />
          </div>
        </div>
        <div className="button-container1">
          <Button
            className="link-button"
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "18",
              background: "#008fa4",
              border: "#008fa4 solid 2px",
              borderRadius: "100px",
              "&:hover": { background: "#008fa4" },
              width: 147.3,
              height: 46,
            }}
          >
            go to step 2
          </Button>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent2;
