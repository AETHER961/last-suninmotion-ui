import React from "react";
import zalme from "../assets/zalme.png";
import aether from "../assets/Aether.png";
import steve from "../assets/Steve.jpg";
import ahmad from "../assets/Ahmad.jpg";

const Team = () => {
  return (
    <section
      id="teamSection"
      className="teamSection px-2 position-relative my-page-section"
    >
      <div className="row m-0 pb-0">
        <h1 className="teamTitle">The Team</h1>
        <span className="teamSubTitle">
          The humans bringing Solim to light.
        </span>
      </div>
      <div className="imagesDiv">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img src={ahmad} alt="zalme" className="zalmeImage" />
          <p className="zalmeName mt-3">Ahmad Al Khayat</p>
          <p className="zalmejob">Chairman at Three Eight Six</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img src={zalme} alt="zalme" className="zalmeImage" />
          <p className="zalmeName mt-3">Stephen </p>
          <p className="zalmejob">Founder</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center ">
          <img src={steve} alt="zalme" className="zalmeImage" />
          <p className="zalmeName mt-3">Steve Cleveland</p>
          <p className="zalmejob">
            Chief Executive Officer at Three Eight Six LLC
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img src={aether} alt="zalme" className="zalmeImage" />
          <p className="zalmeName mt-3">AETHER</p>
          <p className="zalmejob">Technology</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
