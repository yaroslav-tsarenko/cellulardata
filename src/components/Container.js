import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <div className={`container9 ${className}`}>
      <img className="image-icon8" alt="" src="/image@2x.png" />
      <div className="gradient4" />
      <div className="gradient-parent">
        <div className="gradient5" />
        <div className="local">
          <span className="local-txt">
            <p className="p2">#3</p>
            <p className="local1">Local</p>
          </span>
        </div>
      </div>
      <div className="learn-more-wrapper">
        <div className="learn-more-link-button">
          <div className="link-learn1">Learn more</div>
          <div className="svg-wrapper2">
            <img className="svg-icon12" alt="" src="/svg-11@2x.png" />
          </div>
        </div>
      </div>
      <h1 className="when-choose-ubigi">When choose Ubigi?</h1>
    </div>
  );
};



export default Container;
