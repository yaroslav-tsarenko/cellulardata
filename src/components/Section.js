import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <div className={`section6 ${className}`}>
      <div className="icon-testimonial">
        <img className="svg-icon13" alt="" src="/svg-15.svg" />
      </div>
      <img className="svg-icon14" alt="" src="/svg-16.svg" />
      <div className="frame-container">
        <div className="saying-parent">
          <div className="saying">
            <div className="heading-1">What our customers are saying</div>
          </div>
          <div className="container10">
            <div className="container11">
              <div className="backgroundshadow2">
                <div className="review-card-content">
                  <div className="review-card-details">
                    <img className="img-icon4" alt="" src="/img-2.svg" />
                    <div className="container12">
                      <div className="verified">Verified</div>
                    </div>
                  </div>
                  <div className="highly-recommend-ubigi-parent">
                    <b className="highly-recommend-ubigi">
                      Highly recommend Ubigi
                    </b>
                    <div className="link1">
                      <div className="highly-recommend-ubigi1">
                        Highly recommend Ubigi, smooth from the start !
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reviewer-info">
                  <div className="container13">
                    <b className="jesmin-lim">jesmin Lim,</b>
                  </div>
                  <div className="hours-ago">15 hours ago</div>
                </div>
              </div>
              <div className="backgroundshadow3">
                <div className="frame-parent1">
                  <div className="frame-parent2">
                    <div className="img-parent">
                      <img className="img-icon5" alt="" src="/img-2.svg" />
                      <div className="container14">
                        <div className="verified1">Verified</div>
                      </div>
                    </div>
                    <b className="great-app">Great app</b>
                  </div>
                  <div className="link2">
                    <p className="great-app-worked-container">
                      <span>
                        <span className="great-app-worked">
                          Great app! Worked quickly and efficiently. I got the
                          10
                        </span>
                        <span className="gb-package-for">
                          GB package for 30 days in Jap...
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="container-parent">
                  <div className="container15">
                    <b className="jan">Jan,</b>
                  </div>
                  <div className="day-ago">1 day ago</div>
                </div>
              </div>
              <div className="backgroundshadow4">
                <div className="frame-parent3">
                  <div className="img-group">
                    <img className="img-icon6" alt="" src="/img-2.svg" />
                    <div className="container16">
                      <div className="verified2">Verified</div>
                    </div>
                  </div>
                  <div className="good-deal-for-tokyo-and-seoul-parent">
                    <b className="good-deal-for">
                      Good deal for Tokyo and Seoul
                    </b>
                    <div className="link3">
                      <p className="their-best-of-container">
                        <span className="their-best-of">
                          Their Best of Asia plan worked well for a 2 week trip
                          to
                        </span>
                        <span className="tokyo-and-seoul">
                          Tokyo and Seoul. Signal was...
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container-group">
                  <div className="container17">
                    <b className="joe-from-dallas">Joe from Dallas, TX,</b>
                  </div>
                  <div className="day-ago1">1 day ago</div>
                </div>
              </div>
              <div className="backgroundshadow5">
                <div className="frame-parent4">
                  <div className="img-container">
                    <img className="img-icon7" alt="" src="/img-2.svg" />
                    <div className="container18">
                      <div className="verified3">Verified</div>
                    </div>
                  </div>
                  <b className="fantastic">Fantastic</b>
                  <div className="link4">
                    <p className="i-never-knew-container">
                      <span className="i-never-knew">
                        I never knew Ubigi existed until I went to Portugal, my
                      </span>
                      <span className="daughter-told-me">
                        daughter told me about it. It...
                      </span>
                    </p>
                  </div>
                </div>
                <div className="container-container">
                  <div className="container19">
                    <b className="lianna-condello">Lianna Condello,</b>
                  </div>
                  <div className="days-ago">2 days ago</div>
                </div>
              </div>
              <div className="backgroundshadow6">
                <div className="frame-parent5">
                  <div className="img-parent1">
                    <img className="img-icon8" alt="" src="/img-2.svg" />
                    <div className="container20">
                      <div className="verified4">Verified</div>
                    </div>
                  </div>
                  <div className="worked-perfectly-during-my-2-w-parent">
                    <b className="worked-perfectly-during">
                      Worked perfectly during my 2 weeks…
                    </b>
                    <div className="link5">
                      <p className="worked-perfectly-during-container">
                        <span>
                          <span className="worked-perfectly-during1">
                            Worked perfectly during my 2 weeks trip, had signal
                            all
                          </span>
                          <span className="the-time-high">
                            the time. High speed. Recomme...
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container-parent1">
                  <div className="container21">
                    <b className="valentina">Valentina,</b>
                  </div>
                  <div className="days-ago1">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-rating-wrapper">
          <div className="review-rating">
            <div className="rated-42-5-based-on-wrapper">
              <div className="rated-42-container">
                <span>{`Rated `}</span>
                <b>4.2</b>
                <span>{` / 5 based on `}</span>
              </div>
            </div>
            <div className="link-strong">
              <div className="reviews">10,596 reviews</div>
            </div>
            <div className="showing-our-favorite">
              . Showing our favorite reviews.
            </div>
          </div>
        </div>
        <div className="app-store-button">
          <img className="link-img" alt="" src="/link--img.svg" />
        </div>
      </div>
    </div>
  );
};


export default Section;
