import { Button } from "@mui/material";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <section className={`background27 ${className}`}>
      <footer className="newsletter-content1">
        <div className="newsletter-container">
          <div className="newsletter-wrapper">
            <div className="newsletter-form1">
              <Button
                className="backgroundshadow8"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#191919",
                  fontSize: "18",
                  background: "#fff",
                  borderRadius: "8px 8px 0px 0px",
                  "&:hover": { background: "#fff" },
                  width: 300,
                  height: 48,
                }}
              >
                Great
              </Button>
              <div className="newsletter-input">
                <div className="input-container">
                  <img
                    className="group-icon1"
                    loading="lazy"
                    alt=""
                    src="/group@2x.png"
                  />
                  <div className="newsletter-checkbox">
                    <div className="checkbox-container">
                      <img
                        className="groupe-5170-icon1"
                        alt=""
                        src="/groupe-5170.svg"
                      />
                    </div>
                    <div className="ubigis-newsletter1">Ubigi's newsletter</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter-description1">
              <p className="get-fresh-news-container1">
                <span className="get-fresh-news1">
                  Get fresh news about Ubigi, our promotions
                </span>
                <span className="and-our-latest-data-plan1">
                  and our latest data plan releases.
                </span>
              </p>
            </div>
          </div>
          <div className="newsletter-container1">
            <div className="email-input-wrapper">
              <div className="input3">
                <div className="enter-your-email1">Enter your email</div>
              </div>
              <div className="checkbox-wrapper">
                <img className="image-icon11" alt="" src="/image-8.svg" />
                <div className="yes-send-me-container">
                  <span>Yes, send me only good news!</span>
                  <span className="span">{` `}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="subscription-button-wrapper">
            <div className="subscription-button-container">
              <img
                className="newsletter-element-rightsvg-icon1"
                loading="lazy"
                alt=""
                src="/newsletterelementrightsvg.svg"
              />
              <div className="input4">
                <div className="subscribe1">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="your-email-address-container2">
        <span className="your-email-address-container3">
          {`Your email address is used by Transatel for marketing and commercial purposes about the Ubigi brand. To know our personal data and confidentiality policy, and to know more about your rights, `}
          <span className="click-here1">click here</span>.
        </span>
      </p>
    </section>
  );
};



export default Background1;
