import { Button } from "@mui/material";
import "./SubscriptionBenefits.css";

const SubscriptionBenefits = ({ className = "" }) => {
  return (
    <div className={`subscription-benefits ${className}`}>
      <div className="benefits-content">
        <div className="get-fresh-news-about-ubigi-ou-parent">
          <p className="get-fresh-news-container3">
            <span className="get-fresh-news2">
              Get fresh news about Ubigi, our promotions
            </span>
            <span className="and-our-latest-data-plan2">
              and our latest data plan releases.
            </span>
          </p>
          <div className="benefits-checkbox">
            <div className="checkbox1">
              <input className="image" type="checkbox" />
              <div className="yes-send-me2">{`Yes, send me only good news! `}</div>
            </div>
          </div>
        </div>
        <Button
          className="input16"
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
  );
};

SubscriptionBenefits.propTypes = {
  className: PropTypes.string,
};

export default SubscriptionBenefits;
