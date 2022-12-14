import React from "react";
import footerLogo from "../assets/footerLogo.svg";
import arrowRight from "../assets/Vector.svg";

const Footer = () => {
  return (
    <div id="footerSection" className="footer row m-0 my-page-section">
      <div className="col-12 col-md-6">
        <img src={footerLogo} alt="footerLogo" className="mb-5" />
        <h2>Subscribe to our newsletter</h2>
        <p>
          Get weekly news letter, updates
        </p>
        {/*<p>*/}
        {/*  Get weekly news letter, updates, <br />*/}
        {/*  news dummy text.*/}
        {/*</p>*/}
        <div className="footerEmailField my-5 ">
          <input type="text" placeholder="Your Email Address" />
          <button className="btn">
            <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
      {/*<div className="col-12 col-md-6 align-self-center">*/}
      {/*  <div className="footerUsefulLinks">*/}
      {/*    <h2>Useful Links</h2>*/}
      {/*    <ul>*/}
      {/*      <li>Useful Links 1</li>*/}
      {/*      <li>Useful Links 2</li>*/}
      {/*      <li>Useful Links 3</li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className=" align-items-center pb-3">
        <div>
          <p className="m-0">Three Eight Six © 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
