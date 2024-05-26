import "./Background4.css";

const Background4 = ({ className = "" }) => {
  return (
    <section className={`background30 ${className}`}>
      <div className="we-accept-major-international">
        We accept major international payment methods:
      </div>
      <img className="apple-paypng-icon" alt="" src="/applepaypng@2x.png" />
      <div className="payment-logos">
        <img className="visapng-icon" alt="" src="/visapng@2x.png" />
      </div>
      <img className="mastercardpng-icon" alt="" src="/mastercardpng@2x.png" />
      <div className="payment-logos1">
        <img
          className="american-expresspng-icon"
          alt=""
          src="/americanexpresspng@2x.png"
        />
      </div>
      <img className="paypalpng-icon" alt="" src="/paypalpng@2x.png" />
      <div className="maestropng-wrapper">
        <img className="maestropng-icon" alt="" src="/maestropng@2x.png" />
      </div>
      <img className="union-paypng-icon" alt="" src="/unionpaypng@2x.png" />
      <img className="jcbsvg-icon" alt="" src="/jcbsvg.svg" />
    </section>
  );
};


export default Background4;
