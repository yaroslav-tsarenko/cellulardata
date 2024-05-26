import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import "./PlanContainer.css";

const PlanContainer = ({ className = "" }) => {
  return (
    <div className={`plan-container ${className}`}>
      <div className="plan-details">
        <div className="plan-title">
          <div className="plan-back">
            <div className="back-container">
              <div className="back-link">
                <img className="svg-icon23" alt="" src="/svg-1@2x.png" />
                <div className="back-to-list">Back to list</div>
              </div>
            </div>
            <div className="plan-name-container">
              <h1 className="heading-11">
                eSIM • JAPAN • 500MB • 1 day • $2.5
              </h1>
            </div>
            <div className="backgroundborder4">
              <div className="background21">
                <a className="usd">$ USD</a>
                <img className="svg-icon24" alt="" src="/svg-2.svg" />
              </div>
            </div>
          </div>
          <div className="plan-description">
            <p className="save-on-your">
              Save on your visit to Japan with the Ubigi eSIM 500MB data plan
              close to local rates. Get an eSIM data plan for Japan, scan the QR
              code received by email and enjoy instant Internet access. Easy
              recharge in the app. Convenient, prepaid and without commitment.
            </p>
          </div>
        </div>
        <div className="plan-benefits">
          <div className="benefit-container">
            <div className="benefit-details">
              <div className="backgroundborder5">
                <div className="benefit-visual">
                  <div className="benefit-icons">
                    <img
                      className="image-icon19"
                      loading="lazy"
                      alt=""
                      src="/image1@2x.png"
                    />
                    <div className="background22">
                      <div className="benefit-plan">
                        <div className="benefit-plan-details">
                          <div className="benefit-plan-icon">
                            <img
                              className="icon-ubigi-bundle-one-offsvg"
                              alt=""
                              src="/iconubigibundleoneoffsvg.svg"
                            />
                          </div>
                          <div className="benefit-country">
                            <img
                              className="japansvg-icon"
                              alt=""
                              src="/japansvg.svg"
                            />
                          </div>
                          <div className="benefit-network">
                            <img
                              className="gsvg-icon1"
                              alt=""
                              src="/5gsvg@2x.png"
                            />
                          </div>
                        </div>
                        <div className="benefit-data">
                          <div className="data-details">
                            <div className="data-amount">
                              <div className="japan">japan</div>
                            </div>
                            <div className="mb">500MB</div>
                          </div>
                        </div>
                        <div className="benefit-validity">
                          <h3 className="valid-1-day">valid 1 day</h3>
                        </div>
                      </div>
                      <div className="separator">
                        <div className="empty">$2.5</div>
                      </div>
                    </div>
                  </div>
                </div>
                <FormControl
                  className="background23"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fcc919",
                    borderRadius: "0px 0px 20px 20px",
                    width: "100%",
                    height: "32.30000000000018px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "32.30000000000018px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "32.30000000000018px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "32.30000000000018px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "32.30000000000018px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#fff",
                      fontSize: 17.6,
                      fontWeight: "Regular",
                      fontFamily: "Open Sans",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "144px",
                    },
                  }}
                >
                  <InputLabel color="warning" />
                  <Select
                    color="warning"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16.2px"
                        src="/arrowusageinfossvg.png"
                        style={{ marginRight: "138.30000000000018px" }}
                      />
                    )}
                  >
                    <MenuItem>Examples of use</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <div className="features">
              <div className="features-container">
                <div className="feature-list">
                  <div className="list-item2">
                    <img
                      className="list-blue-dotsvg-fill-icon"
                      loading="lazy"
                      alt=""
                      src="/listbluedotsvg-fill.svg"
                    />
                    <div className="one-time-data-plan">
                      One-time data plan.
                    </div>
                  </div>
                  <div className="list-item3">
                    <img
                      className="list-blue-dotsvg-fill-icon1"
                      alt=""
                      src="/listbluedotsvg-fill.svg"
                    />
                    <div className="easy-top-up">
                      Easy top up without Wi-Fi or data credit.
                    </div>
                  </div>
                  <div className="list-item4">
                    <img
                      className="list-blue-dotsvg-fill-icon2"
                      alt=""
                      src="/listbluedotsvg-fill-2.svg"
                    />
                    <div className="instant-setup-in-container">
                      {`Instant setup in an `}
                      <span className="esim-enabled-device">
                        eSIM enabled device
                      </span>
                      {`. `}
                    </div>
                    <img className="svg-icon25" alt="" src="/svg-31@2x.png" />
                  </div>
                  <div className="list-item5">
                    <img
                      className="list-blue-dotsvg-fill-icon3"
                      alt=""
                      src="/listbluedotsvg-fill.svg"
                    />
                    <div className="customer-service-available">
                      Customer service available in English.
                    </div>
                  </div>
                  <div className="list-item6">
                    <img
                      className="list-blue-dotsvg-fill-icon4"
                      alt=""
                      src="/listbluedotsvg-fill.svg"
                    />
                    <p className="link-list-container">
                      <span className="list-of-destinations">
                        List of destinations and network partners
                      </span>{" "}
                      detailed below.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cta">
                <div className="cta-container">
                  <div className="customer-type">
                    <div className="already-a-customer">
                      Already a customer:
                    </div>
                    <div className="new-customer">New customer:</div>
                  </div>
                </div>
                <div className="buttons">
                  <Button
                    className="button8"
                    startIcon={
                      <img width="24px" height="24px" src="/svg-4.svg" />
                    }
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "18",
                      background: "#fff",
                      border: "#fff solid 2px",
                      borderRadius: "24px",
                      "&:hover": { background: "#fff" },
                      height: 46,
                    }}
                  >
                    TOP UP your eSIM
                  </Button>
                  <Button
                    className="link-button1"
                    startIcon={
                      <img width="28.2px" height="24px" src="/svg-5.svg" />
                    }
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      background: "#008fa4",
                      border: "#008fa4 solid 2px",
                      borderRadius: "24px",
                      "&:hover": { background: "#008fa4" },
                      width: 213.1,
                      height: 46,
                    }}
                  >
                    BUY a new eSIM
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanContainer.propTypes = {
  className: PropTypes.string,
};

export default PlanContainer;
