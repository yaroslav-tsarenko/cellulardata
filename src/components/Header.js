import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <div className="background16">
        <div className="container20">
          <img
            className="link-svg16"
            loading="lazy"
            alt=""
            src="/link--svg-13.svg"
          />
          <div className="nav-list">
            <div className="item-link16">
              <a className="buy-an-esim1">BUY AN eSIM DATA PLAN</a>
              <div className="vertical-divider4" />
            </div>
            <div className="item-link-menu">
              <a className="get-started1">GET STARTED</a>
              <div className="vertical-divider5" />
            </div>
            <div className="item-link17">
              <a className="top-up1">TOP UP</a>
              <div className="vertical-divider6" />
            </div>
            <div className="item-link-menu1">
              <a className="help-center1">HELP CENTER</a>
              <div className="vertical-divider7" />
            </div>
          </div>
          <img
            className="link-ubigi-cartsvg1"
            loading="lazy"
            alt=""
            src="/link--ubigicartsvg@2x.png"
          />
          <Button
            className="link3"
            disableElevation={true}
            variant="outlined"
            sx={{
              color: "#fff",
              fontSize: "16",
              borderColor: "#fff",
              borderRadius: "30px",
              "&:hover": { borderColor: "#fff" },
              width: 124.9,
              height: 44,
            }}
          >
            Business
          </Button>
          <FormControl
            className="button5"
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
              width: "8.191489361702127%",
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
                  src="/svg-22.svg"
                  style={{ marginRight: "21px" }}
                />
              )}
            >
              <MenuItem>Partners   </MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <img
            className="link-my-account1"
            loading="lazy"
            alt=""
            src="/link--my-account.svg"
          />
          <img className="link-svg17" alt="" src="/link--svg-14.svg" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
