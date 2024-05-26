import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import Section from "../components/Section";
import Background from "../components/Background";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onItemLinkClick = useCallback(() => {
    navigate("/howtoget");
  }, [navigate]);

  const onItemLinkMenuClick = useCallback(() => {
    navigate("/helpcenter");
  }, [navigate]);

  return (
    <div className="landingpage">
      <main className="section-parent">
        <div className="section">
          <div className="container">
            <main className="image">
              <div className="hero-content">
                <div className="hero-title">
                  <div className="best-plans-title">
                    <a className="best">{`Best `}</a>
                    <img
                      className="logo-esim-whitesvg-icon"
                      loading="lazy"
                      alt=""
                      src="/logoesimwhitesvg@2x.png"
                    />
                    <a className="data-plans"> data plans</a>
                  </div>
                  <div className="connected-title">
                    <div className="to-stay-connected">
                      to stay connected worldwide
                    </div>
                    <img
                      className="best-mvno-2023svg-icon"
                      loading="lazy"
                      alt=""
                      src="/best-mvno-2023svg@2x.png"
                    />
                  </div>
                  <div className="backgroundshadow">
                    <div className="great">Great</div>
                    <img
                      className="img-icon"
                      loading="lazy"
                      alt=""
                      src="/img.svg"
                    />
                    <img className="img-icon1" alt="" src="/img-1.svg" />
                  </div>
                </div>
              </div>
              <div className="background">
                <Button
                  className="button"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    color: "#fff",
                    fontSize: "18",
                    background: "#008fa4",
                    border: "#008fa4 solid 2px",
                    borderRadius: "24px",
                    "&:hover": { background: "#008fa4" },
                    width: 224.6,
                    height: 44,
                  }}
                >
                  Browse data plans
                </Button>
              </div>
              <div className="gradient-instant">
                <div className="gradient" />
                <div className="container1">
                  <div className="overlayoverlayblur" />
                  <div className="container-inner">
                    <div className="frame-parent">
                      <div className="get-instant-travel-and-local-d-wrapper">
                        <h1 className="get-instant-travel-container">
                          <p className="get-instant-travel">
                            Get instant travel
                          </p>
                          <p className="and-local-data">
                            and local data plans with eSIM.
                          </p>
                        </h1>
                      </div>
                      <div className="with-ubigi-you-no-longer-need-wrapper">
                        <p className="with-ubigi-you-container">
                          <span className="with-ubigi-you-container1">
                            <span className="with-ubigi-you">
                              With Ubigi, you no longer need to swap physical
                              SIM cards, pay your operator’s
                            </span>
                            <span className="roaming-charges-or-search">
                              roaming charges, or search for public Wi‑Fi to
                              connect to the Internet abroad.
                            </span>
                            <span className="simply-get-your-ubigi">
                              Simply get your Ubigi eSIM plan for mobile data
                              and save money.
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="frame-group">
                        <div className="icon-digital-wrapper">
                          <div className="icon-digital">
                            <img
                              className="icon-ubigi-esim-bluesvg"
                              loading="lazy"
                              alt=""
                              src="/iconubigiesimbluesvg.svg"
                            />
                            <div className="icon-topup">
                              <img
                                className="icon-ubigi-setup-bluesvg"
                                loading="lazy"
                                alt=""
                                src="/iconubigisetupbluesvg.svg"
                              />
                            </div>
                            <div className="icon-topup1">
                              <img
                                className="icon-ubigi-prepaid-bluesvg"
                                loading="lazy"
                                alt=""
                                src="/iconubigiprepaidbluesvg.svg"
                              />
                            </div>
                            <div className="icon-topup2">
                              <img
                                className="icon-ubigi-world-bluesvg"
                                loading="lazy"
                                alt=""
                                src="/iconubigiworldbluesvg.svg"
                              />
                            </div>
                            <img
                              className="icon-easy-topup-bluesvg"
                              loading="lazy"
                              alt=""
                              src="/iconeasytopupbluesvg@2x.png"
                            />
                          </div>
                        </div>
                        <div className="digital-sim-card-parent">
                          <div className="digital-sim-card-container">
                            <p className="digital">Digital</p>
                            <p className="sim-card">SIM card</p>
                          </div>
                          <div className="instant-setup">
                            <p className="instant">Instant</p>
                            <p className="setup">setup</p>
                          </div>
                          <div className="heading-3">Prepaid</div>
                          <div className="destinations">
                            <p className="p">200+</p>
                            <p className="destinations1">destinations</p>
                          </div>
                          <div className="easy-top-up">
                            <p className="easy">Easy</p>
                            <p className="top-up">top-up</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="background1">
                    <div className="heading-2-where-do-you-need-wrapper">
                      <h2 className="heading-2">
                        Where do you need connectivity?
                      </h2>
                    </div>
                    <div className="backgroundborder-parent">
                      <div className="backgroundborder">
                        <div className="background2">
                          <div className="svg-parent">
                            <img className="svg-icon" alt="" src="/svg.svg" />
                            <div className="select-a-destination-wrapper">
                              <div className="select-a-destination">
                                Select a destination
                              </div>
                            </div>
                          </div>
                          <div className="svg-wrapper">
                            <img
                              className="svg-icon1"
                              alt=""
                              src="/svg-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="backgroundborder1">
                        <div className="background3">
                          <div className="usd">$ USD</div>
                          <div className="dropdown">
                            <img
                              className="svg-icon2"
                              alt=""
                              src="/svg-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input">
                        <div className="go">GO!</div>
                      </div>
                    </div>
                    <div className="plan-wrapper">
                      <div className="plan">
                        <div className="one-off-plan">
                          <div className="image-one-off">
                            <img
                              className="image-icon"
                              loading="lazy"
                              alt=""
                              src="/image@2x.png"
                            />
                          </div>
                          <div className="one-off-parent">
                            <div className="one-off">{`One-Off `}</div>
                            <div className="one-off-icon">
                              <img
                                className="svg-icon3"
                                alt=""
                                src="/svg-3@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="image-plan">
                          <input className="image-monthly" type="checkbox" />
                          <div className="monthly">{`Monthly `}</div>
                          <div className="icon-plan">
                            <img
                              className="svg-icon4"
                              alt=""
                              src="/svg-4@2x.png"
                            />
                          </div>
                        </div>
                        <div className="image-plan1">
                          <div className="image-wrapper">
                            <img
                              className="image-icon1"
                              alt=""
                              src="/image-2@2x.png"
                            />
                          </div>
                          <div className="annual">{`Annual `}</div>
                          <div className="svg-container">
                            <img
                              className="svg-icon5"
                              alt=""
                              src="/svg-5@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="container-icon"
                      loading="lazy"
                      alt=""
                      src="/container.svg"
                    />
                    <img
                      className="container-icon1"
                      alt=""
                      src="/container-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <header className="background4">
          <div className="link-svg-wrapper">
            <img
              className="link-svg"
              loading="lazy"
              alt=""
              src="/link--svg.svg"
            />
          </div>
          <div className="buy-wrapper">
            <div className="buy">
              <div className="navigation">
                <div className="buy-an-esim">BUY AN eSIM DATA PLAN</div>
              </div>
              <div className="vertical-divider" />
              <div className="navigation1">
                <a className="get-started">GET STARTED</a>
              </div>
            </div>
          </div>
          <div className="divider-topup-parent">
            <div className="divider-topup">
              <div className="vertical-divider1" />
            </div>
            <div className="topup">
              <div className="item-link" onClick={onItemLinkClick}>
                <div className="top-up-wrapper">
                  <a className="top-up1">TOP UP</a>
                </div>
                <div className="vertical-divider2" />
              </div>
            </div>
            <div className="item-link-menu" onClick={onItemLinkMenuClick}>
              <div className="help-center-wrapper">
                <a className="help-center">HELP CENTER</a>
              </div>
              <div className="vertical-divider3" />
            </div>
          </div>
          <div className="account">
            <div className="link-account-parent">
              <div className="link-account">
                <img
                  className="link-ubigi-cartsvg"
                  loading="lazy"
                  alt=""
                  src="/link--ubigicartsvg@2x.png"
                />
              </div>
              <Button
                className="link"
                disableElevation={true}
                variant="outlined"
                sx={{
                  color: "#fff",
                  fontSize: "16",
                  borderColor: "#fff",
                  borderRadius: "30px",
                  "&:hover": { borderColor: "#fff" },
                  width: 124.9,
                }}
              >
                Business
              </Button>
              <div className="button1">
                <a className="partners">Partners   </a>
                <div className="svg-frame">
                  <img className="svg-icon6" alt="" src="/svg-6.svg" />
                </div>
              </div>
              <img
                className="link-my-account"
                loading="lazy"
                alt=""
                src="/link--my-account.svg"
              />
            </div>
          </div>
          <div className="link-svg-container">
            <img className="link-svg1" alt="" src="/link--svg-1.svg" />
          </div>
        </header>
      </main>
      <div className="section1">
        <div className="gradient1" />
        <div className="device-check">
          <div className="logo-white">
            <div className="heading-2-get-started-wrapper">
              <div className="heading-21">Get started!</div>
            </div>
            <div className="heading-31">
              Check if your device is eSIM compatible:
            </div>
          </div>
        </div>
        <div className="app-install">
          <img className="image-icon2" alt="" src="/image-3@2x.png" />
          <img className="svg-icon7" alt="" src="/svg-7@2x.png" />
          <img className="svg-icon8" alt="" src="/svg-8@2x.png" />
          <img className="svg-icon9" alt="" src="/svg-9.svg" />
        </div>
        <div className="device-selector">
          <div className="dropdown-wrapper">
            <div className="background5">
              <div className="android-dropdown-options">
                <div className="options">
                  <div className="container2">
                    <div className="select-a-android">Select a ANDROID</div>
                    <div className="android-icon">
                      <img className="image-icon3" alt="" src="/image-4.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="form-select-drop-arrowsvg-icon"
                alt=""
                src="/formselectdroparrowsvg.svg"
              />
              <div className="container3">
                <div className="select-a-android1">Select a ANDROID</div>
              </div>
            </div>
            <div className="background6">
              <div className="apple-dropdown-options">
                <div className="options1">
                  <div className="container4">
                    <div className="select-a-apple">Select a APPLE</div>
                    <div className="apple-icon">
                      <img className="image-icon4" alt="" src="/image-4.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="form-select-drop-arrowsvg-icon1"
                alt=""
                src="/formselectdroparrowsvg.svg"
              />
              <div className="container5">
                <div className="select-a-apple1">Select a APPLE</div>
              </div>
            </div>
            <div className="background7">
              <div className="windows-dropdown-options">
                <div className="options2">
                  <div className="container6">
                    <div className="select-a-windows">Select a WINDOWS</div>
                    <div className="windows-icon">
                      <img className="image-icon5" alt="" src="/image-4.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="form-select-drop-arrowsvg-icon2"
                alt=""
                src="/formselectdroparrowsvg.svg"
              />
              <div className="container7">
                <div className="select-a-windows1">Select a WINDOWS</div>
              </div>
            </div>
          </div>
          <div className="compatibility-links">
            <div className="local-link-wrapper">
              <div className="link-view">
                View our full list of eSIM compatible devices
              </div>
              <div className="frame-div">
                <img className="svg-icon10" alt="" src="/svg-10@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <img className="image-icon6" alt="" src="/image-7@2x.png" />
        <div className="section-inner">
          <FrameComponent />
        </div>
        <img
          className="official-ubigi-appwebp-icon"
          alt=""
          src="/officialubigiappwebp@2x.png"
        />
      </div>
      <div className="section3">
        <Container1 image="/image@2x.png" prop="#1" leisure="Leisure" />
        <Container1
          image="/image@2x.png"
          prop="#2"
          leisure="Professional"
          propHeight="unset"
          propBackgroundImage="url('/image@2x.png')"
          propFlex="unset"
          propMinHeight="532px"
          propWidth="342.4px"
        />
        <Container />
        <Container1
          image="/image@2x.png"
          prop="#4"
          leisure="Business"
          propHeight="1063px"
          propBackgroundImage="url('/image@2x.png')"
          propFlex="1"
          propMinHeight="unset"
          propWidth="221.3px"
        />
      </div>
      <div className="section4">
        <img
          className="youtube-play-iconpng"
          alt=""
          src="/youtubeplayiconpng@2x.png"
        />
        <div className="background8">
          <img
            className="logo-esim-whitesvg-icon1"
            alt=""
            src="/logoesimwhitesvg-1@2x.png"
          />
          <h1 className="what-is-an-esim-container">
            <p className="what-is">What is</p>
            <p className="an-esim">an eSIM?</p>
          </h1>
        </div>
      </div>
      <Section />
      <Background />
      <div className="footer">
        <footer className="footer-content">
          <div className="footer-top">
            <div className="logo-ubigi-wrapper">
              <img className="logo-ubigi-icon" alt="" src="/logo-ubigi.svg" />
            </div>
            <img
              className="connecteverywhere-icon"
              alt=""
              src="/connecteverywhere.svg"
            />
          </div>
          <div className="footer-links">
            <div className="best-mvno-2023svg-wrapper">
              <img
                className="best-mvno-2023svg-icon1"
                alt=""
                src="/best-mvno-2023svg-1@2x.png"
              />
            </div>
            <div className="about-us">
              <div className="about-us1">About us</div>
              <div className="about-us-links">
                <div className="item-link1">Ubigi story</div>
                <div className="item-link2">Ubigi in the press</div>
                <div className="item-link3">Ubigi network partners</div>
                <div className="item-link4">Ubigi app</div>
                <div className="item-link5">Ubigi.com</div>
              </div>
            </div>
          </div>
          <div className="get-in-touch">
            <div className="get-in-touch1">Get in touch</div>
            <div className="get-in-touch-links">
              <div className="item-link6">Connect your employees</div>
              <div className="item-link7">Affiliation program</div>
              <div className="item-link8">Distributor program</div>
              <div className="item-link9">Contact support</div>
              <div className="item-link10">Career Opportunities</div>
            </div>
          </div>
          <div className="assistance">
            <div className="assistance1">Assistance</div>
            <div className="list-item">Help Center</div>
          </div>
          <div className="social-media">
            <div className="social-media-links">
              <img
                className="link-ubigis-facebook-accoun"
                alt=""
                src="/link--ubigis-facebook-account.svg"
              />
              <img
                className="link-ubigis-instagram-accou"
                alt=""
                src="/link--ubigis-instagram-account.svg"
              />
              <img
                className="link-ubigis-twitter-account"
                alt=""
                src="/link--ubigis-twitter-account.svg"
              />
              <img
                className="link-ubigis-youtube-account"
                alt=""
                src="/link--ubigis-youtube-account.svg"
              />
            </div>
          </div>
        </footer>
        <div className="horizontal-divider" />
        <div className="legal">
          <div className="legal-links">
            <div className="item-link11">{`Terms & Conditions`}</div>
            <div className="item-link12">Legal notice</div>
            <div className="item-link13">Cookie Declaration</div>
          </div>
          <div className="copyright">
            <p className="ubigi-2024">
              Ubigi © 2024, Ltd. All rights reserved. Ubigi is an NTT service.
            </p>
            <img className="logo-nttpng-icon" alt="" src="/logonttpng@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
