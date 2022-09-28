import React from "react";
import footerLogo from "../assets/footerLogo.svg";

const Footer = () => {
  return (
    <div className="footer row m-0">
      <div className="col-12 col-md-6">
        <img src={footerLogo} alt="footerLogo" />
      </div>
      <div className="col-12 col-md-6"></div>
    </div>
  );
};

export default Footer;
