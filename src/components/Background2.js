import { Button } from "@mui/material";
import "./Background2.css";

const Background2 = ({ className = "" }) => {
  return (
    <section className={`background25 ${className}`}>
      <div className="container22">
        <div className="background26">
          <div className="q-r-code-content">
            <div className="q-r-code-instructions">
              <img
                className="steps-11svg-icon"
                loading="lazy"
                alt=""
                src="/steps-11svg.svg"
              />
              <div className="heading-3-get-your-qr-code-f-parent">
                <h3 className="heading-32">
                  Get your QR code for iPhone via email
                </h3>
                <div className="link-browse-container">
                  <span className="browse-our-catalog">Browse our catalog</span>
                  <span className="to-buy-a"> to buy a data plan.</span>
                </div>
              </div>
              <div className="email-info">
                <div className="email-content">
                  <div className="email-instructions">
                    <div className="email-delivery">
                      <p className="you-will-receive">{`You will receive your eSIM data plan in the form of a QR code `}</p>
                    </div>
                    <i className="please-allow-15">(please allow 15 minutes</i>
                  </div>
                  <div className="spam-check">
                    <i className="for-receipt-of">{`for receipt of the email and check your SPAM folder before contacting `}</i>
                    <a className="customer">customer</a>
                  </div>
                  <div className="service-info">
                    <i className="service">service</i>
                    <i className="placeholder">)</i>
                    <div className="placeholder1">.</div>
                  </div>
                </div>
                <div className="q-r-code-image">
                  <img
                    className="image-icon10"
                    loading="lazy"
                    alt=""
                    src="/image1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-buttons">
            <div className="button-container">
              <div className="button3" />
              <div className="button4" />
              <div className="button5" />
              <div className="button6" />
              <div className="button7" />
              <div className="button8" />
              <div className="button9" />
              <div className="button10" />
              <div className="button11" />
            </div>
            <div className="next-button-container">
              <Button
                className="button12"
                disableElevation={true}
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "18",
                  background: "#008fa4",
                  border: "#008fa4 solid 2px",
                  borderRadius: "100px",
                  "&:hover": { background: "#008fa4" },
                  width: 77.1,
                  height: 46,
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background2;
