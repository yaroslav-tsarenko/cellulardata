import "./Background3.css";

const Background3 = ({ className = "" }) => {
  return (
    <section className={`background31 ${className}`}>
      <div className="footer-content2">
        <div className="footer-top-parent">
          <div className="footer-top2">
            <div className="footer-logo">
              <div className="newsletter-element-leftsvg-container">
                <div className="newsletter-element-leftsvg1">
                  <img className="group-icon2" alt="" src="/group@2x.png" />
                  <img
                    className="groupe-5170-icon2"
                    alt=""
                    src="/groupe-5170.svg"
                  />
                </div>
              </div>
              <div className="ubigis-newsletter2">Ubigi's newsletter</div>
            </div>
            <div className="input-wrapper">
              <div className="input5">
                <div className="enter-your-email2">Enter your email</div>
              </div>
            </div>
            <div className="newsletter-element-rightsvg-container">
              <img
                className="newsletter-element-rightsvg-icon2"
                alt=""
                src="/newsletterelementrightsvg.svg"
              />
            </div>
          </div>
          <div className="news-description">
            <div className="news-button-content-parent">
              <div className="news-button-content">
                <p className="get-fresh-news-container2">
                  <span className="get-fresh-news2">
                    Get fresh news about Ubigi, our promotions
                  </span>
                  <span className="and-our-latest-data-plan2">
                    and our latest data plan releases.
                  </span>
                </p>
                <div className="checkbox-content-wrapper">
                  <div className="checkbox-content">
                    <img className="image-icon13" alt="" src="/image-8.svg" />
                    <div className="yes-send-me-container1">
                      <span>Yes, send me only good news!</span>
                      <span className="span1">{` `}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input6">
                <div className="subscribe2">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="your-email-address-container4">
        <span className="your-email-address-container5">
          {`Your email address is used by Transatel for marketing and commercial purposes about the Ubigi brand. To know our personal data and confidentiality policy, and to know more about your rights, `}
          <span className="click-here2">click here</span>.
        </span>
      </p>
    </section>
  );
};


export default Background3;
