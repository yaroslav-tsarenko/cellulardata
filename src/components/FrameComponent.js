import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`ubigi-app-starssvg-parent ${className}`}>
      <img
        className="ubigi-app-starssvg-icon"
        alt=""
        src="/ubigiappstarssvg@2x.png"
      />
      <div className="app-install-description">
        <p className="not-travelling-yet-container">
          <span className="not-travelling-yet">Not travelling yet?</span>
          <span className="get-ready-for">Get ready for your next trip</span>
          <span className="with-the-ubigi-app">with the Ubigi app.</span>
        </p>
        <p className="install-the-ubigi-container">
          <span className="install-the-ubigi">
            Install the Ubigi eSIM for free through our app now and create your
            account,
          </span>
          <span className="so-its-ready-to">
            so it's ready to top up when needed.
          </span>
        </p>
      </div>
      <div className="app-install-qr-code">
        <div className="qr-code-image">
          <img
            className="ubigi-qr-codesvg-icon"
            alt=""
            src="/ubigiqrcodesvg.svg"
          />
        </div>
        <div className="download-app">
          <div className="download-the-ubigi">Download the Ubigi App</div>
          <div className="store-badges">
            <img
              className="link-ubigi-app-store-badges"
              alt=""
              src="/link--ubigiappstorebadgesvg.svg"
            />
            <img
              className="link-ubigi-google-play-badge"
              alt=""
              src="/link--ubigigoogleplaybadgesvg@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
