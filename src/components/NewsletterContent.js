import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./NewsletterContent.css";

const NewsletterContent = ({
  className = "",
  group,
  propWidth,
  propAlignSelf,
}) => {
  const newsletterContentStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`newsletter-content ${className}`}
      style={newsletterContentStyle}
    >
      <div className="newsletter-title1">
        <div className="newsletter-heading">
          <div className="newsletter-element-leftsvg3">
            <img className="group-icon1" loading="lazy" alt="" src={group} />
            <img
              className="groupe-5170-icon1"
              alt=""
              src="/input-icon-right.svg"
            />
          </div>
        </div>
        <div className="ubigis-newsletter2">Ubigi's newsletter</div>
      </div>
      <div className="email-input1">
        <TextField
          className="input15"
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
      <div className="newsletter-element-rightsvg-wrapper">
        <img
          className="newsletter-element-rightsvg-icon2"
          loading="lazy"
          alt=""
          src="/newsletterelementrightsvg.svg"
        />
      </div>
    </div>
  );
};

NewsletterContent.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default NewsletterContent;
