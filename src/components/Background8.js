import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./Background8.css";

const Background8 = ({ className = "" }) => {
  return (
    <footer className={`background36 ${className}`}>
      <div className="newsletter">
        <div className="newsletter-container2">
          <div className="newsletter-content2">
            <div className="newsletter-form2">
              <div className="newsletter-left">
                <div className="newsletter-element-leftsvg2">
                  <img
                    className="group-icon3"
                    loading="lazy"
                    alt=""
                    src="/group@2x.png"
                  />
                  <img
                    className="groupe-5170-icon3"
                    loading="lazy"
                    alt=""
                    src="/groupe-5170.svg"
                  />
                </div>
              </div>
              <div className="ubigis-newsletter3">Ubigi's newsletter</div>
            </div>
            <div className="email-input-container">
              <TextField
                className="input7"
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "44px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#868e96" },
                }}
              />
            </div>
            <div className="newsletter-right">
              <img
                className="newsletter-element-rightsvg-icon3"
                loading="lazy"
                alt=""
                src="/newsletterelementrightsvg.svg"
              />
            </div>
          </div>
          <div className="newsletter-description2">
            <div className="description-container">
              <div className="description-content">
                <p className="get-fresh-news-container3">
                  <span className="get-fresh-news3">
                    Get fresh news about Ubigi, our promotions
                  </span>
                  <span className="and-our-latest-data-plan3">
                    and our latest data plan releases.
                  </span>
                </p>
                <div className="checkbox1">
                  <div className="checkbox-content1">
                    <input className="image1" type="checkbox" />
                    <div className="yes-send-me-container2">
                      <span>Yes, send me only good news!</span>
                      <span className="span2">{` `}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="input8"
                disableElevation={true}
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "18",
                  background: "#000",
                  border: "#000 solid 2px",
                  borderRadius: "30px",
                  "&:hover": { background: "#000" },
                  width: 145.7,
                  height: 48,
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <p className="your-email-address-container6">
        <span className="your-email-address-container7">
          {`Your email address is used by Transatel for marketing and commercial purposes about the Ubigi brand. To know our personal data and confidentiality policy, and to know more about your rights, `}
          <span className="click-here3">click here</span>.
        </span>
      </p>
    </footer>
  );
};


export default Background8;
