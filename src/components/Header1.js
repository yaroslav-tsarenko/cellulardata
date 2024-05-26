import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <div className={`header3 ${className}`}>
      <header className="background31">
        <div className="logo">
          <img
            className="link-svg22"
            loading="lazy"
            alt=""
            src="/link--svg-13.svg"
          />
        </div>
        <div className="buy-plan">
          <div className="top-up4">
            <div className="business">
              <div className="buy-an-esim4">BUY AN eSIM DATA PLAN</div>
            </div>
            <div className="vertical-divider16" />
          </div>
        </div>
        <div className="navigation1">
          <a className="get-started5">GET STARTED</a>
        </div>
        <div className="background-child">
          <div className="vertical-divider-group">
            <div className="vertical-divider17" />
            <div className="feedback">
              <a className="top-up5">TOP UP</a>
            </div>
          </div>
        </div>
        <div className="vertical-divider-wrapper">
          <div className="vertical-divider18" />
        </div>
        <div className="navigation2">
          <a className="help-center4">HELP CENTER</a>
        </div>
        <div className="newsletter-form-parent">
          <div className="newsletter-form1">
            <div className="vertical-divider19" />
          </div>
          <div className="footer-content-parent">
            <div className="footer-content3">
              <img
                className="link-ubigi-cartsvg4"
                loading="lazy"
                alt=""
                src="/link--ubigicartsvg1@2x.png"
              />
            </div>
            <Button
              className="link8"
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
            <FormControl
              className="button9"
              variant="standard"
              sx={{
                borderColor: "#fff",
                borderStyle: "SOLID",
                borderTopWidth: "2px",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderLeftWidth: "2px",
                backgroundColor: "#fff",
                borderRadius: "24px",
                width: "15.6599552572707%",
                height: "44px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "44px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "44px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "44px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "44px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Roboto",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "14px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="12px"
                    height="7px"
                    src="/svg.svg"
                    style={{ marginRight: "21px" }}
                  />
                )}
              >
                <MenuItem>Partners   </MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <img
            className="link-my-account4"
            loading="lazy"
            alt=""
            src="/link--my-account.svg"
          />
        </div>
        <div className="s-v-g">
          <img className="link-svg23" alt="" src="/link--svg-14.svg" />
        </div>
      </header>
      <div className="background32">
        <img
          className="image-icon25"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <h1 className="assistance6">ASSISTANCE</h1>
        <div className="ubigis-iccid">Ubigi’s ICCID</div>
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
