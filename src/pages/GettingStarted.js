import { useCallback } from "react";
import Main from "../components/Main";
import GreatContainer from "../components/GreatContainer";
import ResetOptions1 from "../components/ResetOptions1";
import ResetOptions from "../components/ResetOptions";
import ResetLinkOptions from "../components/ResetLinkOptions";
import PlanPurchaseOptions from "../components/PlanPurchaseOptions";
import { useNavigate } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import "./GettingStarted.css";

const GettingStarted = () => {
  const navigate = useNavigate();

  const onLinkHeading31Click = useCallback(() => {
    navigate("/assistance");
  }, [navigate]);

  return (
    <div className="gettingstarted">
      <div className="horizontal-divider" />
      <Main />
      <main className="search">
        <div className="background6">
          <div className="form1">
            <div className="input9">
              <div className="your-search-ubigi">
                Your search: Ubigi, eSIM, iPhone…
              </div>
            </div>
          </div>
        </div>
        <section className="background7">
          <div className="frame-parent">
            <div className="frame-wrapper">
              <div className="heading-2-getting-started-wi-parent">
                <div className="heading-29">
                  Getting started with Ubigi eSIM
                </div>
                <div className="link-heading-3">
                  <div className="i-am-about-container">
                    <p className="i-am-about">
                      I am about to travel. How do I manage my Ubigi eSIM
                      profile on my
                    </p>
                    <p className="device">device ?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="how-to">
              <div className="install-container">
                <GreatContainer />
                <div className="install-links">
                  <div className="link-heading-31">
                    <div className="how-to-get">
                      How to get and install a Ubigi eSIM profile on iPhone?
                    </div>
                  </div>
                  <div className="reinstall">
                    <div className="link-heading-32">
                      <div className="how-to-get1">
                        How to get and install a Ubigi eSIM profile on an
                        Android device?
                      </div>
                    </div>
                    <div className="link-heading-33">
                      <div className="how-to-get2">
                        How to get and install a Ubigi eSIM profile on iPad?
                      </div>
                    </div>
                    <div className="link-heading-34">
                      <div className="how-to-get-container">
                        <span className="how-to-get-container1">
                          <p className="how-to-get3">
                            How to get and install a new Ubigi eSIM profile on
                            my Windows 10 or
                          </p>
                          <p className="windows-11-laptop">
                            Windows 11 laptop or tablet?
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="link-heading-35">
                    <div className="how-do-i-container">
                      <span className="how-do-i-container1">
                        <p className="how-do-i">
                          How do I activate my Ubigi services with my Windows 10
                          or Windows
                        </p>
                        <p className="device-equipped-with">
                          11 device equipped with a Ubigi physical SIM card?
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="link-heading-36">
                    <div className="how-do-i-container2">
                      <span className="how-do-i-container3">
                        <p className="how-do-i1">
                          How do I activate my Ubigi services with my Windows 10
                          or Windows
                        </p>
                        <p className="laptop-or-tablet">
                          11 laptop or tablet equipped with a Ubigi eSIM?
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="e-sim">
                    <div className="link-heading-37">
                      <div className="i-do-not-container">
                        <span className="i-do-not-container1">
                          <p className="i-do-not">
                            I do not get the “eSIM – Mobile Data in my device”
                            button on my iPad
                          </p>
                          <p className="to-install-my">
                            to install my Ubigi profile. Why and what should I
                            do?
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="link-heading-38">
                      <div className="i-do-not-container2">
                        <p className="i-do-not1">
                          I do not get the “eSIM – Mobile Data in my device”
                          button on my
                        </p>
                        <p className="iphone-to-install">
                          iPhone to install my Ubigi profile. Why and what
                          should I do?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact">
                <div className="border1">
                  <img
                    className="image-icon12"
                    loading="lazy"
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <div className="contact-title">
                    <div className="heading-210">Contact</div>
                  </div>
                  <div className="contact-description">
                    <p className="you-havent-found-container">
                      <span>
                        <span className="you-havent-found-the-answers">
                          <span>You haven’t found the answers</span>
                        </span>
                        <span className="to-your-questions-in-assistanc">
                          <span>to your questions in Assistance or </span>
                          <span className="faq">FAQ</span>
                          <span className="span">?</span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="contact-button">
                    <button className="link-button">
                      <div className="contact-us">Contact us</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="manage-account">
              <div className="reset">
                <div className="link-heading-39">
                  <div className="how-to-reinstall-container">
                    <span className="how-to-reinstall-container1">
                      <p className="how-to-reinstall">
                        How to reinstall the Ubigi eSIM profile I deleted on my
                        Windows 10 or
                      </p>
                      <p className="windows-11-device">Windows 11 device?</p>
                    </span>
                  </div>
                </div>
                <div className="link-heading-310">
                  <div className="i-have-a-container">
                    <span className="i-have-a-container1">
                      <p className="i-have-a">
                        I have a new Android device. How can I reinstall my
                        Ubigi eSIM profile
                      </p>
                      <p className="on-it">on it?</p>
                    </span>
                  </div>
                </div>
                <div className="reset-options">
                  <div className="link-heading-311">
                    <div className="i-have-a-container2">
                      <p className="i-have-a1">
                        I have a new Windows10 device. How can I reinstall my
                        Ubigi eSIM
                      </p>
                      <p className="profile-on-it">profile on it?</p>
                    </div>
                  </div>
                  <div className="link-heading-312">
                    <div className="does-my-ubigi-container">
                      <span className="does-my-ubigi-container1">
                        <p className="does-my-ubigi">
                          Does my Ubigi eSIM profile have a validity period and
                          will expire one
                        </p>
                        <p className="day">day?</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="link-heading-313">
                  <div className="how-can-i-container">
                    <p className="how-can-i">
                      How can I enable my Ubigi eSIM on my iPhone when I want to
                      use it
                    </p>
                    <p className="again">again?</p>
                  </div>
                </div>
                <div className="lost">
                  <div className="link-heading-314">
                    <div className="i-lost-my">
                      I lost my device. How can I block my Ubigi eSIM account?
                    </div>
                  </div>
                  <div className="link-heading-315">
                    <div className="how-can-i-container1">
                      <span className="how-can-i-container2">
                        <p className="how-can-i1">
                          How can I disable my Ubigi eSIM on my iPhone when I
                          travel or when
                        </p>
                        <p className="i-do-not2">I do not use it?</p>
                      </span>
                    </div>
                  </div>
                  <div className="link-heading-316">
                    <p className="i-have-several-container">
                      <span className="i-have-several-container1">
                        <span className="i-have-several">
                          I have several Ubigi eSIM profiles installed in my
                          device. Is it possible
                        </span>
                        <span className="to-have-a">
                          to have a unique Ubigi account to manage them all?
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="link-heading-317">
                  <div className="how-can-i-container3">
                    <p className="how-can-i2">
                      How can I enable my Ubigi eSIM profile on my iPad when I
                      want to
                    </p>
                    <p className="use-it-again">use it again?</p>
                  </div>
                </div>
                <div className="link-heading-318">
                  <div className="how-can-i-container4">
                    <p className="how-can-i3">
                      How can I disable my Ubigi eSIM profile on my iPad when I
                      travel or
                    </p>
                    <p className="when-i-do">when I do not use it?</p>
                  </div>
                </div>
                <ResetOptions1
                  howCanIEnableMyUbigiESIMO="How can I enable my Ubigi eSIM on my Android device when I want"
                  toUseItAgain="to use it again?"
                  howCanIDisableMyUbigiESIM="How can I disable my Ubigi eSIM on my Android device when I travel"
                  orWhenIDoNotUseIt="or when I do not use it?"
                />
                <div className="link-heading-319">
                  <div className="how-to-delete">
                    How to delete a Ubigi eSIM profile on iPhone/iPad?
                  </div>
                </div>
                <ResetOptions
                  howToDeleteAUbigiESIMProf="How to delete a Ubigi eSIM profile on an Android device?"
                  howToDeleteAUbigiESIMProf1="How to delete a Ubigi eSIM profile on a Windows 10 or Windows 11"
                  device="device ?"
                />
              </div>
            </div>
          </div>
          <div className="account-management">
            <div className="reset-password">
              <div className="heading-211">
                Managing your Ubigi eSIM account
              </div>
              <div className="reset-links">
                <ResetLinkOptions
                  howToResetMyPasswordForMy="How to reset my password for my Ubigi eSIM account?"
                  howCanICreateMyUbigiAccou="How can I create my Ubigi account on iPad?"
                />
                <div className="link-heading-320">
                  <div className="how-can-i4">
                    How can I create my Ubigi account on iPhone?
                  </div>
                </div>
                <ResetOptions
                  howToDeleteAUbigiESIMProf="How can I create my Ubigi account on an Android device?"
                  howToDeleteAUbigiESIMProf1="How can I create my Ubigi account on a Windows 10 or Windows 11"
                  device="device?"
                  propBackgroundImage="url('/link--heading-324@3x.png')"
                  propBackgroundImage1="url('/link--heading-37@3x.png')"
                  propAlignSelf="stretch"
                  resetOptionsAlignSelf="stretch"
                  resetOptionsWidth="unset"
                />
                <div className="link-heading-321">
                  <div className="how-can-i5">
                    How can I change my Ubigi password?
                  </div>
                </div>
                <div className="link-heading-322">
                  <div className="how-can-i6">
                    How can I check the remaining balance of my Ubigi eSIM?
                  </div>
                </div>
                <div className="link-heading-323">
                  <div className="how-to-delete1">
                    How to delete my Ubigi account?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="data-plans1">
            <div className="buy">
              <div className="heading-212">Buying Ubigi eSIM data plans</div>
              <div className="purchase">
                <div className="link-heading-324">
                  <div className="how-can-i-container5">
                    <p className="how-can-i7">
                      How can I buy a data plan from the Ubigi application on
                      iPhone or
                    </p>
                    <p className="ipad">iPad?</p>
                  </div>
                </div>
                <div className="link-heading-325">
                  <div className="how-can-i-container6">
                    <p className="how-can-i8">
                      How can I buy a data plan from the Ubigi application on an
                      Android
                    </p>
                    <p className="device1">device?</p>
                  </div>
                </div>
                <div className="link-heading-326">
                  <div className="how-can-i-container7">
                    <p className="how-can-i9">
                      How can I buy a data plan from the Ubigi application by
                      using a
                    </p>
                    <p className="windows-10-or">
                      Windows 10 or Windows 11 device?
                    </p>
                  </div>
                </div>
                <PlanPurchaseOptions
                  doINeedWiFiToPurchaseAUbi="Do I need Wi-Fi to purchase a Ubigi data plan?"
                  iPurchasedTheWrongDataPla="I purchased the wrong data plan and did not use it, how can I change"
                  it="it?"
                />
                <div className="link-heading-327">
                  <div className="i-paid-for-container">
                    <p className="i-paid-for">
                      I paid for a Ubigi data plan but it does not appear in my
                      account,
                    </p>
                    <p className="what-should-i">what should I do?</p>
                  </div>
                </div>
                <div className="link-heading-328">
                  <div className="how-to-get4">
                    How to get an invoice for my Ubigi data plan purchase?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="connection-issues">
            <div className="restored-data">
              <div className="new-iphone-restore">
                <div className="heading-213">Facing connection issues</div>
                <div className="iphone-data-restore">
                  <div className="link-heading-329">
                    <div className="i-restored-my-container">
                      <span className="i-restored-my-container1">
                        <p className="i-restored-my">
                          I restored my data on my (new) iPhone, but my eSIM
                          profile does not
                        </p>
                        <p className="work-what-to">work. What to do?</p>
                      </span>
                    </div>
                  </div>
                  <ResetLinkOptions
                    howToResetMyPasswordForMy="Resolve an issue with Ubigi eSIM profile on Android device"
                    howCanICreateMyUbigiAccou="Resolve an issue with Ubigi eSIM profile on iPhone"
                    propBackgroundImage="url('/link--heading-330@3x.png')"
                    propBackgroundImage1="url('/link--heading-32@3x.png')"
                    propMarginTop="-0.1px"
                  />
                  <ResetOptions
                    howToDeleteAUbigiESIMProf="iMessage does not work with my Ubigi eSIM profile. What to do ?"
                    howToDeleteAUbigiESIMProf1="How do I know if my Ubigi eSIM profile is activated on my"
                    device="iPhone/iPad?"
                    propBackgroundImage="url('/link--heading-33@3x.png')"
                    propBackgroundImage1="url('/link--heading-34@3x.png')"
                    propAlignSelf="stretch"
                    resetOptionsAlignSelf="stretch"
                    resetOptionsWidth="unset"
                  />
                  <ResetLinkOptions
                    howToResetMyPasswordForMy="How can I check if my Ubigi eSIM profile is installed on my iPad?"
                    howCanICreateMyUbigiAccou="How can I check if my Ubigi eSIM profile is installed on my iPhone?"
                    propBackgroundImage="url('/link--heading-319@3x.png')"
                    propBackgroundImage1="url('/link--heading-331@3x.png')"
                    propMarginTop="unset"
                  />
                  <div className="iphone-restore-options">
                    <div className="link-heading-330">
                      <div className="how-do-i-container4">
                        <p className="how-do-i2">
                          How do I know if my Ubigi eSIM profile is activated
                          and ready to use
                        </p>
                        <p className="on-my-android">on my Android device?</p>
                      </div>
                    </div>
                    <div className="link-heading-331">
                      <div className="my-esim-ubigi-container">
                        <p className="my-esim-ubigi">
                          My eSIM Ubigi profile is installed and active on my
                          iPhone/iPad, the
                        </p>
                        <p className="network-is-displayed">
                          network is displayed but I don't have access to the
                          Internet, what
                        </p>
                        <p className="should-i-do">should I do?</p>
                      </div>
                    </div>
                  </div>
                  <div className="link-heading-332">
                    <div className="my-ubigi-esim-container">
                      <p className="my-ubigi-esim">
                        My Ubigi eSIM profile is installed and active on my
                        iPhone/iPad but I
                      </p>
                      <p className="dont-have-any">
                        don't have any network displayed, what can I do?
                      </p>
                    </div>
                  </div>
                  <div className="link-heading-333">
                    <div className="mobile-data-is-container">
                      <p className="mobile-data-is">
                        Mobile data is applied to the Ubigi eSIM profile on my
                        iPhone/iPad
                      </p>
                      <p className="but-i-cant">
                        but I can't access the internet, what can I do?
                      </p>
                    </div>
                  </div>
                  <PlanPurchaseOptions
                    doINeedWiFiToPurchaseAUbi="How do I know if my Ubigi profile is installed on my Android device?"
                    iPurchasedTheWrongDataPla="My Ubigi eSIM profile is installed and active on my Android device but"
                    it="I don’t have any network displayed, what can I do?"
                    propDebugCommit="unset"
                    propBackgroundImage="url('/link--heading-330@3x.png')"
                    propBackgroundImage1="url('/link--heading-311@3x.png')"
                    propWidth="703.9px"
                  />
                  <div className="link-heading-334">
                    <div className="my-ubigi-esim-container1">
                      <span className="my-ubigi-esim-container2">
                        <p className="my-ubigi-esim1">
                          My Ubigi eSIM profile is installed and active on my
                          Android device,
                        </p>
                        <p className="the-network-is">
                          the network is displayed but I don’t have access to
                          the Internet, what
                        </p>
                        <p className="should-i-do1">should I do?</p>
                      </span>
                    </div>
                  </div>
                  <div className="link-heading-335">
                    <div className="i-can-not">
                      I can not connect with my Ubigi eSIM
                    </div>
                  </div>
                  <ResetOptions1
                    howCanIEnableMyUbigiESIMO="Mobile data is applied to the Ubigi eSIM profile on my Android"
                    toUseItAgain="device, but impossible to access the internet, what can I do?"
                    howCanIDisableMyUbigiESIM="How do I check the APN configuration of my Ubigi eSIM on Windows"
                    orWhenIDoNotUseIt="10 or Windows 11?"
                    propAlignSelf="stretch"
                    propBackgroundImage="url('/link--heading-36@3x.png')"
                    propAlignSelf1="stretch"
                    propBackgroundImage1="url('/link--heading-37@3x.png')"
                    propAlignSelf2="stretch"
                    propDebugCommit="unset"
                  />
                  <div className="link-heading-336">
                    <div className="how-do-i-container5">
                      <p className="how-do-i3">
                        How do I know if my Ubigi eSIM profile is activated on
                        my Windows
                      </p>
                      <p className="or-windows-11">10 or Windows 11 device?</p>
                    </div>
                  </div>
                  <div className="link-heading-337">
                    <div className="my-ubigi-esim-container3">
                      <p className="my-ubigi-esim2">
                        My Ubigi eSIM profile is activated on my Windows 10 or
                        Windows 11
                      </p>
                      <p className="device-but-i">
                        device but I do not have a network, what should I do?
                      </p>
                    </div>
                  </div>
                  <div className="link-heading-338">
                    <div className="ubigi-connection-is-container">
                      <p className="ubigi-connection-is">
                        Ubigi connection is not working. Should I disable any
                        active DNS or
                      </p>
                      <p className="vpn-on-my">VPN on my device?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="other-questions">
                <div className="asking-other-questions-container">
                  <p className="asking-other-questions">
                    Asking other questions about Ubigi eSIM
                  </p>
                  <p className="service">service</p>
                </div>
                <div className="phone-calls">
                  <ResetLinkOptions
                    howToResetMyPasswordForMy="Can I make phone calls with Ubigi eSIM data plans?"
                    howCanICreateMyUbigiAccou="Which mobile devices support Ubigi eSIM?"
                    propBackgroundImage="url('/link--heading-334@3x.png')"
                    propBackgroundImage1="url('/link--heading-335@3x.png')"
                    propMarginTop="unset"
                  />
                  <ResetLinkOptions
                    howToResetMyPasswordForMy="How to use Ubigi with a dual SIM device?"
                    howCanICreateMyUbigiAccou="What is a one-off and a recurring Ubigi data plans?"
                    propBackgroundImage="url('/link--heading-312@3x.png')"
                    propBackgroundImage1="url('/link--heading-336@3x.png')"
                    propMarginTop="unset"
                  />
                  <ResetOptions1
                    howCanIEnableMyUbigiESIMO="How to use tethering with an iPhone/iPad to share the Ubigi"
                    toUseItAgain="connectivity?"
                    howCanIDisableMyUbigiESIM="How to use tethering with an Android device to share the Ubigi"
                    orWhenIDoNotUseIt="connectivity?"
                    propAlignSelf="stretch"
                    propBackgroundImage="url('/link--heading-328@3x.png')"
                    propAlignSelf1="stretch"
                    propBackgroundImage1="url('/link--heading-337@3x.png')"
                    propAlignSelf2="stretch"
                    propDebugCommit="unset"
                  />
                  <div className="link-heading-339">
                    <div className="how-to-use-container">
                      <p className="how-to-use">
                        How to use tethering with a Windows 10 or Windows 11
                        device to
                      </p>
                      <p className="share-the-ubigi">
                        share the Ubigi connectivity?
                      </p>
                    </div>
                  </div>
                  <ResetLinkOptions
                    howToResetMyPasswordForMy="I did not use my Ubigi data plan, can I get a refund?"
                    howCanICreateMyUbigiAccou={`My device does not show "Ubigi" as carrier name, is it normal?`}
                    propBackgroundImage="url('/link--heading-339@3x.png')"
                    propBackgroundImage1="url('/link--heading-325@3x.png')"
                    propMarginTop="unset"
                  />
                  <div
                    className="link-heading-340"
                    onClick={onLinkHeading31Click}
                  >
                    <div className="how-can-i10">
                      How can I find the ICCID of my Ubigi eSIM?
                    </div>
                  </div>
                  <ResetLinkOptions
                    howToResetMyPasswordForMy="How to set the APN for Ubigi eSIM?"
                    howCanICreateMyUbigiAccou="The Ubigi antenna pictogram is not displayed in Japan, why?"
                    propBackgroundImage="url('/link--heading-327@3x.png')"
                    propBackgroundImage1="url('/link--heading-340@3x.png')"
                    propMarginTop="-0.1px"
                  />
                  <div className="link-heading-341">
                    <div className="how-can-i11">
                      How can I find PIN, PIN2 or PUK codes for my Ubigi eSIM?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
    </div>
  );
};

export default GettingStarted;
