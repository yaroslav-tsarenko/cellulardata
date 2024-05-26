import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./BackgroundShadow.css";

const BackgroundShadow = ({ className = "" }) => {
  return (
    <section className={`backgroundshadow7 ${className}`}>
      <div className="overlayshadow">
        <div className="activation-content">
          <div className="background21">
            <img
              className="background-icon5"
              loading="lazy"
              alt=""
              src="/background1@2x.png"
            />
            <div className="background-wrapper">
              <div className="background22">
                <div className="activate-your-esim">Activate your eSIM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="activation-content1">
          <TextField
            className="background23"
            placeholder="Create your account"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="40px" height="40px" src="/background-1.png" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "40px",
                paddingLeft: "0px",
                borderRadius: "0px 0px 0px 0px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "20px",
                color: "#bebebe",
              },
            }}
          />
        </div>
        <img
          className="background-icon6"
          loading="lazy"
          alt=""
          src="/background-2@2x.png"
        />
        <div className="linking-content">
          <div className="background24">
            <div className="link-your-esim">Link your eSIM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundShadow;
