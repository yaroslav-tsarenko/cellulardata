import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background17 ${className}`}>
      <div className="newsletter-content">
        <div className="newsletter-form">
          <div className="newsletter-left-element-parent">
            <div className="newsletter-left-element">
              <div className="newsletter-element-leftsvg-wrapper">
                <div className="newsletter-element-leftsvg">
                  <img className="group-icon" alt="" src="/group@2x.png" />
                  <img
                    className="groupe-5170-icon"
                    alt=""
                    src="/groupe-5170.svg"
                  />
                </div>
              </div>
              <div className="ubigis-newsletter">Ubigi's newsletter</div>
            </div>
            <div className="email-input">
              <div className="input1">
                <div className="enter-your-email">Enter your email</div>
              </div>
            </div>
            <div className="newsletter-element-rightsvg-wrapper">
              <img
                className="newsletter-element-rightsvg-icon"
                alt=""
                src="/newsletterelementrightsvg.svg"
              />
            </div>
          </div>
          <div className="newsletter-description">
            <div className="frame-parent6">
              <div className="get-fresh-news-about-ubigi-ou-parent">
                <p className="get-fresh-news-container">
                  <span className="get-fresh-news">
                    Get fresh news about Ubigi, our promotions
                  </span>
                  <span className="and-our-latest-data-plan">
                    and our latest data plan releases.
                  </span>
                </p>
                <div className="checkbox">
                  <div className="image-parent">
                    <img className="image-icon9" alt="" src="/image-8.svg" />
                    <div className="yes-send-me">{`Yes, send me only good news! `}</div>
                  </div>
                </div>
              </div>
              <div className="input2">
                <div className="subscribe">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="your-email-address-container">
        <span className="your-email-address-container1">
          {`Your email address is used by Transatel for marketing and commercial purposes about the Ubigi brand. To know our personal data and confidentiality policy, and to know more about your rights, `}
          <span className="click-here">click here</span>.
        </span>
      </p>
    </div>
  );
};


export default Background;
