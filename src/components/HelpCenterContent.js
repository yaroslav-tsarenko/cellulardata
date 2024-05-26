import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./HelpCenterContent.css";

const HelpCenterContent = ({ className = "" }) => {
  return (
    <div className={`help-center-content ${className}`}>
      <div className="help-center-wrapper2">
        <div className="help-center-title">
          <div className="heading-11">Help center</div>
        </div>
        <div className="help-center-subheading">
          <p className="heading-22">
            You will find answers to frequently asked questions about eSIM and
            Ubigi services.
          </p>
        </div>
        <div className="search-container">
          <TextField
            className="form-input"
            placeholder="Search"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d7d7d7" },
              "& .MuiInputBase-root": {
                height: "85.6px",
                borderRadius: "8px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#808080" },
              width: "450px",
            }}
          />
        </div>
        <div className="frame-parent12">
          <div className="faq-container-parent">
            <div className="faq-container">
              <img
                className="faq-iconsvg"
                loading="lazy"
                alt=""
                src="/faqiconsvg.svg"
              />
            </div>
            <div className="faq-content">
              <a className="heading-34">FAQ</a>
            </div>
            <p className="what-you-need-container">
              <span className="what-you-need">
                What you need to know about eSIM,
              </span>
              <span className="the-ubigi-offer-and-support">
                the Ubigi offer and support
              </span>
            </p>
            <div className="faq-link-container">
              <Button
                className="link9"
                disableElevation={true}
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "18",
                  background: "#008fa4",
                  border: "#008fa4 solid 2px",
                  borderRadius: "60px",
                  "&:hover": { background: "#008fa4" },
                  height: 44.2,
                }}
              >
                Go to faq
              </Button>
            </div>
          </div>
          <div className="troubleshooting-container">
            <div className="troubleshooting-wrapper">
              <img
                className="troubleshooting-iconsvg"
                loading="lazy"
                alt=""
                src="/troubleshootingiconsvg.svg"
              />
            </div>
            <div className="heading-35">Troubleshooting</div>
            <p className="resolve-a-connectivity-issue-container">
              <span className="resolve-a-connectivity-issue">
                Resolve a connectivity issue by
              </span>
              <span className="following-detailed-instruction">
                following detailed instructions
              </span>
            </p>
            <div className="troubleshooting-link-container">
              <Button
                className="link10"
                disableElevation={true}
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "18",
                  background: "#008fa4",
                  border: "#008fa4 solid 2px",
                  borderRadius: "60px",
                  "&:hover": { background: "#008fa4" },
                  height: 44.2,
                }}
              >
                Start
              </Button>
            </div>
          </div>
          <div className="tutorials-container">
            <div className="tutorials-wrapper">
              <img
                className="tutorials-iconsvg"
                loading="lazy"
                alt=""
                src="/tutorialsiconsvg.svg"
              />
            </div>
            <div className="tutorials-content">
              <div className="heading-36">Tutorials</div>
            </div>
            <p className="all-our-official-container">
              <span>
                <span className="all-our-official">
                  All our official tutorials to learn
                </span>
                <span className="how-to-use-ubigi">how to use Ubigi</span>
              </span>
            </p>
            <div className="tutorials-link-container">
              <Button
                className="link11"
                disableElevation={true}
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "18",
                  background: "#008fa4",
                  border: "#008fa4 solid 2px",
                  borderRadius: "60px",
                  "&:hover": { background: "#008fa4" },
                  height: 44.2,
                }}
              >
                Go to tutorials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HelpCenterContent;
